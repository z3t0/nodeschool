const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const type = '.' + process.argv[3]


fs.readdir(dir, (err, files) => {

    if (err) throw err

    for (var i = 0; i < files.length; i++) {

        if (path.extname(files[i]) === type)
            console.log(files[i])
    }
})

