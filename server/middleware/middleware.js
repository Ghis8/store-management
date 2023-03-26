const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config()



const isLoggedIn=async(req,res,next)=>{
    try {
        if(req.headers.authorization){
            const token=req.headers.authorization.split(' ')[1]
            if(token){
                const payload=await jwt.verify(token,process.env.SECRET)
                if(payload){
                    req.user=payload
                    next()
                }else{
                    res.status(400).json({error:"Token Verification failed!"})
                }
            }else{
                res.status(400).json({error:"Malformed authentication header"})
            }
        }else{
            res.status(400).json({error:"No authorization header found"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.export={isLoggedIn}