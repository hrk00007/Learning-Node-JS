const dbConnect= require('./mongodb');
const express= require('express');

const app = express();

app.use(express.json());

app.delete('/deleteBook/:bookId',async (req,res)=>{
    console.log(req.params.bookId);
    let data = await dbConnect();
    let result=await data.deleteOne({bookId:req.params.bookId});
    res.send(result);
})

app.listen(5000); 