import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

function Register() {
  const[show,setShow]=useState(false)
  return (
    <div className='flex justify-between '>
      <div className=''>
        <img src="/img/image1.png"  alt="bgImage"/>
      </div>
      <div className='flex  flex-col space-y-4 my-5 mx-4'>
        <div className='bg-green-300 w-9 h-9 mb-6'></div>
        <div className='w-2/4 flex flex-col  space-y-1'>
            <h1 className='text-2xl mb-3 font-bold'>Register</h1>
            <span className='text-md font-semibold w-full'>Manage all your inventory efficiently</span>
            <span className='text-sm'>let's you all set up so you can verify your personal account and begin setting up your work profile</span>
        </div>
        <form className='flex flex-col space-y-3'>
          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>First name</span>
              <input type="text" placeholder='Enter your first name' name="fname" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col'>
              <span>Last name</span>
              <input type="text" placeholder='Enter your Last name' name="lname" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>

          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>Email</span>
              <input type="Email" placeholder='Enter your Email address' name="email" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col'>
              <span>Phone no</span>
              <input type="tel" placeholder='Enter your Phone' name="phone" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>

          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>Password</span>
              <input type="password" placeholder='Enter your Password' name="pwd" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col relative'>
              {
                show ? <AiOutlineEyeInvisible onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-2 top-9' /> : <AiOutlineEye onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-4 top-9'/>
              }
              <span>Confirm Password</span>
              <input type={show ? "text":"password"} placeholder='Conrfirm password' name="cpwd" className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>

          <div className='flex space-x-3 items-center'>
              <input type="checkbox"/>
              <span>I agree to all terms,Privacy policies and fees</span>
          </div>
          <button className='w-36 text-white bg-blue-600 rounded-md py-2'>Sign up</button>

        </form>
        <div className='flex items-center space-x-2'>
          <span className='text-md'>Already have an account?</span>
          <Link to="/login" className='font-bold hover:text-blue-700'>Login</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Register