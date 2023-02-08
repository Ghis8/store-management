import mongoose from 'mongoose'
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
export default mongoose.model('Products',productSchema)