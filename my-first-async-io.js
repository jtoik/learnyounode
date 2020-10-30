const fs = require('fs');  

const file = process.argv[2];

function getData(callback) {
    fs.readFile(file, (err, data) => {
    if (err) throw err;
    dataString = data.toString()
    dataStringLines = dataString.split("\n")
    callback()
  })
}

function logResult() {
    console.log(dataStringLines.length - 1)
}

getData(logResult)