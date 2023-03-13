import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
function Loading() {
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/login')
        },7000)
    })
  return (
    <div className='relative  h-screen'>
        <img src="/img/tibuImg2.jpg" alt='tibuImg' className='w-3/7  ml-16 h-96'/>
        <span className='text-[50px] font-extrabold ml-44 '>Tibu Tech S M. System</span>
        <span className='font-semibold absolute bottom-5 text-[40px] right-20 flex space-x-1 animate-pulse'>Loading</span>
        <span className='font-semibold absolute bottom-5 text-[40px] right-10 animate-pulse'><Typewriter 
            options={{
                loop:true,
                strings:"...",
                autoStart:true,
                cursor:''
            }}
        />
        </span>
        
    </div>
  )
}

export default Loading