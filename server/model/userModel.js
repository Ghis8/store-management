const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'is required']
    },
    lastName:{
        type:String,
        required:[true,'is required']
    },
    email:{
        type:String,
        required:[true,'is required'],
        unique:true,
        validate:{
            validator:(str)=>{
                return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)
            },
            message:props=> `${props} is not a valid email address`

        }
    },
    phone:{
        type:String,
        required:[true,'is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'is required'],
        min:8
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"employee"
    },
    gender:{
        type:String,
        default:null
    },
    age:{
        type:Number,
        default:null
    }

    
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)