import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'

export const getToken=(params)=>{
    const token=jwt.sign(params,process.env.SECRET,{
        expiresIn:'2h'
    })
}
