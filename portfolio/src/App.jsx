import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Portfolio from './Components/Porfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Experties from './Components/Experties/Experties'
import Contact from './Components/Contact/Contact'


function App() {
  return ( 
    <div>
      <Navbar/>
      <Hero />
      <Portfolio/>
      <Footer/>
      {/*<Experties/>
      <Contact/>
      */}
    </div>
  )
}

export default App
