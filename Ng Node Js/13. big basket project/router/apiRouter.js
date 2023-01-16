const { request } = require('express');
const express = require('express');
const Product = require('../model/product');
const router = express.Router();

router.get('/products', async (request, response) => {
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
router.get('/products/:id', async (request, response) => {
    try {
        let products = await Product.findById(request.params.id);
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

/*
    USAGE : Update a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : PUT
    Fields : name , image , price , qty , info
 */
router.put('/products/:id', async (request, response) => {
    console.log('PUT Request called')
    let productId = request.params.id
    try {
        let updatedProduct = {
            name: request.body.name,
            image: request.body.image,
            price: request.body.price,
            qty: request.body.qty,
            info: request.body.info
        }
        //check if product already exists
        let product = await Product.findById(productId)
        if (!product) {
            return response.status(401).json({
                msg: 'No Product Found'
            });
        }
        //update product
        product = await Product.findByIdAndUpdate(productId, {
            $set: updatedProduct
        }, { new: true })

        //send response that product has been updated
        response.status(200).json({
            result: 'Product updated',
            product: product
        })

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
})

/*
    USAGE : Delete a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : DELETE
    Fields : no-fields
 */
router.delete('/products/:id', async (request, response) => {
    let productId = request.params.id;
    try {
        let product = await Product.findById(productId);
        //product exists or not
        if (!product) {
            return response.status(401).json({
                message: 'Product not found'
            })
        }
        //delete
        product = await Product.findByIdAndDelete(productId);
        response.status(200).json({
            result: 'Product successfully deleted',
            product: product
        })
    } catch (error) {
        response.status(500).json({
            message: error.message
        });
    }
})
module.exports = router;