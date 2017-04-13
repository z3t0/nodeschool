const path = process.argv[2]
const fs = require('fs')

fs.readFile(path, 'utf8', (err, data) => {

    if (err) throw err

    data = data.split('\n')
    console.log(data.length - 1)
})
