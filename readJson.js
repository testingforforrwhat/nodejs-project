




const { readJSONFiles } = require('./functionsModule');

// 要读取的 JSON 文件列表
const filesToRead = ['./resources/test.json', './resources/noteExist.json'];

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
