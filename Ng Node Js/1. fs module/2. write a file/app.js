//Core Module ; fs
const fs = require('fs');


//read file in sync way
let fileContent = fs.readFileSync('message.txt')


//write file in sync way
let newFileContent = `This is the new file content: ${fileContent}`
fs.writeFileSync('welcome.txt', newFileContent, 'utf-8');
console.log('data is written to file');