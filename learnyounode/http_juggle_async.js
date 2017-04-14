const http = require('http')
const bl = require('bl')

var results = []
var count = 0

var urls = process.argv.slice(2)

urls.forEach((url, index) => {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) { return console.error(err) }

      results[index] = data.toString()
      count++

      // console.log(count)

      if (count === urls.length) {
        print()
      }
    }))
  })
})

function print () {
  results.forEach((e) => {
    console.log(e)
  })
}
