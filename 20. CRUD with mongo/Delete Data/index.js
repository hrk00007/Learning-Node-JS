const {MongoClient}= require('mongodb');

const url= 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConn(){
    let conn= await client.connect();
    let db= await conn.db('studentsdb');
    return db.collection('students');
}

//Delete data from the database
const deleteData = async ()=>{
    let data = await dbConn();
    let result=await data.deleteOne({name:'Hritik'});
    console.log(result);
    if(result.acknowledged){
        console.log("Data deleted successfully");
    }else{
        console.log("Data deletion Failed");
    }
}

deleteData();
