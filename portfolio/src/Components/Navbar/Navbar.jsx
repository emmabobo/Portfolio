import React from 'react'
import "./Navbar.css"
import logo from "../../assets/newto/logoWhite.png"

function Navbar() {
  return (
    <nav className="container" id='navbar'>
        <img src={logo} alt="logo " className='logo'/>
        <ul>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
            <li> <button className='btn'>Download CV</button> </li>
        </ul>
        
    </nav>
  )
}

export default Navbar
