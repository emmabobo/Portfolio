import React from 'react'
import "./Portfolio.css"
import Picture from "../../assets/program-1.png"
import Picture1 from "../../assets/program-2.png"
import Picture2 from "../../assets/program-3.png"
import Card from './Cards/Card.jsx'


const Portfolio = () => {
  return (
    <div className='card-layout container'>
      <Card cardImage={Picture} cardTitle = 'UI/UX Designer' cardText=' Demure design and attractive ui ux design portfolio' />
      <Card cardImage={Picture1} cardTitle = 'UI/UX Designer' cardText=' Demure design and attractive ui ux design portfolio' />
      <Card cardImage={Picture2} cardTitle = 'UI/UX Designer' cardText=' Demure design and attractive ui ux design portfolio' />
      </div>
  )
}

export default Portfolio
