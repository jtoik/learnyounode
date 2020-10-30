const net = require('net');

const tcpPort = process.argv[2]

const server = net.createServer(function (socket) {

    const date = new Date()

    function pad(n){return n<10 ? '0'+n : n}
    const year = date.getFullYear()
    const month = pad(1 + date.getMonth())
    const day = pad(date.getDate())
    const hour = pad(date.getHours())
    const minute = pad(date.getMinutes())
    
    const dateFormatted = (
        year + '-' 
        + month + '-' 
        + day + ' ' 
        + hour + ':' 
        + minute
    )

    socket.write(dateFormatted + '\n')
    socket.end()
})
server.listen(tcpPort)
