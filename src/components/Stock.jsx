import React ,{useState,useEffect}from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {SlCalender} from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'
import { orderTable } from '../dummyData'

function Stock() {
  const navigate=useNavigate()
  const [user,setUser]=useState(null)
  const [selectedCategory,setSelectedCategory]=useState(null)
  const [products,setProducts]=useState(null)
  const categories=['electronics','fashions','accessories','gifts','libraries','others']
  const getUser=()=>{
    const str=localStorage.getItem('user')
    setUser(JSON.parse(str))
  }
  const fetchProduct=()=>{
    try {
      fetch(`https://store-management-backend-v1.onrender.com/api/category/${selectedCategory}?${selectedCategory}:''`)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data.products)})
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(()=>{
        getUser()
        fetchProduct()
    },[selectedCategory])
    const addProduct=()=>{
      if(user.role==="manager"){
        return navigate('/sales')
      }alert("Only a manager is allowed to add a new product")
    }


  return (
    <div className="mt-3 mx-4  h-screen">
      <div className='flex space-x-1 items-center border-b-2 border-gray-200  bg-white px-2 py-2 z-10'>
        {
          categories.map((item,index)=>(
              <button onClick={()=>setSelectedCategory(categories[index])
              } key={index} className={selectedCategory === categories[index] ?'bg-[#FFC107] hover:bg-[#fdc92f] text-center px-9 py-2 rounded-t-md shadow-sm capitalize':'bg-[#fddf84] hover:bg-orange-200 text-center px-9 py-2 rounded-t-md shadow-sm capitalize'}>{item}</button>
          ))
        }
      </div>
      
      <div className='bg-white rounded-md mx-6 mb-4 h-4/5'>
        
            <div className='flex items-center justify-between mt-4 mx-2 py-2 bg-white px-3'>
              <span className='text-2xl text-blue-600 font-bold'>In Stock</span>
              <button onClick={addProduct} className='px-6 py-3 font-bold text-white bg-blue-700 rounded-md '>New Stock</button>
            </div>

        <div className='mt-4 relative flex items-center mx-4 justify-between border-b-2 pb-4'>
          <div>
            <AiOutlineSearch className='absolute w-7 h-7 top-2 left-1'/>
            <input type="text" placeholder='Search...' className='border focus:outline-none rounded-md border-gray-200 font-bold pl-8  py-2 indent-2'/>
          </div>
          <div className='flex items-center space-x-6'>
            <SlCalender className='w-8 h-8 font-bold'/>
            
            <select className='px-5 py-2.5 border font-bold border-gray-400 focus:outline-none text-center bg-transparent rounded-md' name="status">
              <option value="status">Filter</option>
            </select>
            
          </div>
        </div>

        
          <table className='mx-4 mt-10 w-full'>
            <thead className='border-b-2 border-gray-300'>
              <tr>
                <th className='py-1 px-8 md:text-sm lg:text-xl font-bold text-center '>Product Name</th>
                <th className='py-2 px-8 md:text-sm lg:text-xl font-bold text-center '>Category Name</th>
                <th className='py-2 px-8 md:text-sm lg:text-xl font-bold text-center '>supplier Name</th>
                <th className='py-2 px-8 md:text-sm lg:text-xl font-bold text-center '>Items</th>
                <th className='py-2 px-8 md:text-sm lg:text-xl font-bold text-center '>Price/Item</th>
              </tr>
            </thead>
          <>
            {
              products&&
              products?.map((item,index)=>(
                <tbody key={index} className="border-b-2 border-black">
                  <tr>
                    <td className='py-2 px-12 text-center capitalize font-medium '>{item?.productName}</td>
                    <td className='py-2 px-12 text-center capitalize font-medium '>{item?.categoryName}</td>
                    <td className='py-2 px-12 text-center capitalize font-medium '>{item?.supplierName}</td>
                    <td className='py-2 px-12 text-center capitalize font-medium '>{item?.productQuantity}</td>
                    <td className='py-2 px-12 text-center capitalize font-medium '>$ {item?.productUnityPrice}</td>
                  </tr>
                </tbody>
              ))
            }
            
            </>
            {
              
              products?.length == 0 && <span className='text-center text-gray-600 text-xl'>No Product Available</span>
            }
          </table>
        

      </div>

      
        
        
      </div>
      
    
  )
}

export default Stock