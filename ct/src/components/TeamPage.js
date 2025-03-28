

import React, { useRef, useEffect, useState } from "react";
import "./TeamPage.css";
import clgLogo from './photos/ct.jpg';

import logo from './photos/cgectimes.png';
import no4 from './photos/art1.jpg';
import no5 from './photos/art2.jpg';
import no6 from './photos/art3.jpg';
import no7 from './photos/art4.jpg';
import no8 from './photos/art5.jpg';
import no1 from './photos/NO1.jpg';
import no2 from './photos/NO2.jpg';
import no3 from './photos/NO3.jpg';

const TeamPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Neha Sarkar",
      position: "Program CEO",
      role: "Prime Minister, Government Engineering Project",
      photo:no1,
      // photo: require('./photos/neha.jpg')
    },
    {
      id: 2,
      name: "Shahbajit Nazra",
      position: "Department Manager",
      role: "El Time Coach for the Government Engineering Project",
      photo:no2
    },
    {
      id: 3,
      name: "Nakajevi Nag",
      position: "Committee Director",
      role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no3
    },
    {
      id: 4,
      name: "Tamanna Mishra",
      position: "Technical Director",
      role: "Technical Division of the First Chief Team Coach for the Government Engineering Project",
      photo:no4
    },
    {
        id: 5,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no5
      },
      {
        id: 6,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no6
      },
      
      {
        id: 7,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no7
      },
      {
        id: 8,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no8
      },
      {
        id: 9,
        name: "Tamanna Mishra",
        position: "Technical Director",
        role: "Technical Division of the First Chief Team Coach for the Government Engineering Project",
        photo:no4
      },
      {
        id: 10,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
      photo:no6
      },
      {
        id: 11,
        name: "Nakajevi Nag",
        position: "Committee Director",
        role: "University High End per CEO, Prime Coach for the Government Engineering Project",
        photo:no3
      },
      {
        id: 12,
        name: "Shahbajit Nazra",
        position: "Department Manager",
        role: "El Time Coach for the Government Engineering Project",
        photo:no2
      },
  ];

  const handleSendClick = () => {
    if (email) {
      alert(`Email ${email} submitted!\nThanks for being a part of us 🧡`);
      setEmail('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert('Please enter your email address');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationStartTime = null;
    const scrollSpeed = 50; 

    const animateScroll = (timestamp) => {
      if (!animationStartTime) animationStartTime = timestamp;
      const elapsed = timestamp - animationStartTime;
      const scrollDistance = (elapsed / 1000) * scrollSpeed;
      
      scrollContainer.scrollLeft = scrollDistance;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
        animationStartTime = timestamp;
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    };

    animationRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="team-container">
      <div className="team-header">
        <h1 className="main-title">Introducing our TEAM</h1>
      </div>
      
      <div className="auto-scroll-container">
        <div className="team-members" ref={scrollContainerRef}>
          {teamMembers.map(member => (
            <div key={member.id} className="member-card">
              <div className="member-image-container">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="member-photo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150'; 
                  }}
                />
              </div>
              <h2 className="member-name">{member.name}</h2>
              <p className="member-position">{member.position}</p>
              <p className="member-role">
                {member.role.slice(0, 50)}
                {member.role.length > 50 && "..."}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="join-section">
        <h3 className="join-title">Be A Part Of Us <i className="fa-solid fa-hand-point-up"></i></h3>
        <div className="join-names">
        <input 
            className="email_sent" 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button 
            onClick={handleSendClick}
            className={isSubmitted ? 'submit-success' : ''}
          >
            {isSubmitted ? (
              <>
                <i className="fas fa-check"></i> Sent!
              </>
            ) : (
              'Send'
            )}
          </button>
        </div>
        {isSubmitted && (
          <p className="submit-message">
            Thank you for joining us! We'll reach you as soon as possible.
          </p>
        )}
      </div>
      
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">Support</h4>
          <ul className="footer-links">
            <li><a href="/"><i className="fa-brands mx-1 fa-rocketchat"></i>chat</a></li>
            <li><a href="/"><i className="fa-solid mx-1 fa-phone"></i>contact</a></li>
            <li><a href="/"><i className="fa-solid mx-1 fa-file"></i>Documentation</a></li>
            <li><a href="/"><i className="fa-solid mx-1 fa-question"></i>FAQ</a></li>
          </ul>
        </div>

        <div className="clg d-flex">
          <img  src={clgLogo} alt="" /> 
          <img src={logo} alt="" /> 
          <div className="social d-flex">
                            <a style={{textDecoration:'none'}} href="https://www.linkedin.com/company/the-cgec-times/"><i className="fa-brands fa-linkedin-in mx-2 linkedIn social-icon"></i></a>
                            <a style={{textDecoration:'none'}} href="https://www.instagram.com/the_cgec_times/"><i className="fa-brands fa-instagram mx-2 instaGram social-icon"></i></a>
                            <a style={{textDecoration:'none'}} href="https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/"><i className="fa-brands fa-facebook-f mx-2 faceBook social-icon"></i></a>
          </div>
          </div>

        <div className="footer-section"> 
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="/"><i className="fa-brands mx-1 fa-servicestack"></i>terms and condition</a></li>
            <li><a href="/">paragraphs</a></li>
            <li><a href="/"><i className="fa-solid mx-1 fa-cookie"></i>Cookies</a></li>
          </ul>
        </div>
        
        <div className="copyright">
          <u>© 2025- Present The CGEC Times. All rights reserved.</u>
        </div>
      </div>
    </div>
  );
};



export default TeamPage;


