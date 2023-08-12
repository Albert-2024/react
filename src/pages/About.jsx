import {Link} from 'react-router-dom'
import React from 'react'

const About = () => {
  return (
    <section>
        <h2>About</h2>
        <Link to='/' className='btn'>Home</Link>
    </section>
  )
}

export default About