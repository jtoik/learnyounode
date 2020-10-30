const http = require('http')
const { BufferList } = require('bl')

const url = process.argv[2]
const bl = new BufferList()


http.get(url, function callback (res){    
    res.setEncoding('utf-8')
    res.on('data', (data) => {bl.append(data.toString())})
    res.on('end', () => {
        console.log(bl.length)
        console.log(bl.toString())
    })
})