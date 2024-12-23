import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card-container'>
      <div className='card-img'> 
      <div className="shadow"> </div>
       <img className='card-image'
       src={props.ImageCard} alt="" />
       
      </div>
      

      <div className="card-text">
        <h1 className="card-head">
          {props.CardHeader} 
        </h1>
        <hr />
        <p className="card-para">
          {props.CardParagraph}
        </p>
      </div>

      <div className='Ex-link'>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export default Card;