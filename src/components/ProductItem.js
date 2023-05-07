import { allProducts,expiryProd } from "../dummyData"
import { useState,useEffect } from "react"
import {MdModeEditOutline,MdDelete} from 'react-icons/md'
function ProductItem() {
    const [nearExpiry,setNearExpiry]=useState(false)
    const[updateProd,setUpdateProp]=useState(false)
    const [user,setUser]=useState(null)
    const [selectProd,setSelectProd]=useState(null)
    const [editProduct,setEditProdct]=useState(null)
    const [updateError,setUpdateError]=useState('')
    const [products,setProducts]=useState(null)
    const [val,setVal]=useState({
        qte:0,
        price:editProduct?.productUnityPrice || 0
    })
    const getUser=()=>{
        const str=localStorage.getItem('user')
        setUser(JSON.parse(str))
    }
    const handleUpdate=(id)=>{
        if(val.qte === 0 && val.price === 0) return setUpdateError('You must Enter new values to the product')
        else{
            if(val.qte ===editProduct?.productQuantity)return setUpdateError('New product quantity must be different from the previous one')
            fetch(`http://localhost:4000/api/update-product/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                    productQuantity:val.qte,
                    productUnityPrice:val.price
                })
            })
            .then(res=>res.json())
            .then(data=>{
                getProdducts()
                alert(data.message)
                setUpdateError('')
                setEditProdct(false)

            })
            .catch(err=>console.log(err))

        }
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

    const deleteProduct=(id)=>{
        const confirm=window.confirm(`Do you really want to delete This Product?`)
        setSelectProd()
        if(confirm===true){
            fetch(`http://localhost:4000/api/deleteProduct/${id}`,{
                method:'DELETE'
            })
                .then(res=>res.json())
                .then(data=>{
                    getProdducts()
                    alert(data.message)
                })
                .catch(err=>console.log(err))
        }
        return false
    }
        
    const updateProduct=(id)=>{
        try {
            fetch('')
        } catch (error) {
            
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
                        {/* <span onClick={()=>{
                            setUpdateProp(true)
                            setNearExpiry(false)
                            }} className={updateProd ?'text-blue-400 border-b-2 border-blue-400 font-semibold cursor-pointer':"cursor-pointer font-bold"}>Update Product</span> */}
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
                                    expiryProd?.map((item,index)=>(
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
                         )
                        //:updateProd ?(
                        //     <div className="justify-center w-3/4 mx-auto flex flex-col">
                        //         <span className="text-2xl capitalize text-center border-b-2 font-bold">Update Product</span>
                        //         <div className="flex justify-between px-10 mt-10 space-x-16">
                        //             <span className="font-bold text-2xl">Product</span>
                        //             <form className="flex space-y-8 flex-col" onSubmit={handleUpdate}>
                        //                 <input type="text" placeholder="name" onChange={(text)=>setVal({...val,name:text.target.value})} className="border bg-gray-200 rounded-md w-[400px] py-2  indent-2"/>
                        //                 <input type="text" placeholder="MRP" onChange={(text)=>setVal({...val,mrp:Number(text.target.value)})} className="border rounded-md bg-gray-200 py-2  indent-2"/>
                        //                 <input type="text" placeholder="Quantity" onChange={(text)=>setVal({...val,quantity:Number(text.target.value)})} className="border rounded-md bg-gray-200 py-2  indent-2"/>                                        
                        //                 <div className="-mt-5">
                        //                     <span className="text-xl capitalize">type</span>
                        //                     <div className="mt-3 flex space-x-16">
                        //                         <div className="flex space-x-2 items-center">
                        //                             <input type="radio" className="cursor-pointer" name="prod_type"/>
                        //                             <span className="capitalize">loose</span>
                        //                         </div>
                        //                         <div className="flex space-x-2 items-center">
                        //                             <input type="radio" className="cursor-pointer" name="prod_type"/>
                        //                             <span className="capitalize">packed</span>
                        //                         </div>
                                                
                        //                     </div> 
                        //                 </div>
                        //                 <button type="submit" className="bg-[#4796BD] py-2 w-2/4 rounded-full text-white font-semibold">Update</button>
            
                        //             </form>
                        //         </div>
                                
                        //     </div>
                        // )
                        :( <div className="relative">
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
                                                    <MdModeEditOutline onClick={()=>{
                                                        setEditProdct(item)
                                                    }} className="hover:text-blue-500 cursor-pointer"/>
                                                    <MdDelete onClick={()=>{
                                                        setSelectProd(item)
                                                        deleteProduct(item?._id)
                                                    }} className="hover:text-red-500 cursor-pointer"/>
                                                </td>
                                                <td className='py-2 '>{item?.productName}</td>
                                                <td className='py-2'>{item?.productQuantity}</td>
                                                <td className='py-2 font-semibold'>$ {item?.productUnityPrice}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                            </table>
                            {
                                editProduct && 
                                <div className="absolute px-5 py-3 z-10 w-2/4 border top-5 bg-white ml-[15%]  rounded-md shadow-sm">
                                    <span className="text-xl flex mt-2 justify-center  font-semibold">Update Product / <span className="capitalize text-blue-500 ml-2 cursor-pointer">{editProduct?.productName}</span></span>
                                    <div className="flex flex-col gap-1 mb-3 mt-4">
                                        <label className="text-gray-600">Prod. Qte:</label>
                                        <input type="text" onChange={(e)=>setVal({...val,qte:Number(e.target.value)})} placeholder={editProduct?.productQuantity} className="border indent-1 py-1 w-2/4 rounded-md"/>
                                    </div>
                                    <div className="flex flex-col gap-1 mb-3">
                                        <label className="text-gray-600">Prod. Unity Price:</label>
                                        <input type="text"  onChange={(e)=>setVal({...val,price:Number(e.target.value)})} placeholder={`${editProduct?.productUnityPrice} $`} className="border indent-1 py-1 w-2/4 rounded-md"/>
                                    </div>
                                    {
                                        updateError && <span className="text-red-600 ">*{updateError}</span>
                                    }
                                    <div className="flex items-center space-x-4 mt-2">
                                        <button onClick={()=>{
                                            handleUpdate(editProduct?._id)
                                        }} className="px-4 py-2 bg-blue-600 hover:bg-blue-400 text-white rounded-md">Update</button>
                                        <button onClick={()=>{
                                            setEditProdct(null)
                                            setUpdateError('')
                                            }} className="px-4 py-2 bg-red-500 hover:bg-red-300 text-white rounded-md">Cancel</button>
                                    </div>
                                    
                                    
                                </div>
                            }
                            </div>
                        )
                    }
                
                </div>
            )
        }
    </>
   
  )
}

export default ProductItem