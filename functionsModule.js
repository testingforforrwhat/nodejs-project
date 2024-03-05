// functionsModule.js

// 通过引入 fs 模块，您可以在 Node.js 环境中进行文件的读取、写入、修改等操作
const fs = require('fs');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function readJSONFiles(files, callback) {
    let count = files.length;
    const results = [];

    files.forEach((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                results.push({ file, error: err.message });
            } else {
                results.push({ file, content: JSON.parse(data) });
            }

            count--;

            if (count === 0) {
                callback(results);
            }
        });
    });
}

module.exports = {
    add,
    subtract,
    readJSONFiles
};

