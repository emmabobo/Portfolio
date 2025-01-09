import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';



function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
 
    
  )
}

export default App
