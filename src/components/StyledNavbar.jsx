import React from 'react'
import {NavLink} from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
        <NavLink
            to='/'
            style={({isActive})=> {
                return {
                    color: isActive ? 'red' : 'blue'
                }
            }}>
            Home
        </NavLink>
        <NavLink to='/about'
            style={({isActive})=> {
                return {
                    color: isActive ? 'red' : 'blue'
                }
            }}> About</NavLink>
        <NavLink to='/product'
            style={({isActive})=> {
                return {
                    color: isActive ? 'red' : 'blue'
                }
            }}></NavLink>

    </nav>
    
  )
}

export default StyledNavbar