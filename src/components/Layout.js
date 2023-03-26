import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({children}) {
  const [loggedUser,setLoggedUser]=useState(null)
  const getUser=()=>{
    const user=localStorage.getItem('user')
    const str=JSON.parse(user)
    setLoggedUser(str)
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Navbar name={loggedUser?.firstName}/>
        <div className='flex'>
            <Sidebar />
            <div className='w-full overflow-y-auto'>{children}</div>
        </div>
    </div>
  )
}

export default Layout