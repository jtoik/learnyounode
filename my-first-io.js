const fs = require('fs');  

const file = process.argv[2];
var data = fs.readFileSync(file);
dataString = data.toString();
dataStringLines = dataString.split("\n");
console.log(dataStringLines.length - 1);