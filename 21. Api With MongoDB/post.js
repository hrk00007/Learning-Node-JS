const express = require('express');
const dbConn= require('./mongodb');

const app = express();
app.use(express.json());
app.post('/sendBook',async(req, res)=>{
    let data=await dbConn();
    let result=await data.insert(req.body);
    res.send(result);
})

app.listen(5000)