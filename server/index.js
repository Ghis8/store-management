const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const userRouter=require('./controller/userController')
const app=express()
const { isLoggedIn } = require('./middleware/middleware')

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use(cors())
const PORT=process.env.PORT || 8080
mongoose.connect(process.env.MONGO_URI)
const database=mongoose.connection

database.on('error',(error)=>{
    console.log(error)
})
database.on('connected',()=>{
    console.log("Database connected")
})

app.get("/",(req,res)=>{
    res.json({message:"Welcome to store management system build by tibu tech!"})
})

app.use('/api',userRouter)

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})
