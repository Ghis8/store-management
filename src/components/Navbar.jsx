import React from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiFillBell} from 'react-icons/ai'
import {IoMdArrowDropdown,IoMdArrowDropup} from 'react-icons/io'


function Navbar() {
  return (
    <div className='sticky flex py-3 bg-white shadow-md justify-between  w-screen px-5 z-10'>
        <AiOutlineMenu className='text-2xl cursor-pointer'/>
        <div className='flex items-center space-x-10'>
            <div className='flex items-center space-x-5'>
                <AiOutlineSearch  className='text-xl cursor-pointer'/>
                <AiFillBell className='text-xl cursor-pointer'/>
            </div>
            <div className='flex space-x-1 items-center'>
                <img src='/img/tibuImg1.jpg' alt="profile" className='w-8 h-8 border border-gray-200 rounded-full'/>
                <span className='text-xl font-semibold'>Ghislain</span>
                <IoMdArrowDropdown className='cursor-pointer'/>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar