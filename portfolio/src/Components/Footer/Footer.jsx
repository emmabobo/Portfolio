import React from 'react'
import "./Footer.css"
import PictureFooter from "../../assets/newto/LogoW.png"


function Footer() {
  return (
    <div className='footer container'>
      <div className="row">

        <div className='footer-socials'>  
            <ul className='footer-icons'>
                {/*<li className='social-icons'><a href="">
                  <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/></a>
                </li>*/}
                
                <li className='social-icons'><a href=""><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a></li>

                <li className='social-icons'><a href=""><img width="48" height="48" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/></a></li>
            </ul>
        </div>

        <div className='footer-copywrite'>
          <img src={PictureFooter} alt="Logo Footer" />
          <div>Copyright © 2024 </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
