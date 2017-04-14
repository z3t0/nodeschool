const http = require('http')

const url = process.argv[2]

var all = ""

http.get(url, (res) => {

    res.setEncoding('utf8')

    res.on('data', (data) => {
        all += data
    })

    res.on('end', () => {
        console.log(all.length)
        console.log(all)
    })

})

