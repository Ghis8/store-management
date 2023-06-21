import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

function Login() {
  // const responseGoogle=(res)=>{
  //   console.log(res)
  // }
  const [values,setValues]=useState({
    email:"",
    password:""
  })
  const [error,setError]=useState('')
  const[show,setShow]=useState(false)
  const navigate=useNavigate()

  const login=()=>{
    try {
      if(values.email && values.password){
         fetch('https://store-management-backend-v1.onrender.com/api/user/login',{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            email:values.email,
            password:values.password
          })
        }).then(res=>res.json())
          .then(data=>{
            if(data.user){
              localStorage.setItem('user',JSON.stringify(data.user))
              navigate('/admin')
            }setError(data.message)
          })
          .catch(err=>console.log(err))

      }else{
        setError("Email and password required!")
      }
    }catch (error) {
      console.log(error)
      return false
    }
    
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    login()
    
  }
  return (
    <div className='flex justify-between mx-5 relative'>
      <div className='w-2/6 my-5  mx-4 '>
          <div className='bg-green-300 w-5 h-5 md:w-9 md:h-9 mb-4 md:mb-6'></div>
          <div className='w-2/4'>
            <h1 className='text-2xl mb-3 font-bold'>Login</h1>
            <span className='text-md w-full '>See Your growth and get support</span>
            
          </div>
          <form className='flex flex-col space-y-3 mb-4' >
            <div className='flex flex-col'>
              <span>Email<b className='text-red-500'>*</b></span>
              <input type="email" placeholder='Enter your Email' name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className=' indent-2 border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col relative'>
              {
                show ? <AiOutlineEyeInvisible onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-4 top-9' /> : <AiOutlineEye onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-4 top-9'/>
              }
              <span>Password<b className='text-red-500'>*</b></span>
              <input type={show ? "text":"password"} placeholder='Minimum 8 Characters' name="password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='indent-2 border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            {
                error ? <span className='my-2 text-red-600 font-bold'>* {error}</span>:''
            }
            
            <div className='flex justify-between pr-4 mt-4 items-center mb-4'>
              <div className='flex space-x-3 items-center'>
                <input type="checkbox"/>
                <span>Remember Me</span>
              </div>
              <Link to="" className='font-bold'>forgot password ?</Link>
            </div>
            <button type="submit" onClick={handleSubmit} className='bg-blue-600 py-2 rounded-full text-white'>Login</button>
          </form>
          <span className='text-md'>Not registered yet?</span> <Link to="/register" className='font-bold text-blue-500 hover:text-blue-700'>Create account</Link>
      </div>
      <div className=''>
        <img  src="/img/image1.png" alt="storeImg" className='md:w-3/4 md:h-3/4 '/>
      </div>
    </div>
  )
}

export default Login