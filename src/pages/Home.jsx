import {Link } from 'react-router-dom';

import React from 'react'

const Home = () => {
  return (
   <section className='section'>
    <h1>Home</h1>
    <Link to = '/about' className='btn'>About</Link>
    </section>
  )
}

export default Home