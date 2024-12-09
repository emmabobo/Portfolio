import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {
  return (
   <div className="hero container">
    <div className="hero-text">
      <h1>
        Emmanuel Ala.
      </h1>
      <h2>
      Software Engineer, Front End & App Development
      </h2>
      <p>
        Designing and bringing your project Alive and responsive 
      </p>
      <button className='btn btn2'>
        Explore more <img  src={dark_arrow} alt="" className='Arrow'/>
      </button>
    </div>
   </div>
  )
}

export default Hero
