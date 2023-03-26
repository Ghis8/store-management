import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl'
import { orderTable } from '../dummyData'
function Orders() {
  const [user,setUser]=useState(null)
  const getUser=()=>{
      const str=localStorage.getItem('user')
      setUser(JSON.parse(str))
  
  }
  useEffect(()=>{
      getUser()
  },[])
  return (
    <div className='mt-4 px-3 mx-4'>
        <div className='flex  items-center w-full justify-between border-b-2 border-gray-200 pb-4'>
            <span className='text-2xl font-bold'>Orders</span>
            <div className='flex space-x-5 items-center'>
                <Link to="" className='text-violet-500 border border-violet-300 py-2 px-3 hover:bg-blue-100 rounded-md'>Export to Excel</Link>
                <Link to="" className='text-violet-500 border border-violet-300 py-2 px-3 hover:bg-blue-100 rounded-md'>Import Orders</Link>
                <button className='text-white border border-violet-300 py-2 px-3 bg-violet-600 rounded-md hover:bg-yellow-400 '>+ New Orders</button>
            </div>
        </div>
        <div className='mt-4 relative flex items-center mx-4 justify-between border-b-2 pb-4'>
          <div>
            <AiOutlineSearch className='absolute w-7 h-7 top-2 left-1'/>
            <input type="text" placeholder='Search...' className='border focus:outline-none rounded-md border-gray-200 font-bold pl-8  py-2 indent-2'/>
          </div>
          <div className='flex items-center space-x-6'>
            <SlCalender className='w-8 h-8 font-bold'/>
            <select className='px-5 py-2.5 border font-bold border-gray-400 focus:outline-none text-center bg-transparent rounded-md' name="sales">
              <option value="sales" >Sales</option>
            </select>
            <select className='px-5 py-2.5 border font-bold border-gray-400 focus:outline-none text-center bg-transparent rounded-md' name="status">
              <option value="status">Status</option>
            </select>
            <select className='px-5 py-2.5 border font-bold border-gray-400 focus:outline-none text-center bg-transparent rounded-md' name="filter">
              <option value="filter">Filter</option>
            </select>
          </div>
            
        </div>
        {
          (user?.role==='employee'||user?.role==='manager') &&
          <table className='mt-10 w-full'>
            <thead className='border-b-2 border-gray-300'>
              <tr>
                <th className='py-2 px-12 '><input type="checkbox" className='w-4 h-4'/></th>
                <th className='py-1 px-12 text-xl font-bold text-center '>Order ID</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Date</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Customer</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Sale Channel</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Destination</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Items</th>
                <th className='py-2 px-12 text-xl font-bold text-center '>Status</th>
              </tr>
            </thead>
          <>
            {
              orderTable.map((item,index)=>(
                <tbody key={index} className="border-b-2 border-black">
                  <tr>
                    <td className='py-2 px-12 text-center  '><input type="checkbox" className='w-4 h-4'/></td>
                    <td className='py-2 px-12 text-center  '>{item.orderId}</td>
                    <td className='py-2 px-12 text-center  '>{item.date}</td>
                    <td className='py-2 px-12 text-center  '>{item.customer}</td>
                    <td className='py-2 px-12 text-center  '>{item.salesChannel}</td>
                    <td className='py-2 px-12 text-center  '>{item.destination}</td>
                    <td className='py-2 px-12 text-center  '>{item.items}</td>
                    <td  className='text-center'><div className={item.status ==="Completed" ? 'bg-[#52B788] rounded-md py-1 text-white font-bold cursor-pointer': item.status ==='Pending' ? 'bg-[#BCE784] rounded-md py-1 text-white font-bold cursor-pointer' : item.status ==='Declined' ? 'bg-red-500 rounded-md py-1 text-white font-bold cursor-pointer': ''}>{item.status}</div></td>
                  </tr>
                </tbody>
              ))
            }
            </>
          </table>
        }
          
        

    </div>
  )
}

export default Orders