const express= require('express')
require('./config')
const Product= require('./product');


const app = express();

app.use(express.json());  // it will convert every req res into json 

//POST API
app.post('/create',async (req,res)=>{
        let data=new Product(req.body);
        let result=await data.save();
        console.log(result);
        console.log(req.body);
        res.send("Done!");
})

//GET API
app.get('/list',async (req,res)=>{
    let result= await Product.find();
    res.send(result);
})

//DELETE API
app.delete('/delete/:_id',async (req,res)=>{
    console.log(req.params);
    let data=await Product.deleteOne(req.params);
    res.send(data);
})

//UPDATE API
app.put('/update/:_id',async (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    let data=await Product.updateOne(req.params,{$set:req.body});
    res.send(data);
})


app.listen(5000);