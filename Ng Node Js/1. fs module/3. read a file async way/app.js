//Core Module ; fs
const fs = require('fs');

//read file in async way
//fs.readFile('path',option,callback) -> Syntax
fs.readFile('message.txt', 'utf-8', (err, data) => {

    if (err) throw err;
    console.log(data);

})