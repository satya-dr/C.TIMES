

import React from 'react';
import './About.css';
import backgroundImage from './photos/cgec_acdemic.jpeg';
import clgLogo from './photos/clgLogo.png'; 

const BackgroundBox = () => {
  return (
    <div className="container-fluid p-0"> 
      <div 
        className="background-box"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <img 
          src={clgLogo} 
          alt="CGEC Logo" 
          className="college-logo"
        />
        
        <div className="overlay"></div>
        
        <div className="main-content-container">
        <div className="about-sections-container">
           
           <div className="about-section times-section">
             <h2>About CGEC Times</h2>
             <div className="section-content">
               <p>
                 Welcome to CGEC Times, the official newspaper club of Cooch Behar Government Engineering College. 
                 Established in 2022, we provide insights into campus activities and effectiveness.
               </p>
               <p>
                 As one of the largest student-led clubs in CGEC, we take pride in bringing recreational 
                 content to our readers. Our team publishes comprehensive monthly editions highlighting 
                 our college's spirit, renovations, and culture.
               </p>
               <p>
                 Guided by our mentor Prof. [Name], we make an impact through journalism with passionate 
                 storytelling. CGEC Times is the voice of our campus. Stay informed, stay inspired!
               </p>
             </div>
           </div>

           
           <div className="about-section college-section">
             <h2>About CGEC</h2>
             <div className="section-content">
               <p>
                 Cooch Behar Government Engineering College (CGEC) is located in a prime location in 
                 Cooch Behar District, easily accessible from all parts of the city.
               </p>
               <p>
                 Accredited by AICTE and MAKAUT, West Bengal, under the Government of India and 
                 West Bengal's Department of Higher Education.
               </p>
               <p>
                 Our 120-acre campus features modern departments, laboratories, green spaces, 
                 extensive computer facilities, and high-tech teaching tools.
               </p>
               <p>
                 We actively participate in local development initiatives and community well-being programs.
               </p>
             </div>
           </div>
         </div>
        </div>
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default BackgroundBox;