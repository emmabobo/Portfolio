import React from 'react'
import "./Footer.css"
import PictureFooter from "../../assets/newto/LogoW.png"


function Footer() {
  return (
    <div className='footer container'>
      <div className="row">
        <div className='footer-copywrite '>
            <h3>Copyright © 2024 </h3>
        </div>

        <div className='footer-copywrite'><img src={PictureFooter} alt="Logo Footer" />
        </div>

        <div className='footer-socials'>  
            <ul className='footer-icons'>
                <li className='social-icons'>
                    <a href="">whatsapp</a>
                </li>
                <li className='social-icons'>
                <a href="">twitter</a>
                </li>
                <li className='social-icons'><a href="">linkedin</a></li>
                <li className='social-icons'><a href="">Github</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
