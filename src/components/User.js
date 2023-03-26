import React, { useState,useEffect } from 'react'

function User() {
  const [addUser,setAddUser]=useState(false)
  const [user,setUser]=useState(null)
  const getUser=()=>{
      const str=localStorage.getItem('user')
      setUser(JSON.parse(str))
  
  }
  useEffect(()=>{
      getUser()
  },[])
  return (
    <div className='mt-5 mx-10'>
        <span className='font-bold text-3xl'>User</span>
        <div className='flex items-center space-x-8 mt-5'>
          <span onClick={()=>{
            setAddUser(false)
          }} className={!addUser?"text-blue-300 border-b-2 border-blue-300 font-semibold cursor-pointer":'font-semibold cursor-pointer'}>All</span>
          <span onClick={()=>setAddUser(true)} className={addUser?"text-blue-300 border-b-2 border-blue-300 font-semibold cursor-pointer":'font-semibold cursor-pointer'}>New User</span>
        </div>
        {
          addUser && user?.role==='manager' ?(
            <div className='flex flex-col w-3/4 mx-auto'>
                <span className='text-2xl font-bold text-center mt-5 pb-4 border-b-2'>Add Employee</span>
                <div className='flex mt-8 justify-between mx-16'>
                    <span className='font-semibold text-2xl'>Account</span>
                    <form className='flex flex-col space-y-5'>
                        <input type="text" placeholder='First name' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Last name' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Email' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="password" placeholder='Password' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="password" placeholder='Confirm Password' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Gender' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Age' className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <div className=''>
                          <span className="text-xl capitalize">type</span>
                          <div className="mt-3 flex space-x-16">
                              <div className="flex space-x-2 items-center">
                                  <input type="radio" className="cursor-pointer" name="user_type"/>
                                  <span className="capitalize">Manager</span>
                              </div>
                              <div className="flex space-x-2 items-center">
                                  <input type="radio" className="cursor-pointer" name="user_type"/>
                                  <span className="capitalize">Employee</span>
                              </div>
                              
                          </div> 
                        </div>
                        <button type="submit" className="bg-[#4796BD] py-2 w-2/4 rounded-full text-white font-semibold">Register</button>
                    </form>
                </div>
            </div>
          ):""
        }
        
    </div>
  )
}

export default User