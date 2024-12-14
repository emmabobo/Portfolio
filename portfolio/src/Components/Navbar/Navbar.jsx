import React , {useEffect, useState} from 'react';
import "./Navbar.css";
import logo_wide from "../../assets/newto/logoWhite.png";
import logo_mobile from "../../assets/newto/logoW.png";
import menu from "../../assets/menu-icon.png";

function Navbar() {

  const [lastScroll, setLastScroll] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; 

    if (scrollTop > lastScroll) {
      // Scrolling Down
      setNavVisible(false); 
    } else {
      // Scrolling Up
      setNavVisible(true);
    }

    setLastScroll(scrollTop); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll]); // Only re-run the effect when `lastScroll` changes

  const handleClick = () => {
    setIsVisible=(!isVisible)
  };


  return (
    <nav className="container nav-container" >
      <div className='logo-container'>
        <img src={logo_wide} alt="logo-wide " className='logo_wide logo'/>
        <img src={logo_mobile} alt="Logo-mobile " className='logo_mobile logo'/>
      </div>

      <ul className='nav-list' id='menu-list'>
        <li className='list'><a className='list-link' href="">Home</a></li>
        <li className='list'><a className='list-link' href="">Experties</a></li>
        <li className='list'><a className='list-link' href="">Work</a></li>
        <li className='list'><a className='list-link' href="">Experience</a></li>
        <li className='list'><a className='list-link' href="">Contact</a></li>
      </ul>

      <button className='btn btn-cv'>Download CV</button>

      <div className="mobileView">
        <ul className='mobile-nav-list' id='mobile-menu-list'>
          <li className='mobile-list'><a className='mobile-list-link' href="">Home</a></li>
          <li className='mobile-list'><a className='mobile-list-link' href="">Experties</a></li>
          <li className='mobile-list'><a className='mobile-list-link' href="">Work</a></li>
          <li className='mobile-list'><a className='mobile-list-link' href="">Experience</a></li>
          <li className='mobile-list'><a className='mobile-list-link' href="">Contact</a></li>
          <li>
          <button className=' btn btn-mobile   btn-cv-mobile'>Download CV</button>
          </li>
          
        </ul>
      </div>
  
      <img  onClick={handleClick}className="menu-icon" src={menu} alt="" />
    </nav>
  )
}

export default Navbar
