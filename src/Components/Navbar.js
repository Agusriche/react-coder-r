import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import carrito from '../Components/assests/carrito.png'
import profile from '../Components/assests/profile.png'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'> <button> Home </button> </Link>
      <Link to='/singup'> <button> Register </button> </Link>
      <Link to='/login'> <button> Login </button> </Link>
    
    <Link to="/Cart">
      <div className='cart-btn'>
        <img src={carrito} alt="no funca"/>
        <span className='cart-icon.css'> 0 </span>
      </div>
    </Link> 
      
    <Link to="userprofile">
      <img src={profile} className='profile-icon'/>
    </Link>
    
    
    </nav>

    
  )
}

export default Navbar