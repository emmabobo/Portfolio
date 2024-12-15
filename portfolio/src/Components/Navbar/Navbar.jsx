import React from 'react';
import "./Navbar.css";
import logo_wide from "../../assets/newto/logoWhite.png";
import logo_mobile from "../../assets/newto/logoW.png";
import menu from "../../assets/menu-icon.png";

function Navbar() {

  return (
    <nav className="container nav-container" >

      <div className="navbar">

        <div className='logo-container'>
          <img src={logo_wide} alt="logo-wide " className='logo_wide logo'/>
          <img src={logo_mobile} alt="Logo-mobile " className='logo_mobile logo'/>
        </div>

        <div className='list-desktop'>
          <ul className='nav-list' id='menu-list'>
              <li className='list'><a className='list-link' href="">Home</a></li>
              <li className='list'><a className='list-link' href="">Experties</a></li>
              <li className='list'><a className='list-link' href="">Work</a></li>
              <li className='list'><a className='list-link' href="">Experience</a></li>
              <li className='list'><a className='list-link' href="">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <button className='btn btn-cv'>Download CV</button>
        </div>
       

        <div className="mobileView">
          <ul className='mobile-nav-list' id='mobile-menu-list'>
            <li className='mobile-list'><a className='mobile-list-link' href="">Home</a></li>
            <li className='mobile-list'><a className='mobile-list-link' href="">Experties</a></li>
            <li className='mobile-list'><a className='mobile-list-link' href="">Work</a></li>
            <li className='mobile-list'><a className='mobile-list-link' href="">Experience</a></li>
            <li className='mobile-list'><a className='mobile-list-link' href="">Contact</a></li>
            <li className='mobile-list'>
            <button className='btn btn-mobile   btn-cv-mobile'>Download CV</button>
            </li>
          </ul>
        </div>
  
         
        <div className='menu-icon_container'>
          <img className="menu-icon" src={menu} alt="" />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
