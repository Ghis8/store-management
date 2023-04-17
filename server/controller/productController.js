const express=require('express')
const productRouter=express.Router()
const Product=require('../model/productModel')

//get all products

productRouter.get('/products',async(req,res)=>{
    try {
        const products=await Product.find()
        res.json(products)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//add product 

productRouter.post('/addProduct',async(req,res)=>{
    const {supplierName,supplierPhone,supplierAddress,categoryName,productName,productQuantity,productUnityPrice,productDescription} = req.body
    try {
        const product =await Product.create({supplierName,supplierPhone,supplierAddress,categoryName,productName,productQuantity,productUnityPrice,productDescription})
        res.status(201).json({message:'new Product Created',product:product})
    } catch (error) {
        if(error.code === 11000){
            res.status(400).json({message:'Product Already Exist, Update the existing product!'})
        }
        res.status(400).json({message:error.message})
    }   
})

// get a  product
productRouter.get('/product/',async(req,res)=>{
    const {name}=req.body
    try {
        const product=await Product.findOne({productName:name})
        res.status(200).json({message:'product found',product:product})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

//update a product

productRouter.patch('/update-product/:id',async(req,res)=>{
    const id=req.params.id
    const {productQuantity,productUnityPrice}=req.body

    try {
        const product=await Product.findByIdAndUpdate({_id:id},{productQuantity,productUnityPrice})
        res.status(200).json({message:'product updated successfully',product})
    } catch (error) {
        res.status(400).json(error)
    }
})

// delete a product

productRouter.delete('/deleteProduct/:id',async(req,res)=>{
    const productId=req.params.id
    try {
        const deletedProduct=await Product.findByIdAndDelete({_id:productId})
        res.status(200).json({message:`${deletedProduct.productName} deleted successfully`})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// update product 
productRouter.patch('/updateProduct',async(req,res)=>{
    const {productQuantity,productName}=req.body
})

module.exports=productRouter