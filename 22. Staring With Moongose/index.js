const { Schema } = require('mongoose');
const mongoose= require('mongoose');

const main= async()=>{
    await mongoose.connect('mongodb://localhost:27017/codeheist')
    let ProductSchema= new mongoose.Schema({
        name:String
    });
    const ProductsModel= mongoose.model('product',ProductSchema);

    let data= new ProductsModel({name:"Iphone 14",price:1000});
    let result= await data.save();
    console.log(result);
}

main();