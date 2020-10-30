const fs = require('fs');  
const path = require('path');

const [a, b, dir, ext] = process.argv;

extFull = '.' + ext

function getFileNames() {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (let i=0; i<files.length; i++) {
            if (extFull == path.extname(files[i])) {
                console.log(files[i])
            }
        }
    })
};

getFileNames()