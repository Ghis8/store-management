import React ,{useState}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

function Register() {
  const [error,setError]=useState([])
  const[show,setShow]=useState(false)
  const [createUser,setCreateUser]=useState(false)
  const [values,setValues]=useState({
    first_name:'',
    last_name:"",
    email:"",
    phone:"",
    password:'',
    cpassword:""
  })
  const signIn=async()=>{
    try {
      await fetch('https://store-management-backend-v1.onrender.com/api/user/register',{
        method:'POST',
        headers:{
          "Content-Type":'application/json'
        },
        body:JSON.stringify({
          firstName:values.first_name,
          lastName:values.last_name,
          email:values.email,
          phone:values.phone,
          password:values.password
        })
      }).then(res=>res.json())
        .then((data)=>{
          setCreateUser(false)
         alert(`User ${values.first_name+" "+values.last_name} created successfully!`)
         navigate('/login')
      })
    } catch (error) {
      console.log(error)
      setCreateUser(false)
      return false
    }
  }
  const navigate=useNavigate()
  const handleSubmit=async(event)=>{
    event.preventDefault()
    setCreateUser(true)
    if(!values.first_name || !values.last_name){
      setError([...error,error.push('Enter First Name')])
      if(!values.email)setError([...error,error.push('Email address is required')])
      if(!values.phone) setError([...error,error.push('Phone number is required!')])
      if(values.password.length < 8){
        setError([...error,error.push('password must contain at least 8 characters')])
        if(values.password !== values.cpassword) setError([...error,error.push('Password and confirm password does not match')])
      }
    }else{
      setError([])
      signIn()
    }
  }
  return (
    <div className='flex justify-between '>
      <div className='mt-16'>
        <img src="/img/image1.png"  alt="bgImage" className='w-3/4 h-5/7 '/>
      </div>
      <div className='flex  flex-col space-y-4 my-5 mx-4'>
        <div className='bg-green-300 w-9 h-9 mb-6'></div>
        <div className='w-2/4 flex flex-col  space-y-1'>
            <h1 className='text-2xl mb-3 font-bold'>Register</h1>
            <span className='text-md font-semibold w-full'>Manage all your inventory efficiently</span>
            <span className='text-sm'>let's you all set up so you can verify your personal account and begin setting up your work profile</span>
        </div>
        <form className='flex flex-col space-y-3' onSubmit={handleSubmit}>
          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>First name</span>
              <input type="text" placeholder='Enter your first name' name="first_name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col'>
              <span>Last name</span>
              <input type="text" placeholder='Enter your Last name' name="last_name" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>

          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>Email</span>
              <input type="Email" placeholder='Enter your Email address' name="email" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col'>
              <span>Phone no</span>
              <input type="tel" placeholder='Enter your Phone' name="phone" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>

          <div className='flex space-x-10 mx-2'>
            <div className='flex flex-col'>
              <span>Password</span>
              <input type="password" placeholder='Enter your Password' name="password" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
            <div className='flex flex-col relative'>
              {
                show ? <AiOutlineEyeInvisible onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-2 top-9' /> : <AiOutlineEye onClick={()=>setShow(!show)} className='text-xl cursor-pointer text-gray-500 absolute right-4 top-9'/>
              }
              <span>Confirm Password</span>
              <input type={show ? "text":"password"} placeholder='Conrfirm password' name="cpassword" onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} className='border rounded-md border-gray-400 py-2 px-1 bg-gray-50'/>
            </div>
          </div>
              {
                error.length > 0 &&(
                  error.map((item,index)=>(
                    <div key={index} className="flex flex-col space-y-1 ">
                      <span className='text-red-600'>*{item}</span>
                    </div>
                  ))
                ) 
              }
          <div className='flex space-x-3 items-center'>
              <input type="checkbox" />
              <span>I agree to all terms,Privacy policies and fees</span>
          </div>
          <button disabled={createUser} type="submit" className='w-36 text-white bg-blue-600 rounded-md py-2'>{createUser ?'Creating User':"Sign up"}</button>

        </form>
        <div className='flex items-center space-x-2'>
          <span className='text-md'>Already have an account?</span>
          <Link to="/login" className='font-bold text-blue-500 hover:text-blue-700'>Login</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Register