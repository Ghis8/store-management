import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout({children}) {
  return (
    <div className='w-screen h-screen overflow-y-hidden'>
        <Navbar/>
        <div className='flex'>
            <Sidebar />
            <div className='w-full overflow-y-scroll h-4/5 cursor-pointer'>{children}</div>
        </div>
    </div>
  )
}

export default Layout