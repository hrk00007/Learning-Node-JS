const {MongoClient}=require('mongodb'); //1st way
//const MongoClient=require('mongodb').MongoClient; //2nd way

//create variables for MongoDB
const url='mongodb://localhost:27017';

//connect client with URL
const client = new MongoClient(url);

//storing dbName
const database='storedb';

async function getData(){
    let result=await client.connect();
    let db=result.db(database); //giving database name to client
    let collection=db.collection('books'); //giving collection name to database
    let response=  await collection.find().toArray(); //reading data from collection
    console.log(response); //priting that data
}

getData();
