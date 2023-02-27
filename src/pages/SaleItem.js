import React from 'react'
import Layout from '../components/Layout'
import Sales from '../components/Sales'

function SaleItem() {
  return (
    <Layout children={<Sales />}/>
  )
}

export default SaleItem