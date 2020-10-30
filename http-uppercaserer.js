const http = require('http')
const map = require('through2-map')  

const port = process.argv[2]

const server = http.createServer(function (req, res) {  
    if (req.method === 'POST') {
        req.pipe(map(function (chunk) { 
            console.log(chunk.toString()) 
            return chunk.toString().toUpperCase()  
        })).pipe(res)
    } else {
        res.end()
    }
}) 
server.listen(port)