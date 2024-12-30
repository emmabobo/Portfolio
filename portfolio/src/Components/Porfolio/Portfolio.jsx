import React from 'react'
import "./Portfolio.css"
import Picture from "../../assets/program-1.png"
import Picture1 from "../../assets/program-2.png"
import Picture2 from "../../assets/program-3.png"
import Card from './Cards/Card'


function Portfolio() {
  const text="A refreshed, animation rich website for business change agency, Volans."
  const headerText="Volans";
  const headerText2= "Project @ Leap"
    return (
    <div className="container portfolio">
      <div className="portfolio-header">
        SELECTED WORK
      </div>
      <div className="portfolio-cards">
        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText} CardHeader2={headerText2}/>

        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText} CardHeader2={headerText2}/>

        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText} CardHeader2={headerText2}/>

        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText} CardHeader2={headerText2}/>
      </div>

      <div className="portfolio-More">
        <button className="btn"><a href="" >More</a>
        </button>
      </div>
      
    </div>
  )
}

export default Portfolio;
  