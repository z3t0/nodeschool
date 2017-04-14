const filter = require('./filter_ls_module.js')

filter(process.argv[2], process.argv[3], (err, data) => {

    if (err) throw err

    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
    }

})
