import React from 'react'
import Layout from '../components/Layout'
import Orders from '../components/Orders'

function Order() {
  return (
    <Layout children={<Orders />} />
  )
}

export default Order