const http = require('http');
const students=require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,'application/json');
    // res.write(JSON.stringify({name:"Hritik",age:22}));  
    res.write(JSON.stringify(students)); //passing students and converting into JSON
    res.end();
}).listen(5000);