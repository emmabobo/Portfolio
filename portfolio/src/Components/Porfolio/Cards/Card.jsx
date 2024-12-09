import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className="option active">
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <i class="fas fa-walking"></i>
        </div>
        <div className="info">
          <div className="main_i"> Bold text</div>
          <div className="sub_1">bold text label </div>
        </div>
      </div>        
    </div>
  )
}

export default Card

          
