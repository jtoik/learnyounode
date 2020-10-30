const http = require('http')
const bl = require('bl')

const [a, b, ...urls] = process.argv
var result = []
var count = 0

function getData(index) { 
    http.get(urls[index], function (res){    
        res.pipe(bl(function (err, data) {
            if (err) {
              return console.error(err)
            }
      
            result[index] = data.toString()
            count++
      
            if (count === 3) {
              print()
            }
          }))
    })
}

function print() {
    for (var i = 0; i < 3; i++) {
        console.log(result[i])
      }
}

for (let i = 0; i < urls.length; i++) {
    getData(i)
}