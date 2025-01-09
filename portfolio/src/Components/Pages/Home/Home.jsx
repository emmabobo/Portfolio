import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";
import  Hero from '../../Hero/Hero';
import Eperience from '../../Experience/Experience';


function Home() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="experience" element={<Eperience />} />
    </Routes>
  )
}

export default Home
