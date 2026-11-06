const fs = require('fs')
const path = require('path')

const INDEX_FILE = path.join(__dirname, 'index.json')

function normalizeName(input) {
  let name = String(input).trim()
  name = name.replace(/^el[-_]?/i, '')
  name = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
  name = name.replace(/[_\s]+/g, '-')
  return name.toLowerCase()
}

function loadIndex() {
  if (!fs.existsSync(INDEX_FILE)) {
    throw new Error(`index.json 不存在: ${INDEX_FILE}`)
  }
  return JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'))
}

function findComponent(index, query) {
  const key = normalizeName(query)
  const components = index.components || {}

  for (const camelKey of Object.keys(components)) {
    if (normalizeName(camelKey) === key) {
      return { camelKey, ...components[camelKey] }
    }
  }
  return null
}

function levenshtein(a, b) {
  const m = a.length
  const n = b.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      )
    }
  }
  return dp[m][n]
}

function fuzzyMatch(index, query) {
  const components = index.components || {}
  const key = normalizeName(query)
  const raw = String(query).trim().toLowerCase()

  const scored = []
  for (const camelKey of Object.keys(components)) {
    const comp = components[camelKey]
    const compKey = normalizeName(camelKey)
    const title = (comp.title || '').toLowerCase()

    const dist = levenshtein(key, compKey)
    const nameContains =
      compKey.includes(key) || key.includes(compKey) || compKey.includes(key)
    const titleContains = raw && (title.includes(raw) || raw.includes(title))

    if (nameContains || titleContains || dist <= Math.max(2, key.length / 3)) {
      scored.push({
        camelKey,
        title: comp.title,
        doc: comp.doc,
        score: dist - (nameContains ? 3 : 0) - (titleContains ? 4 : 0),
      })
    }
  }

  scored.sort((a, b) => a.score - b.score)
  return scored
}

function main() {
  const input = process.argv[2]
  if (!input) {
    console.error('用法: node getPath.js <组件名>')
    console.error('示例: node getPath.js elUpload  或  node getPath.js date-picker')
    process.exit(1)
  }

  let index
  try {
    index = loadIndex()
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }

  const exact = findComponent(index, input)
  if (exact) {
    console.log(exact.doc)
    process.exit(0)
  }

  const candidates = fuzzyMatch(index, input)
  if (candidates.length === 0) {
    console.error(`未找到组件: ${input}`)
    process.exit(1)
  }

  console.error(`未精确匹配到 "${input}"，最可能的组件：`)
  candidates.slice(0, 5).forEach((c) => {
    console.error(`  ${c.camelKey}\t${c.title}\t${c.doc}`)
  })
  process.exit(2)
}

main()