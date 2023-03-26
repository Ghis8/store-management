
import React, { createContext, useContext, useEffect,useState } from 'react'

const authContext=createContext({})

export function AuthProvider({children}) {
  const [user,setUser]=useState(null)
    useEffect(()=>{
        const str=localStorage.getItem('user')
        setUser(JSON.parse(str))
    },[])
  return (
    <authContext.Provider value={{
      user:user
    }}>{children}</authContext.Provider>
  )
}

export default function useAuth(){
  return useContext(authContext)
}