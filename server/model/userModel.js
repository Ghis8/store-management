const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

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
    },
    
    orders:[{type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
    
},{timestamps:true,minimize:false})

userSchema.statics.findBycredentials=async(email,password)=>{
    const user=await User.findOne({email})
    if(!user) throw new Error('User with this email does not exist!')
    const isSamePassword=bcrypt.compareSync(password,user.password)
    if(isSamePassword) return user
    throw new Error('invalid credentials')
}

//removing password when sending data to frontEnd

userSchema.methods.toJSON=function(){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    return userObject
}

//hash the passworrd before saving

userSchema.pre('save',function(next){
    const user=this
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err)
            user.password=hash
            next()
        })
    })
})

userSchema.pre('remove',function(next){
    this.model('Order').remove({owner:this._id},next)
})

module.exports = mongoose.model('User',userSchema)