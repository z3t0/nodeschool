const fs = require('fs')
const path = require('path')

module.exports = (dir, ext, cb) => {

    ext = '.' + ext

    fs.readdir(dir, (err, files) => {

        if (err) return cb(err)

        var listFiles = []

        for (var i = 0; i < files.length; i++) {

            if (path.extname(files[i]) === ext)
                listFiles.push(files[i])
        }

        cb(null, listFiles)
    })
}


