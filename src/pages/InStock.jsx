import React from 'react'
import Layout from '../components/Layout'
import Stock from '../components/Stock'

function InStock() {
  return (
    <Layout children={<Stock />}/>
  )
}

export default InStock