import React from 'react'
import BarChart from './BarChart'
import Funds from './Funds'

function Dashboard() {
  return (
    <div className='bg-gray-100 flex flex-col space-y-5 -z-10 '>
        <div className='flex items-center space-x-7 px-12 pt-6 mb-10'>
            <Funds title="Revenue" amount="30,000"/>
            <Funds title="Sales Return" amount="30,000"/>
            <Funds title="Purchase" amount="30,000"/>
            <Funds title="Income" amount="30,000"/>
        </div>
        <div className='flex justify-between px-12'>
            {/* <BarChart /> */}
            <div className='w-2/5 bg-white rounded-md shadow-md px-10 py-5'>
                <span className='ml-5 font-semibold'>Top selling Products</span>
                <div className='bg-blue-600 w-64 h-56 mt-10 rounded-full text-center mx-auto'></div>
            </div>
        </div>
        {/* <div className='flex justify-between px-12'>
           <div className='bg-white shadow-md rounded-md w-2/4 flex flex-col space-y-5'>
                <span className='pl-12 border-b-2 font-bold'>stock alert</span>
                    
                        <table className='pl-12'>
                            <thead className='border border-gray-200'>
                            
                                <th className='border border-gray-200 py-1 px-2'>Order ID</th>
                                <th className='border border-gray-200 py-1 px-2'>Date</th>
                                <th className='border border-gray-200 py-1 px-2'>Quantity</th>
                                <th className='border border-gray-200 py-1 px-2'>Alert Amount</th>
                                <th className='border border-gray-200 py-1 px-2'>Status</th>
                            
                            </thead>
                            <tbody>
                            
                                <td className='border border-gray-200 py-1 px-2'>Order Id</td>
                                <td className='border border-gray-200 py-1 px-2'>Date</td>
                                <td className='border border-gray-200 py-1 px-2'>Quantity</td>
                                <td className='border border-gray-200 py-1 px-2'>alert amnt</td>
                                <td className='border border-gray-200 py-1 px-2'>status</td>
                           
                            </tbody>
                        </table>
                    
           </div>
            <div className='bg-white rounded-md shadow-md px-3 py-3 w-2/5'>
                    <span className='font-bold'>Top Selling Product</span>
                    <table>
                        <thead className='font-bold flex mt-5'>
                            <th className='border border-gray-200 py-1 px-2'>Order Id</th>
                            <th className='border border-gray-200 py-1 px-2'>Quantity</th>
                            <th className='border border-gray-200 py-1 px-2'>Alert Amnt</th>
                        </thead>
                        <tbody className='flex'>
                            <td className='border border-gray-200 py-1 px-2'>Order ID</td>
                            <td className='border border-gray-200 py-1 px-2'>Qunatity</td>
                            <td className='border border-gray-200 py-1 px-2'>Alert amnt</td>
                        </tbody>
                    </table>
            </div>
        </div> */}
    </div>
  )
}

export default Dashboard