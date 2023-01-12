//Core Module ; fs
const fs = require('fs');

//read file in async way
//fs.readFile('path',option,callback) -> Syntax
fs.readFile('message.txt', 'utf-8', (err, data) => {

    if (err) throw err;
    //write file in async way
    //fs.writeFile( 'path',content,option,callback) -> Syntax
    fs.writeFile('welcome.txt', data, 'utf-8', (err) => {
        if (err) throw err;
        console.log(`data is written to a file`);
    })

})

console.log("/n", "Welcome to Asynchronous Way of doing things")