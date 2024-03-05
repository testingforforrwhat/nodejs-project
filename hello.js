console.log('Hello World!');

// helloModule.js
// 将 hello 函数封装成一个模块

function hello(name) {
    return `Hello, ${name}!`;
}

module.exports = hello;
