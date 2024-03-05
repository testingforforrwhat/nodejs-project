// index.js
// 通过 require 引入 hello.js 模块，并调用 hello 函数传入值

const helloFunction = require('./hello');

const name = 'Alice';
const greeting = helloFunction(name);

console.log(greeting);
