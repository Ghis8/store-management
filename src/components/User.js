import React, { useState,useEffect } from 'react'
import {MdModeEditOutline,MdDelete} from 'react-icons/md'

function User() {
  const [addUser,setAddUser]=useState(false)
  const [user,setUser]=useState(null)
  const [users,setUsers]=useState(null)
  const [del,setDel]=useState(false)
  const [verify,setVerify]=useState(false)
  const [err,setErr]=useState('')
  const [adding,setAdding]=useState(false)
  const [userError,setUserError]=useState('')
  const [val,setVal]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    cpassword:'',
    phone:'',
    genre:'',
    age:0,
    user_type:''
  })
  const [checkuser,setCheckuser]=useState({
    email:'',
    password:''
  })
 
  const getUser=()=>{
      const str=localStorage.getItem('user')
      setUser(JSON.parse(str))
  }

  const getUsers=()=>{
    fetch('https://store-management-backend-v1.onrender.com/api/users')
      .then(res=>res.json())
      .then(data=>{
        setUsers(data)
      })
  }
  const addEmployee=(e)=>{
    e.preventDefault()
    setAdding(true)
    if(!val.firstName && !val.lastName && !val.email && !val.password && !val.phone && !val.user_type){
      setErr('All input fields are mandatory except Genre and Age!')
      return false
    }
    if(val.password !== val.cpassword){
      return setErr('Password and Confirm Password does not match')
    }
    fetch('https://store-management-backend-v1.onrender.com/api/user/add-employee',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        firstName:val.firstName,
        lastName:val.lastName,
        email:val.email,
        phone:val.phone,
        password:val.password,
        role:val.user_type,
        gender:val.genre,
        age:val.age
      })
    }).then(res=>res.json())
      .then(data=>{
        alert(`User ${val.firstName} added!`)
        setAdding(false)
        e.target.reset()
      })
      .catch(err=>{
        console.log(err)
      })
    
  }
  const checkUSer=()=>{
    try {
      fetch('https://store-management-backend-v1.onrender.com/api/user/check-user',{
      method:'POST',
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({
        email:checkuser.email,
        password:checkuser.password
      })
    }).then(res=>res.json())
      .then(data=>{
        alert(data.message)
        setVerify(false)
        return true
      })
      .catch(err=>console.log(err))
    } catch (error) {
      console.log(err)
      return false
    }
    
  }

  useEffect(()=>{
      getUser()
      getUsers()
  },[del])
  return (
    <div className='mt-5 mx-10 relative '>
        <span className='font-bold text-3xl'>User</span>
        <div className='flex items-center space-x-8 mt-5'>
          <span onClick={()=>{
            setAddUser(false)
          }} className={!addUser?"text-blue-300 border-b-2 border-blue-300 font-semibold cursor-pointer":'font-semibold cursor-pointer'}>All</span>
          <span onClick={()=>setAddUser(true)} className={addUser?"text-blue-300 border-b-2 border-blue-300 font-semibold cursor-pointer":'font-semibold cursor-pointer'}>New User</span>
        </div>
        {
          addUser && user?.role==='manager' ?(
            <div className='flex flex-col w-3/4 mx-auto py-5'>
                <span className='text-2xl font-bold text-center mt-5 pb-4 border-b-2'>Add Employee</span>
                <div className='flex mt-8 justify-between mx-16'>
                    <span className='font-semibold text-2xl'>Account</span>
                    <form className='flex flex-col space-y-5' onSubmit={addEmployee}>
                        <input type="text" placeholder='First name' onChange={(e)=>setVal({...val,firstName:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Last name' onChange={(e)=>setVal({...val,lastName:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Email' onChange={(e)=>setVal({...val,email:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='phone' onChange={(e)=>setVal({...val,phone:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="password" placeholder='Password' onChange={(e)=>setVal({...val,password:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="password" placeholder='Confirm Password' onChange={(e)=>setVal({...val,cpassword:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Gender' onChange={(e)=>setVal({...val,genre:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <input type="text" placeholder='Age' onChange={(e)=>setVal({...val,age:e.target.value})} className='bg-gray-200 rounded-md indent-2 w-[300px] py-2' />
                        <div className=''>
                          <span className="text-xl capitalize">type</span>
                          <div className="mt-3 flex space-x-16">
                              <div className="flex space-x-2 items-center">
                                  <input type="radio" value="manager" onChange={(e)=>setVal({...val,[e.target.name]:e.target.value})} className="cursor-pointer" name="user_type" />
                                  <span className="capitalize">Manager</span>
                              </div>
                              <div className="flex space-x-2 items-center">
                                  <input type="radio" value="employee" onChange={(e)=>setVal({...val,[e.target.name]:e.target.value})} className="cursor-pointer" name="user_type"/>
                                  <span className="capitalize">Employee</span>
                              </div>
                              
                          </div> 
                        </div>
                        {
                          err && <span className='text-red-500'>*{err}</span>
                        }
                        <button disabled={adding} type="submit" className="bg-[#4796BD] py-2 w-2/4 rounded-full text-white font-semibold">{adding? "Creating User":"Register"}</button>
                    </form>
                </div>
            </div>
          ):user?.role==='manager' && 
          <div className=''>
            <table className='mt-10 w-3/4 text-center shadow-md'>
              <thead className='bg-blue-200 py-5 sticky top-0 z-10'>
                <tr >
                  <th className='py-2'>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              
              {
                users?.map((item,i)=>(
                  <tbody key={i} className="border-b-2 px-5">
                    <tr className='hover:bg-gray-100 cursor-pointer'>
                      <td className='py-2'>{item?.firstName}</td>
                      <td className='py-2'>{item?.lastName}</td>
                      <td className='py-2'>{item?.email}</td>
                      <td className='py-2'>{item?.phone}</td>
                      <td className='py-2'>{item?.role}</td>
                      <td className='py-2  flex items-center justify-center space-x-2'>
                          <MdModeEditOutline className="hover:text-blue-500"/>
                          <MdDelete onClick={()=>{
                            // setVerify(true)
                            const confirm=window.confirm(`Do you really want to Delete ${item?.firstName} user?`)
                            if(confirm== true){
                              fetch(`https://store-management-backend-v1.onrender.com/api/user/delete-user/${item?._id}`,{
                              method:"DELETE"})
                              .then(()=>{
                                window.location.reload(true)
                                setDel(!del)
                              })

                            }
                            return false
                          }} className="hover:text-red-500"/>
                      </td>
                    </tr>
                  </tbody>
                ))
              }
              
            </table>
          </div>
        }
         {verify && <div className='text-center rounded-md w-2/4 border left-44 flex flex-col  backdrop-blur-md shadow-md bg-gray-100 py-4 space-y-4 top-36 absolute z-10'>
            <span className='text-xl font-semibold'>User confirmation</span>
            <span className='text-gray-500'>Please Enter credentials you used to login</span>
            <form  className='flex flex-col space-y-3'> 
              <input type='text' value={user?.email} onChange={(e)=>setCheckuser({...checkuser,email:e.target.value})} name="email" className='border py-1 w-2/4 rounded-md shadow-sm mx-auto indent-1 outline-none' placeholder='Email address'/>
              <input type='password' onChange={(e)=>setCheckuser({...checkuser,password:e.target.value})} name="password" className='mb-3 py-1 rounded-md shadow-sm w-2/4 mx-auto indent-1 outline-none' placeholder='password'/>
              {
                userError && <span className='text-red-600'>*{userError}</span>
              }
              <div className='flex items-center space-x-5 w-4/5 justify-center'>
                <button onClick={checkUSer} className='py-1 px-2 bg-blue-500 w-1/5 hover:bg-blue-400 text-white rounded-md mt-3' type='submit'>confirm</button>
                <button onClick={(e)=>{
                  e.preventDefault()
                  setVerify(false)
                  }} className='py-1 px-2 bg-red-500 w-1/5 hover:bg-red-400 text-white rounded-md mt-3' type='submit'>cancel</button>
              </div>
              
            </form>
          </div>}
        
    </div>
  )
}

export default User