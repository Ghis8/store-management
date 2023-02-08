import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl'
import { orderTable } from '../dummyData'

function Stock() {
  return (
    <div className="mt-3 mx-4 bg-[#F5F5F5] h-screen">
      <div className='flex space-x-1 items-center w-2/6 bg-white px-2 py-2 z-10'>
        <button className='bg-[#FFC107] text-center px-9 py-2 rounded-t-md shadow-sm'>Category 1</button>
        <button className='bg-[#FFDA6A] text-center px-9 py-2 rounded-t-md shadow-sm'>Category 2</button>
        <button className='bg-[#FFDA6A] text-center px-9 py-2 rounded-t-md shadow-sm'>Category 3</button>
      </div>
      <div className='bg-white mx-6 mb-2 h-4/5'>
        <div>
            <div className='flex items-center justify-between mx-2 py-2 bg-white px-5'>
          <span className='text-2xl text-blue-600 font-bold'>In Stock</span>
          <button className='px-4 py-3 font-bold text-white bg-blue-700 rounded-md '>New Stock</button>
        </div>

        <div className='mt-4 relative flex items-center mx-4 justify-between border-b-2 pb-4'>
          <div>
            <AiOutlineSearch className='absolute w-7 h-7 top-2 left-1'/>
            <input type="text" placeholder='Search...' className='border focus:outline-none rounded-md border-gray-200 font-bold pl-8  py-2 indent-2'/>
          </div>
          <div className='flex items-center space-x-6'>
            <SlCalender className='w-8 h-8 font-bold'/>
            
            <select className='px-5 py-2.5 border font-bold border-gray-400 focus:outline-none text-center bg-transparent rounded-md' name="status">
              <option value="status">Status</option>
            </select>
            
          </div>
        </div>

        <div>
          <table className='mx-4 mt-10'>
            <tr className='border-b-2 border-gray-300'>
              <th className='py-2 px-12 '><input type="checkbox" className='w-4 h-4'/></th>
              <th className='py-1 px-8 text-xl font-bold text-center '>Order ID</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Date</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Customer</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Sale Channel</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Destination</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Items</th>
              <th className='py-2 px-8 text-xl font-bold text-center '>Status</th>
            </tr>
          <>
            {
              orderTable.map((item,index)=>(
                <tr key={index} className="border-b-2 border-black">
                  <td className='py-2 px-12 text-center  '><input type="checkbox" className='w-4 h-4'/></td>
                  <td className='py-2 px-12 text-center  '>{item.orderId}</td>
                  <td className='py-2 px-12 text-center  '>{item.date}</td>
                  <td className='py-2 px-12 text-center  '>{item.customer}</td>
                  <td className='py-2 px-12 text-center  '>{item.salesChannel}</td>
                  <td className='py-2 px-12 text-center  '>{item.destination}</td>
                  <td className='py-2 px-12 text-center  '>{item.items}</td>
                  <td  className='text-center'><div className={item.status ==="Completed" ? 'bg-[#52B788] rounded-md py-1 text-white font-bold cursor-pointer': item.status ==='Pending' ? 'bg-[#BCE784] rounded-md py-1 text-white font-bold cursor-pointer' : item.status ==='Declined' ? 'bg-red-500 rounded-md py-1 text-white font-bold cursor-pointer': ''}>{item.status}</div></td>
                </tr>
              ))
            }
            </>
          </table>
        </div>

      </div>

      
        
        
      </div>
      
    </div>
  )
}

export default Stock