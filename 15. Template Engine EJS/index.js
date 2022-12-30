//importing modules
const express = require('express');
const path = require('path');


const app = express();
//setting public directory path into variable
const publicPath = path.join(__dirname, 'public')

//setting template engine
app.set('view engine','ejs')


app.get('/profile',(req,res)=>{
    const user={
        name:"hritik manbattulwar",
        age:22,
        sal:8000,
        addr:"Hyderabad"
    }
  res.render('profile',{user})
})


app.listen(5000)