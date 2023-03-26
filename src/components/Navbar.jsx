import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiFillBell} from 'react-icons/ai'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'


function Navbar({title}) {
  const[menu,setMenu]=useState(false)
  const navigate=useNavigate()
  return (
    <div className='sticky flex py-3 bg-white shadow-md justify-between  w-screen px-5 z-10'>
        <div className='flex items-center space-x-2'>
          <AiOutlineMenu className='text-2xl cursor-pointer'/>
          <span className='md:hidden'>{title}</span>
        </div>
        <div className='flex items-center space-x-10'>
            <div className='flex items-center space-x-5'>
                <AiOutlineSearch  className='text-xl cursor-pointer'/>
                <AiFillBell className='text-xl cursor-pointer'/>
            </div>
            <div className='flex space-x-1 items-center'>
                <img src='/img/tibuImg1.jpg' alt="profile" className='w-8 h-8 border border-gray-200 rounded-full'/>
                <span className='text-xl font-semibold'>Ghislain</span>
                {
                  menu ? <IoMdArrowDropup onClick={()=>setMenu(!menu)} className='cursor-pointer text-2xl'/>:<IoMdArrowDropdown onClick={()=>setMenu(!menu)} className='cursor-pointer text-2xl'/>
                }
                
            </div>
            {
              menu &&
              <div className='absolute top-12 right-6 shadow-md rounded-md bg-gray-300 w-32 px-3 py-3 z-20'>
                <ul className='flex flex-col space-y-2 text-center'>
                  <li className='hover:bg-white rounded-md cursor-pointer py-1'>Profile</li>
                  <li className='hover:bg-white rounded-md cursor-pointer py-1'>users</li>
                  <li className='hover:bg-white rounded-md cursor-pointer py-1'>settings</li>
                </ul>
                <button onClick={()=>navigate('/')} className='mt-5 w-3/4 ml-4 py-1 rounded-md bg-red-500'>Logout</button>
              </div>
            }
            
        </div>
        
    </div>
  )
}

export default Navbar