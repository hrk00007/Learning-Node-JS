const express= require('express');
const app=express();

//localhost:5000
app.get('',(req,res)=>{
        res.send(`<h1>Welcome to Home Page</h1>
                  <a href="/about">Go to About Page</a>`)
})

//localhost:5000/about
app.get('/about',(req,res)=>{
    res.send(`<h1>Welcome to About Page</h1>
                <input type="text" placeholder="${req.query.name}"/>
                <button>Click ME</button>
               <a href="/">Go to Home Page</a>`)
})

//localhost:5000/data1
app.get('/data1',(req,res)=>{
    res.send({
        name:"Hritik",
        age:23,
        address:"Nagpur"
    })
})

//localhost:5000/data2
app.get('/data2',(req,res)=>{
    res.send([
        {
        "name":"Hritik",
        "age":23,
        "address":"Pune"
        },
        {
            "name":"Atharva",
            "age":22,
            "address":"Nagpur"
        },
        {
                "name":"Laxmi",
                "age":22,
                "address":"Nagpur"
        }
   ]
)
})

app.listen(5000)