const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017';
const client= new MongoClient(url);

async function dbConn(){
    let conn=await client.connect();
    let db= conn.db('studentsdb');
    return db.collection('students');
}

//Update Function
const main= async ()=>{
    let collection = await dbConn();
    let result=await collection.updateOne({name:'Sagar'},{$set:{name:'aditya'}});
    // let result=await collection.updateMany({name:'Sagar'},{$set:{name:'aditya'}});
    console.log(result);
}
main();