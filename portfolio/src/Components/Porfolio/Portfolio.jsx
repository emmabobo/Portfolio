import React from 'react'
import "./Portfolio.css"
import Picture from "../../assets/program-1.png"
import Picture1 from "../../assets/program-2.png"
import Picture2 from "../../assets/program-3.png"
import Card from './Cards/Card'





function Portfolio() {
  const text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
  const headerText="Extremity sweetness";
    return (
    <div className="container portfolio">
      <div className="portfolio-header">
        Work
      </div>
      <div className="portfolio-cards">
        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText}/>
        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText}/>
        <Card ImageCard={Picture} CardParagraph={text} CardHeader={headerText}/>
      </div>

      <div className="portfolio-More">
        <button className="btn"><a href="" >More</a>
          
        </button>
      </div>
      
    </div>
  )
}

export default Portfolio
  