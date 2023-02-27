import React from 'react'
import Layout from '../components/Layout'
import User from '../components/User'

function AddUser() {
  return (
    <Layout children={<User/>}/>
  )
}

export default AddUser