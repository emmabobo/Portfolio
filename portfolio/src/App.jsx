import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Porfolio/Portfolio'
import Footer from './Components/Footer/Footer'


function App() {
  return ( 
    <div>
      <Navbar/>
      <Hero />
      <Portfolio/>
      
      {/*<Footer/>*/}
    </div>
  )
}

export default App
