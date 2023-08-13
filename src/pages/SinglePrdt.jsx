import {Link, useParams } from 'react-router-dom'
import products from '../data'

import React from 'react'

const SinglePrdt = () => {
    const { productID } = useParams()
    const product = products.find((product)=> product.id === productID);
    const { image, name } = product;
    
  return (
    <section className='section product'>
      <img src={image} alt={name} />
        <h5>{name}</h5>
        <Link to='/products'>Back to Products</Link>
    </section>
  )
}

export default SinglePrdt