import React,{useEffect, useState} from 'react'
import Funds from './Funds'
import BarChart from './BarChart'


const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]
var i=0
function Dashboard() {
    const [user,setUser]=useState(null)
    const [data,setData]=useState([])
    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }

    const getUser=()=>{
        const str=localStorage.getItem('user')
        setUser(JSON.parse(str))
    
    }
    useEffect(()=>{
        getUser()
        setInterval(()=>{
        changeData()
        },2000)
    },[])
    
  return (
    <>
    {
        (user?.role==="manager"|| user?.role==='employee') &&(
            <div className='h-screen flex flex-col space-y-5'>
                <div className='flex items-center justify-around px-12 pt-6 mb-10'>
                    <Funds title="Revenue" amount="30,000"/>
                    <Funds title="Sales Return" amount="30,000"/>
                    <Funds title="Purchase" amount="30,000"/>
                    <Funds title="Income" amount="30,000"/>
                </div>
                <div className='flex justify-between px-20'>
                    <BarChart width={600} height={400} data={data} />
                    <div className='w-2/5 bg-white rounded-md shadow-md px-10 py-5'>
                        <span className='ml-5 font-semibold'>Top selling Products</span>
                        <div className='bg-blue-600 w-64 h-56 mt-10 rounded-full text-center mx-auto'></div>
                    </div>
                </div>
                <div className='flex justify-between px-20'>
                <div className='bg-white shadow-black shadow-md rounded-md w-2/4 py-3 px-3 flex flex-col space-y-5'>
                        <span className='font-bold capitalize'>stock alert</span>
                                <table className='pl-12'>
                                    <thead className='border border-gray-200'>
                                        <tr>
                                            <th className='border border-gray-200 py-1 px-2'>Order ID</th>
                                            <th className='border border-gray-200 py-1 px-2'>Date</th>
                                            <th className='border border-gray-200 py-1 px-2'>Quantity</th>
                                            <th className='border border-gray-200 py-1 px-2'>Alert Amount</th>
                                            <th className='border border-gray-200 py-1 px-2'>Status</th>
                                        </tr>
                                    
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border border-gray-200 py-1 px-2'>Order Id</td>
                                            <td className='border border-gray-200 py-1 px-2'>Date</td>
                                            <td className='border border-gray-200 py-1 px-2'>Quantity</td>
                                            <td className='border border-gray-200 py-1 px-2'>alert amnt</td>
                                            <td className='border border-gray-200 py-1 px-2'>status</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                </div>
                    <div className='bg-white rounded-md shadow-black shadow-md px-3 py-3 w-2/5'>
                            <span className='font-bold'>Top Selling Product</span>
                            <table>
                                <thead className='font-bold flex mt-5'>
                                    <tr>
                                        <th className='border border-gray-200 py-1 px-2'>Order Id</th>
                                        <th className='border border-gray-200 py-1 px-2'>Quantity</th>
                                        <th className='border border-gray-200 py-1 px-2'>Alert Amnt</th>
                                    </tr>
                                </thead>
                                <tbody className='flex'>
                                    <tr>
                                        <td className='border border-gray-200 py-1 px-2'>Order ID</td>
                                        <td className='border border-gray-200 py-1 px-2'>Qunatity</td>
                                        <td className='border border-gray-200 py-1 px-2'>Alert amnt</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Dashboard