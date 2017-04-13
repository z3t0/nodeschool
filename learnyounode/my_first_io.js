const path = process.argv[2]
const fs = require('fs')

var data = fs.readFileSync(path, 'utf8').split('\n')

console.log(data.length - 1)
