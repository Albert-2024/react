import {Link, useParams } from 'react-router-dom'
import products from '../data'

import React from 'react'

const SinglePrdt = () => {
    const { productID } = useParams()

    console.log(productID)
  return (
    <div>
        <h2>{productID}</h2>
        <Link to='/products'>Back to Products</Link>
    </div>
  )
}

export default SinglePrdt