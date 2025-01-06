import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Pages/Home/Home.jsx"



function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Experience" element={<Experience />} />
      </Routes>

      
      
      {/*
      <Hero />
      <Portfolio/>
      <Experties/>
      <Footer/>
      <Contact/>
      
      */}
    


    </Router>
 
    
  )
}

export default App
