import React , {useEffect, useState} from 'react';
import "./Navbar.css";
import logo_wide from "../../assets/newto/logoWhite.png";
import logo_mobile from "../../assets/newto/logoW.png";
import menu from "../../assets/menu-icon.png";

function Navbar() {

  const[lastScroll , setlastScroll]= useState(0);
  const[navVisible, setnavVisible] = useState(true);


  const handleScroll = ()=>{
    const ScrollTop = windows.pageYOffset || document.documentElement.scrollTop;
    if(ScrollTop > lastScroll ){
      setnavVisible(false);
    }
    else{
      setnavVisible(true);
    }
    setnavScroll(scrollTop);
  }



  useEffect(()=> {
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll)
  },[lastScroll]);


  
  const ToggleMenu = () =>{
    const NavList = document.getElementsById('menu-list ');
    NavLink.style.display = NavLink.style.display === ""? "none": "flex";
  }


  return (
    <nav className="container" id='navbar'>
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
  
      

      <div className="menu-container " onClick={ToggleMenu} >
        <img className='menu' src={menu} alt="hamburger-menu" />
      </div>

    </nav>
  )
}

export default Navbar
