import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card-container">
        <img className='card-img-top marg-down' src={props.cardImage} alt="card image" />
        <p className='card-text marg-down'>For CSS Grid expertise:
              Rachel Andrew: https://gridbyexample.com/
              Jen Simmons: http://labs.jensimmons.com/
        </p>
        <a href=""><button className='btn marg-down'> Git</button></a>
        
  
    </div>
  )
}

export default Card

          
          
