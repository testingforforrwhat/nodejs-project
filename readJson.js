
// 通过引入 fs 模块，您可以在 Node.js 环境中进行文件的读取、写入、修改等操作
const fs = require('fs');

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

// 要读取的 JSON 文件列表
const filesToRead = ['./resources/test.json'];

readJSONFiles(filesToRead, (results) => {
    results.forEach((result) => {
        if (result.error) {
            console.log(`Failed to read ${result.file}: ${result.error}`);
        } else {
            console.log(`Content of ${result.file}:`);
            console.log(result.content);
        }
    });
});
