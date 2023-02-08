import React, { useState } from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

function GoogleAuth() {
    const [user,setUser]=useState(null)
    const onSuccess=async (res)=>{
        try{
            const result=await axios.post('http://localhost:4000/auth',{
                token:res?.tokenId
            })

            setUser(result.data.user)

        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='w-80 mb-5 rounded-full mt-5 cursor-pointer'>
        {!user && (
            <GoogleLogin
            clientId={`${process.env.REACT_APP_ID_CLIENT}`}
            onSuccess={onSuccess}
            />
        )}

        {user && (
            <>
            <img src={user.avatar} className="rounded-full" alt="avatar"/>
            <h1 className="text-xl font-semibold text-center my-5">
                {user.name}
            </h1>
            </>
        )}
    </div>
  )
}

export default GoogleAuth