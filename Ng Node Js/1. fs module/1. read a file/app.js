//Core Module ; fs
const fs = require('fs');

console.log();
//read file in sync way
let fileContent1 = fs.readFileSync('message.txt')
console.log(fileContent1)

console.log();
console.log();

//read file in sync way
let fileContent2 = fs.readFileSync('message.txt', 'utf-8')
console.log(fileContent2)

console.log();