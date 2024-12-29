import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card-container'>
      
      <div className="card-text">
        <h1 className="card-head">
          {props.CardHeader} 
        </h1>
        <h2 className="card-head2">
          {props.CardHeader2} 
        </h2>
        <p className="card-para">
          {props.CardParagraph}
        </p>

        <button className="view-btn btn"><a href="" >View project</a>
      </button>
      </div>

      <div className='Ex-link'>
        <i></i>
        <i></i>
        <i></i>
      </div>

      
      
      <div className='card-img'> 
        <div className="shadow"> </div>
        <img className='card-image'
       src={props.ImageCard} alt="" />
       
      </div>
      

      
    </div>
  );
}

export default Card;