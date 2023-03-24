const express=require('express')
const User=require('../model/userModel')
const userRouter=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

//getting all available users
userRouter.get('/users',async(req,res)=>{
    try {
        const users=await User.find({isAdmin:false})
        res.json(users)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// user registration
userRouter.post('/user/register',async(req,res)=>{
    const {firstName,lastName,email,phone,password,role}=req.body
    try {
        const user=await User.create({firstName,lastName,email,phone,password,role})
        res.status(201).json(user)
    } catch (error) {
        if(error.code ===11000) return res.status(400).json({message:"This Email address already exist!"})
        res.status(400).send(error.message)
    }
})

//user login
userRouter.post('/user/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email:email})
        if(!user) return res.status(400).json({message:'user with this email does not exist!'})
        const checkPassword=bcrypt.compareSync(password,user.password)
        if(checkPassword){
            const token=await jwt.sign()
        }
        res.status(400).json({errMessage:'invalid credentials'})
    } catch (error) {
        res.status(400).json({errorMessage:error})
    }
})

// delete a user
userRouter.delete('/user/delete-user/:id',async(req,res)=>{
    const userId=req.params.id
    try {
        const users=await User.findByIdAndDelete({_id:userId})
        res.status(200).json({message:`user ${users.firstName} deleted successfully`})
    } catch (error) {
        res.status(400).send(error)
    }
})

//add a new employee
userRouter.post('/user/add-employee',async(req,res)=>{
    const {firstName,lastName,email,phone,password,role,gender,age}= req.body
    try {
        const user=await User.create({firstName,lastName,email,phone,password,role,gender,age})
        res.status(201).json({message:"Employee Created successfully",employee:user})
    } catch (error) {
        if(error.code === 11000) return res.status(400).json({message:"This Email address has been used!"})
        res.status(400).send(error)
    }
})

//update user profile
userRouter.put('/user/update/:id',async(req,res)=>{
    const userId=req.params.id
    const {firstName,lastName,email,phone,password,role,gender,age}= req.body
    try {
        const user=await User.findByIdAndUpdate({_id:userId},req.body)
        res.status(200).json({message:`${user.firstName} updated successfully`})
    } catch (error) {
        res.status(400).json({errorMessage:error})
    }
})

module.exports=userRouter
