import React from 'react'
import "./ExpertiseCard.css"

function ExpertiseCard(props) {
  return (
    <div >
      <div className='E-card'>
      <img src={props.Eicon} alt="" className="E-icon" />
      <h1 className='E-header'>{props.Eheader}</h1>
      <p className="E-para">{props.Epara}</p>
    </div>
    </div>
    
  )
}

export default ExpertiseCard
