const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  collectUtilDirs,
  collectSourceFiles,
  hasOfficialLogImport,
  findUtilFolder,
  findLoggingUtils,
  groupByUtilFolder,
  main,
} = require('./scan_logging_utils');

function setupProject(structure) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'moni-scan-'));
  for (const [rel, content] of Object.entries(structure)) {
    const target = path.join(root, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  return root;
}

function testUtilFolderPriority() {
  const root = setupProject({
    'app/src/main/java/com/x/utils/LogUtil.kt': 'import android.util.Log\nobject LogUtil {}\n',
    'app/src/main/java/com/x/feature/Feature.kt': 'import android.util.Log\n',
  });

  const dirs = collectUtilDirs(root).map((file) => path.relative(root, file)).sort();
  assert.deepStrictEqual(dirs, [path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils')]);
  assert.deepStrictEqual(findLoggingUtils(root).map((file) => path.relative(root, file)), [
    path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils', 'LogUtil.kt'),
  ]);
}

function testFolderDetection() {
  const root = setupProject({
    'app/src/main/java/com/x/utils/logging/LogUtil.kt': 'import android.util.Log\n',
  });

  const file = path.join(root, 'app/src/main/java/com/x/utils/logging/LogUtil.kt');
  assert.strictEqual(path.relative(root, findUtilFolder(file)), path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils'));
}

function testFilenameMatchAndImport() {
  const root = setupProject({
    'app/src/main/java/com/x/util/mylog.kt': 'import android.util.Log\n',
    'app/src/main/java/com/x/util/Other.kt': 'import android.util.Log\n',
  });

  const found = findLoggingUtils(root).map((file) => path.relative(root, file)).sort();
  assert.deepStrictEqual(found, [path.join('app', 'src', 'main', 'java', 'com', 'x', 'util', 'mylog.kt')]);
}

function testFallbackToAllFilesWhenNoUtilDir() {
  const root = setupProject({
    'app/src/main/java/com/x/feature/LogStuff.kt': 'import android.util.Log\n',
    'app/src/main/java/com/x/feature/Plain.kt': 'class Plain\n',
  });

  const found = findLoggingUtils(root).map((file) => path.relative(root, file));
  assert.deepStrictEqual(found, [path.join('app', 'src', 'main', 'java', 'com', 'x', 'feature', 'LogStuff.kt')]);
}

function testBoundaryOfficialLogImport() {
  const root = setupProject({
    'app/src/main/java/com/x/util/NoLog.kt': 'import kotlin.collections.List\n',
  });

  assert.strictEqual(hasOfficialLogImport(path.join(root, 'app/src/main/java/com/x/util/NoLog.kt')), false);
}

function testGroupedOutput() {
  const root = setupProject({
    'app/src/main/java/com/x/utils/LogUtil.kt': 'import android.util.Log\n',
    'app/src/main/java/com/x/utils/Other.kt': 'import android.util.Log\n',
  });

  const groups = groupByUtilFolder(findLoggingUtils(root), root);
  assert.deepStrictEqual([...groups.keys()], [path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils')]);
  assert.strictEqual(groups.get(path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils')).length, 1);
}

function testCwdDefault() {
  const root = setupProject({
    'app/src/main/java/com/x/utils/LogUtil.kt': 'import android.util.Log\n',
  });

  const originalCwd = process.cwd();
  const captured = [];
  const originalLog = console.log;
  try {
    process.chdir(root);
    console.log = (value) => captured.push(value);
    main([]);
  } finally {
    console.log = originalLog;
    process.chdir(originalCwd);
  }

  assert.deepStrictEqual(captured, [
    path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils'),
    `  ${path.join('app', 'src', 'main', 'java', 'com', 'x', 'utils', 'LogUtil.kt')}`,
  ]);
}

function testCollectSourceFiles() {
  const root = setupProject({
    'build/Ignored.kt': 'object Ignored\n',
    'app/src/main/java/A.kt': 'class A\n',
    'app/src/main/java/B.java': 'class B {}\n',
  });

  const files = collectSourceFiles(root).map((file) => path.relative(root, file)).sort();
  assert.deepStrictEqual(files, [path.join('app', 'src', 'main', 'java', 'A.kt'), path.join('app', 'src', 'main', 'java', 'B.java')]);
}

testUtilFolderPriority();
testFilenameMatchAndImport();
testFallbackToAllFilesWhenNoUtilDir();
testCollectSourceFiles();
testBoundaryOfficialLogImport();
testFolderDetection();
testGroupedOutput();
testCwdDefault();
console.log('ok');
