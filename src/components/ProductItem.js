import { allProducts,expiryProd } from "../dummyData"
import { useState,useEffect } from "react"
import {MdModeEditOutline,MdDelete} from 'react-icons/md'
function ProductItem() {
    const [nearExpiry,setNearExpiry]=useState(false)
    const[updateProd,setUpdateProp]=useState(false)
    const [user,setUser]=useState(null)
    const [products,setProducts]=useState(null)
    const [val,setVal]=useState({
        name:'',
        mrp:0,
        quantity:0
    })
    const getUser=()=>{
        const str=localStorage.getItem('user')
        setUser(JSON.parse(str))
    }
    const handleUpdate=(event)=>{
        event.preventDefault()
        console.log(val)
    }
    const getProdducts=()=>{
        try {
            fetch('http://localhost:4000/api/products')
                .then(data=>data.json())
                .then(res=>setProducts(res))
                .catch(err=>console.log(err))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUser()
        getProdducts()
    },[])
  return (
    <>
        {
            (user?.role==="manager"|| user?.role==='employee')&&(
                <div className='ml-24 mt-10 h-screen mr-10'>
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <div className='flex space-x-5 items-center mt-5 mb-10'>
                        <span onClick={()=>{
                            setNearExpiry(false)
                            setUpdateProp(false)
                        }}  className={!nearExpiry && !updateProd ?'text-blue-400 border-b-2 border-blue-400 font-semibold cursor-pointer':"cursor-pointer font-bold"}>All</span>
                        <span onClick={()=>{
                            setNearExpiry(true)
                            setUpdateProp(false)
                            }}  className={nearExpiry ?'text-blue-400 border-b-2 border-blue-400 font-semibold cursor-pointer':"cursor-pointer font-bold"}>Near Expiry</span>
                        <span onClick={()=>{
                            setUpdateProp(true)
                            setNearExpiry(false)
                            }} className={updateProd ?'text-blue-400 border-b-2 border-blue-400 font-semibold cursor-pointer':"cursor-pointer font-bold"}>Update Product</span>
                    </div>
                    {
                        nearExpiry ?(
                            <table className=' mt-10 w-3/4 text-center shadow-md'>
                                <thead className='bg-blue-200 py-5'>
                                    <tr>
                                        <th className='py-2 px-8'>Products</th>
                                        <th className='py-2 px-8'>Items</th>
                                        <th className='py-2 px-8'>Days Left</th>
                                    </tr>
                                </thead>
                                {
                                    expiryProd.map((item,index)=>(
                                        <tbody key={index} className="border-b-2 px-5 ">
                                            <tr>
                                                <td className='py-2'>{item.name}</td>
                                                <td className='py-2'>{item.qt}</td>
                                                <td className='py-2'>{item.dayLeft}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                        ):updateProd ?(
                            <div className="justify-center w-3/4 mx-auto flex flex-col">
                                <span className="text-2xl capitalize text-center border-b-2 font-bold">Update Product</span>
                                <div className="flex justify-between px-10 mt-10 space-x-16">
                                    <span className="font-bold text-2xl">Product</span>
                                    <form className="flex space-y-8 flex-col" onSubmit={handleUpdate}>
                                        <input type="text" placeholder="name" onChange={(text)=>setVal({...val,name:text.target.value})} className="border bg-gray-200 rounded-md w-[400px] py-2  indent-2"/>
                                        <input type="text" placeholder="MRP" onChange={(text)=>setVal({...val,mrp:Number(text.target.value)})} className="border rounded-md bg-gray-200 py-2  indent-2"/>
                                        <input type="text" placeholder="Quantity" onChange={(text)=>setVal({...val,quantity:Number(text.target.value)})} className="border rounded-md bg-gray-200 py-2  indent-2"/>                                        
                                        <div className="-mt-5">
                                            <span className="text-xl capitalize">type</span>
                                            <div className="mt-3 flex space-x-16">
                                                <div className="flex space-x-2 items-center">
                                                    <input type="radio" className="cursor-pointer" name="prod_type"/>
                                                    <span className="capitalize">loose</span>
                                                </div>
                                                <div className="flex space-x-2 items-center">
                                                    <input type="radio" className="cursor-pointer" name="prod_type"/>
                                                    <span className="capitalize">packed</span>
                                                </div>
                                                
                                            </div> 
                                        </div>
                                        <button type="submit" className="bg-[#4796BD] py-2 w-2/4 rounded-full text-white font-semibold">Update</button>
            
                                    </form>
                                </div>
                                
                            </div>
                        ):(
                            <table className=' mt-10 w-4/5 text-center shadow-md'>
                                <thead className='bg-blue-200 py-5'>
                                    <tr>
                                        <th className='px-2'></th>
                                        <th className='py-2 px-8'>Products</th>
                                        <th className='py-2 px-8'>Items</th>
                                        <th className='py-2 px-8'>Price</th>
                                    </tr>
                                </thead>
                                {
                                    products?.map((item,index)=>(
                                        <tbody key={index} className="border-b-2 px-5 ">
                                            <tr>
                                                <td className='py-2  flex items-center justify-center space-x-2'>
                                                    <MdModeEditOutline className="hover:text-blue-500"/>
                                                    <MdDelete  className="hover:text-red-500"/>
                                                </td>
                                                <td className='py-2 '>{item?.productName}</td>
                                                <td className='py-2'>{item?.productQuantity}</td>
                                                <td className='py-2 font-semibold'>$ {item?.productUnityPrice}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                        )
                    }
                
                </div>
            )
        }
    </>
   
  )
}

export default ProductItem