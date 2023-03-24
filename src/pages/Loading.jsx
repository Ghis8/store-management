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
    <div className='relative flex-1 w-screen overflow-hidden  h-screen'>
        <img src="/img/tibuImg2.jpg" alt='tibuImg' className='w-3/7  mt-24 md:ml-16 h-72 md:h-96'/>
        <span className='md:text-[50px] text-[20px] md:font-extrabold font-semibold ml-[20%] md:ml-44 '>Tibu Tech S M. System</span>
        <span className='font-semibold absolute bottom-2 md:bottom-5 md:text-[30px] md:right-20 right-10 flex space-x-1 animate-pulse'>Loading</span>
        <span className='font-semibold absolute bottom-2 md:bottom-5 md:text-[30px] md:right-10 right-5 animate-pulse'><Typewriter 
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