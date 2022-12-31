const {MongoClient} = require('mongodb');

//connect mongoClient with URL
const url='mongodb://localhost:27017';
const client=new MongoClient(url);


async function dbConn(){
    let conn=await client.connect();
    let db=conn.db('storedb'); //storedb is my database Name
    return db.collection('students'); //students is my collection
}

//READ DATA FROM COLLECTION using promises then
/*
 dbConn().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data);
    })
})

 */

//READ DATA FROM COLLECTION using async await then
const main= async ()=>{
    let data= await dbConn();
    data=await data.find().toArray();
    console.log(data);
}

main();