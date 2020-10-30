const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer(function (req, res) {  
    var urlFull = url.parse(req.url, true)
    var urlPathName = urlFull.pathname
    if (urlPathName == '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var query = urlFull.query
        var queryString = query.iso
        var date = new Date(queryString)
        var time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        var timeFormatted = JSON.stringify(time)
        res.end(timeFormatted)
    } else if (urlPathName == '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var query = urlFull.query
        var queryString = query.iso
        var date = new Date(queryString)
        var time = {
            unixtime: date.getTime()
        }
        var timeFormatted = JSON.stringify(time)
        res.end(timeFormatted)
    } else {
        res.end()
    }

})  
server.listen(port)