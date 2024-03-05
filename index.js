// index.js
// 通过 require 引入 hello.js 模块，并调用 hello 函数传入值

const helloFunction = require('./hello');

const name = 'Alice';
const greeting = helloFunction(name);

console.log(greeting);


// index.js

const { add, subtract } = require('./functionsModule');

const result1 = add(5, 3);
console.log('Result of addition:', result1);

const result2 = subtract(10, 4);
console.log('Result of subtraction:', result2);

