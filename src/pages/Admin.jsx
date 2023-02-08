import React from 'react'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'

function Admin() {
  return (
    <Layout children={<Dashboard/>}/>
  )
}

export default Admin