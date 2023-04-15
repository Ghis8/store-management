const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    supplierName:{
        type:String,
        required:[true,'is required']
    },
    supplierPhone:{
        type:String,
        required:[true,'is required'],
    },
    supplierAddress:{
        type:String,
        required:[true,'is required']
    },
    categoryName:{
        type:String,
        required:[true,'is required'],
    },
    productName:{
        type:String,
        required:[true,'is required'],
        unique:true
    },
    productQuantity:{
        type:Number,
        required:[true,'is required']
    },
    productUnityPrice:{
        type:Number,
        required:[true,'is required']
    },
    productDescription:{
        type:String,
        required:[true,'is required']
    }

},{timestamps:true,minimize:false})

module.exports=mongoose.model('Product',productSchema)