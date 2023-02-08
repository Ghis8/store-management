import React from 'react'

function SideBarItem({Icon,title}) {
  return (
    <div className='flex items-center space-x-5 cursor-pointer hover:translate-x-2 hover:-translate-y-1 delay-75 py-2 '>
        <Icon className='text-gray-400 text-xl'/>
        <span className='text-gray-500 text-md font-bold mt-1'>{title}</span>
    </div>
  )
}

export default SideBarItem