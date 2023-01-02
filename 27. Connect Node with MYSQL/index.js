const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:"9997",
    database:"codeheist"
})

conn.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("connected")
    }
})

conn.query("select * from employee",(err,result)=>{
    console.log(result);
})