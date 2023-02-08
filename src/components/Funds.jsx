import React from 'react'
import {GiTakeMyMoney} from 'react-icons/gi'

function Funds({title,amount}) {
  return (
    <div className='flex flex-col space-y-2 py-2 px-8 w-72 bg-white rounded-md shadow-md'>
        <span className='font-semibold text-xl'>{title}</span>
        <div className='flex items-center space-x-5'>
            <GiTakeMyMoney className='text-xl'/>
            <span className='text-xl text-gray-600'><b className='text-green-500 text-2xl'>+</b> {amount}</span>
        </div>
    </div>
  )
}

export default Funds