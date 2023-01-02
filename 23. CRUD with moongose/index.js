const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codeheist');

//Creating A Schema
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

const saveInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Creating a Product
    let data= new Product({
        name:"Iphone 14 pro",
        price:120000,
        brand:"Iphone",
        category:"SmartPhones"
    });

    //saving the Product
    const result = await data.save();

    //print result
    console.log(result)
}

// saveInDB();

//READING THE PRODUCT FROM MONGODB
const readInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Reading Data
    let data= await Product.find();
    console.log(data);
}

// readInDB();


//UPADING THE PRODUCT in MONGODB

const updateInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Updating Data
    let data= await Product.updateOne(
        {name:"Iphone 14 pro"},
        {$set:{name:"Iphone 14 pro Max",price:14000}});
    console.log(data);
}
// updateInDB();


//DELETING THE PRODUCT in MONGODB

const deleteInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Deleting Data
    let data= await Product.deleteOne({name:"Iphone 14 pro Max"});
    console.log(data);
}

deleteInDB();