import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-body">
        <img className='card-img-top' src={props.cardImage} alt="card image" />
        <p className='card-text'>For CSS Grid expertise:
              Rachel Andrew: https://gridbyexample.com/
              Jen Simmons: http://labs.jensimmons.com/
        </p>
        <div>
          <a href=""><button className='btn'> Git</button></a>
          <a href=""><button className='btn'> Explore More</button></a>
        </div>
        
      </div>
    </div>
  )
}

export default Card

          
          
