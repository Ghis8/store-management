import React from 'react'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'

function Products() {
  return (
    <Layout children={<ProductItem/>}/>
  )
}

export default Products