const {MongoClient} = require('mongodb');

const url= 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConn(){
    let conn=await client.connect();
    let db= conn.db('studentsdb');
    return db.collection('students');
}

const insert =async ()=>{
    const collection=await dbConn();
    const result=await collection.insert({name:'Sagar',age:22});
    console.log(result);
    if(result.acknowledged){
        console.log('Data Inserted successfully');
    }else{
        console.log('Data Insertion Failed');
    }
}

insert();