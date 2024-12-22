 import React from 'react'
 import "./Experties.css"
 import ExpertiseCard from './ExpertiseCard/ExpertiseCard'
 import Eicon1 from "../../assets/mail-icon.png"
 import UIicon from "../../assets/ui_icon.gif"
 

 
 function Experties() {
  const Eparagrph1 = "I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.";

  const Eheader1= "Full Stack Web Development";

  const Eparagrph2 = "Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.";

  const Eheader2= "DevOps & Automation";

  const Eparagrph3 = "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.";

  const Eheader3= "Full Stack Web Development";



   return (
     <div className='container Experties-con'>
        
      <div className="Experties">
        <ExpertiseCard Eicon={UIicon} Eheader={Eheader1} Epara={Eparagrph1}/>
        <ExpertiseCard Eicon={Eicon1} Eheader={Eheader1} Epara={Eparagrph1}/>
        <ExpertiseCard Eicon={Eicon1} Eheader={Eheader1} Epara={Eparagrph1}/>
      </div>
      <div className="ExHeader">
          Expertiest
      </div>
    </div>
   )
 }
 
 export default Experties