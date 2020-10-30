const mymodule = require('./mymodule');

const [a, b, dir, ext] = process.argv;

mymodule(dir, ext, logList);

function logList() {
    list.forEach(x => console.log(x))
};