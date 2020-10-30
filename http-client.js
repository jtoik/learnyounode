const http = require('http');

const url = process.argv[2]

http.get(url, function callback (res){
    res.setEncoding('utf-8')
    res.on('data', function (data) {console.log(data)})
});