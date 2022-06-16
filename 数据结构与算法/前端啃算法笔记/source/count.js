const fs = require('fs')
const path = require('path')
const dir =  path.resolve(__dirname, './code')

let files = fs.readdirSync(dir)
console.log(`已经刷了${files.length}题了，加油`);