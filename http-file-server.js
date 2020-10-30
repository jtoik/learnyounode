const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function (req, res) {  
    const src = fs.createReadStream(file)
    src.pipe(res)
})  
server.listen(port)