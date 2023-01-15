const express = require('express');
const Product = require('../model/product');
const router = express.Router();

router.get('/get', async (request, response) => {
    try {
        let products = await Product.find();
        response.status(200).json(products);
    }
    catch (err) {
        console.log(err);
        response.status(500).json({
            msg: err.message
        })
    }
})


router.post('/products', async (request, response) => {
    try {
        let newProduct = {
            name: request.body.name,
            image: request.body.image,
            price: request.body.price,
            qty: request.body.qty,
            info: request.body.info
        };
        //if the product exists or not
        let product = await Product.findOne({ name: newProduct.name })
        if (product) {
            return response.status(401).json({
                msg: 'Product already exists'
            })
        }
        product = new Product(newProduct);
        product = await product.save();
        response.status(200).json({
            request: 'Product is created',
            product: product
        })
    }
    catch (err) {
        console.log(err);
        response.status(500).json({
            msg: err.message
        })
    }
})
module.exports = router;