#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKIP_DIRS = new Set(['.git', '.gradle', 'build', 'out', 'dist', 'node_modules']);
const SOURCE_EXTS = new Set(['.kt', '.kts', '.java']);
const UTIL_DIRS = new Set(['util', 'utils']);

const LOG_IMPORT = /\bimport\s+android\.util\.Log\b/;
const LOG_FQCN = /\bandroid\.util\.Log\b/;

function isSkippedDir(name) {
  return SKIP_DIRS.has(name);
}

function isSourceFile(file) {
  return SOURCE_EXTS.has(path.extname(file));
}

function collectUtilDirs(root) {
  const dirs = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      if (isSkippedDir(entry.name)) continue;
      const full = path.join(current, entry.name);
      if (UTIL_DIRS.has(entry.name.toLowerCase())) dirs.push(full);
      stack.push(full);
    }
  }

  return dirs;
}

function collectSourceFiles(root) {
  const files = [];
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (isSkippedDir(entry.name)) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (isSourceFile(entry.name)) files.push(full);
    }
  }

  return files;
}

function hasOfficialLogImport(file) {
  const text = fs.readFileSync(file, 'utf8');
  return LOG_IMPORT.test(text) || LOG_FQCN.test(text);
}

function findUtilFolder(file) {
  let current = path.dirname(file);
  while (true) {
    const base = path.basename(current).toLowerCase();
    if (UTIL_DIRS.has(base)) return current;
    const parent = path.dirname(current);
    if (parent === current) return null;
    current = parent;
  }
}

function findLoggingUtils(root) {
  const utilDirs = collectUtilDirs(root);
  const scopedFiles = utilDirs.length
    ? dedupe(utilDirs.flatMap((dir) => collectSourceFiles(dir)))
    : collectSourceFiles(root);

  const nameMatches = scopedFiles.filter((file) => /log/i.test(path.basename(file)));
  const nameHits = nameMatches.filter(hasOfficialLogImport);
  if (nameHits.length) return dedupe(nameHits);

  const contentHits = scopedFiles.filter(hasOfficialLogImport);
  return dedupe(contentHits);
}

function groupByUtilFolder(files, root) {
  const groups = new Map();
  for (const file of files) {
    const folder = findUtilFolder(file) || path.dirname(file);
    const key = path.relative(root, folder) || '.';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(file);
  }
  return groups;
}

function dedupe(items) {
  return [...new Set(items)];
}

function main(argv = process.argv.slice(2)) {
  const root = path.resolve(argv[0] || process.cwd());
  if (!fs.existsSync(root)) {
    console.error(`error: path not found: ${root}`);
    process.exit(2);
  }

  const matches = findLoggingUtils(root);
  if (!matches.length) {
    console.log('No log util found.');
    return 0;
  }

  const groups = groupByUtilFolder(matches, root);
  for (const [folder, files] of groups) {
    console.log(folder);
    for (const file of files) {
      console.log(`  ${path.relative(root, file)}`);
    }
  }

  return 0;
}

if (require.main === module) main();

module.exports = {
  collectUtilDirs,
  collectSourceFiles,
  hasOfficialLogImport,
  findUtilFolder,
  findLoggingUtils,
  groupByUtilFolder,
  main,
};
