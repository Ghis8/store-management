import React,{useState} from 'react'
import { historyTable } from '../dummyData'
import {AiOutlineDownload} from 'react-icons/ai'

function Sales() {
    const [sell,setSell]=useState(false)
    const [history,setHistory]=useState(false)
    
  return (
    <div className='ml-10 mx-5 mt-4'>
        <span className='text-3xl font-bold'>Transactions</span>
        <div className='flex items-center mt-5 space-x-8'>
            <span onClick={()=>{
                setHistory(false)
                setSell(false)
            }} className={!sell && !history?'text-blue-400 border-b-2 border-blue-400 capitalize font-semibold cursor-pointer':'capitalize font-semibold cursor-pointer'}>new item</span>
            <span onClick={()=>{
                setSell(true)
                setHistory(false)
            }} className={sell?'text-blue-400 border-b-2 border-blue-400 capitalize font-semibold cursor-pointer':'capitalize font-semibold cursor-pointer'}>sell</span>
            <span onClick={()=>{
                setHistory(true)
                setSell(false)
                }} className={history?'text-blue-400 border-b-2 border-blue-400 capitalize font-semibold cursor-pointer':'capitalize font-semibold cursor-pointer'}>history</span>
        </div>
        <div className='w-3/4 mx-auto'>
            {
                sell ?(
                    <div>
                        <div className='text-center flex flex-col justify-center'>
                            <span className='py-2 border-b-2 border-gray-200 font-bold text-2xl'>Sell Item</span>
                            <form className='mt-5 flex flex-col'>
                                <div className='flex justify-around border-b-2 pb-4 pt-2'>
                                    <span className='capitalize'>Customer</span>
                                    <div className='flex flex-col space-y-4'>
                                        <input type="text" placeholder='name' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        <input type="text" placeholder='phone number' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        <input type="text" placeholder='address' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                    </div>
                                </div>
                                <div className='flex justify-around border-b-2 pb-4 pt-2 mb-10'>
                                    <span className='capitalize'>Product</span>
                                    <div className='flex flex-col space-y-4'>
                                        <input type="text" placeholder='product name' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        <input type="text" placeholder='price' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        <input type="text" placeholder='No Items' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        <input type="text" placeholder='Expiry Date' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                        
                                    </div>
                                </div>
                                <span className='border border-blue-500 w-1/6 mx-auto py-2 px-4 text-blue-500'>+ add product</span>
                                <button type='submit' className='capitalize my-5 py-2 bg-[#4796BD] rounded-md w-1/6 ml-44 text-white font-bold'>sell</button>
                            </form>
                        </div>
                    </div>
                ):history ?(
                    <table className='text-center mt-10 border'>
                        <thead className='bg-[#E7EFF3] '>
                            <tr>
                                <th className='px-5 py-2'>ID</th>
                                <th className='px-16'>Date</th>
                                <th className='px-14'>Product</th>
                                <th className='px-14'>Items</th>
                                <th className='px-14'>Price</th>
                                <th className='px-14'>Type</th>
                            </tr>

                        </thead>
                        {
                            
                            historyTable.map((item,index)=>(
                                <tbody className='py-2 border-b-2'>
                                    <tr>
                                        <td className='py-2'>
                                            <div className='flex justify-center items-center space-x-2'>
                                                <span>{item.id}</span>
                                                <AiOutlineDownload className='bg-blue-300 '/>
                                            </div>
                                        </td>
                                        <td>{item.date}</td>
                                        <td>{item.name}</td>
                                        <td>{item.item}</td>
                                        <td>${item.price}</td>
                                        <td>{item.type}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>

                ):
                <div className='text-center flex flex-col justify-center'>
                    <span className='py-2 border-b-2 border-gray-200 font-bold text-2xl'>New Item</span>
                    <form className='mt-5 flex flex-col'>
                        <div className='flex justify-around border-b-2 pb-4 pt-2'>
                            <span className='capitalize'>supplier</span>
                            <div className='flex flex-col space-y-4'>
                                <input type="text" placeholder='name' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='phone number' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='address' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                            </div>
                        </div>
                        <div className='flex justify-around border-b-2 pb-4 -ml-2 pt-2'>
                            <span className='capitalize '>category</span>
                            <div className='flex flex-col space-y-4 min-w-3/4'>
                                <input type="text" placeholder='category name' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='category Id' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                
                            </div>
                        </div>
                        <div className='flex justify-around border-b-2 pb-4 pt-2 mb-10'>
                            <span className='capitalize'>Product</span>
                            <div className='flex flex-col space-y-4'>
                                <input type="text" placeholder='product name' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='quantity' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='unity price' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='whole price' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <input type="text" placeholder='unity price' className='bg-gray-200 indent-2 w-[300px] py-1 rounded-md' />
                                <textarea placeholder='description' className='bg-gray-200 indent-2 rounded-md pt-2' rows={6}/>
                            </div>
                        </div>
                        <span className='border border-blue-500 w-1/6 mx-auto py-2 px-4 text-blue-500'>+ add product</span>
                        <button type='submit' className='capitalize my-5 py-2 bg-[#4796BD] rounded-md w-1/6 ml-44 text-white font-bold'>save</button>
                    </form>
                </div>
            }
        </div>
    </div>
  )
}

export default Sales