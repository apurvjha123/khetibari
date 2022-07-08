const express = require('express');
const router = express.Router();
const Product = require("../models/Product");


// WE WILL PERFORM CRUD OPRATION HARE

// get all the products

router.get('/',async (req, res)=>{
    try {
        const product = await Product.find();
        if(! product){
        return res.status(404).json({message : 'Product not found'})
        }
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error);
    }
})

// Find the id

router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    try {
        const product = await Product.findById(id);

        if(! product){
          return  res.status(404).json({message : 'Product by this ID not found'})
        }
        return res.status(200).json({ product });
    } catch (error) {
        console.log(error)
    }
})

// create product

router.post('/', async (req, res)=>{
    try {
        const {name , category, description, price, seller, image }= req.body
        const user = await Product.findOne({seller})
        if(user){
            return res.status(404).json({error : 'Seller already Exist'})
        }
        const product = new Product({
            name,
            category,
            description,
            price,
            seller,
            image
        })
        await product.save();

        if(! product){
           return res.status(404).json({message : 'Unable to add this product'})
        }
        console.log(product)
        return res.status(201).json({ product });
    } catch (error) {
        console.log(error)
    }
})

// Update data

router.put('/:productId', async (req, res)=>{
    let product;
    try {
        const id = req.params.productId;
        const {name , category, description, price, seller, image }= req.body
        product = await Product.findByIdAndUpdate(id,{
            name,
            category,
            description,
            price,
            seller,
            image
        })
        product = await product.save();

        if(! product){
          return  res.status(404).json({message : 'Unable to update'})
        }
        return res.status(201).json({ product });
    }catch(error){
        console.log(error);
    }
})

// delete

router.delete('/:productID',async (req,res)=>{
    const id = req.params.productID;
    try {
        let product = await Product.findByIdAndRemove(id)

        if(! product){
          return  res.status(404).json({message : 'Unable to delete'})
        }
        return res.status(201).json({ product });

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
