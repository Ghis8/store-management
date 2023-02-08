import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/authRoute.js'

dotenv.config()
const app=express()
const PORT=process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use('/auth',authRouter)
app.get('/welcome',(req,res)=>{
    res.send("Welcome to the server!")
})
mongoose.set('strictQuery', false)
mongoose.connect(`${process.env.MONGO_URI}`,()=>console.log("database connected"))



app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))