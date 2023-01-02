const express= require('express');
const conn= require('./config')
const app = express();

app.use(express.json());

app.get('/getData',(req,res)=>{
    conn.query("select * from employee",(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result)
        }
    })
})


//POST API
app.post('/create',(req,res)=>{
    const data=req.body;
    conn.query(`INSERT INTO employee SET ?`,data,(err,result,fields)=>{
            if(err) 
            res.send("error in API");
            else
            res.send(result);
      });
});

//PUT API
app.put('/update/:emp_id',(req,res)=>{
    let data=[req.body.emp_desg,req.body.emp_name,req.body.emp_sal,req.params.emp_id];
    console.log(data);
    conn.query("UPDATE employee SET emp_desg = ?, emp_name=?,emp_sal = ? where emp_id = ?",data,(err,result)=>{
        if(err) res.send("error in API");
        else{
            res.send(result)
        }
    })
})

//DELETE API
app.delete('/delete/:emp_id',(req,res)=>{
    conn.query("DELETE from employee where emp_id="+req.params.emp_id,(err,result)=>{
        if(err) res.send("error in API");
        else{
            res.send(result)
        }
    })
})
app.listen(5000);