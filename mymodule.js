module.exports = function (dir, ext, callback) {
    const fs = require('fs');  
    const path = require('path');
    list = [];

    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        }

        for (let i=0; i<files.length; i++) {
            if ('.' + ext == path.extname(files[i])) {
                list.push(files[i])
            }
        }

        return callback(null, list)
    })
}