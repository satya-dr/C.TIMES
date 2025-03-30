

import React, { useRef, useEffect, useState } from "react";
import "./TeamPage.css";
import clgLogo from './photos/ct.jpg';

import logo from './photos/cgectimes.png';


const TeamPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Arya Ghosh",
      position: "Incharge",
      role: "I am Arya Ghosh 2nd year ECE from Cooch Behar Government engineering college",
     photo: require('./Member_photos/Arya Ghosh.jpg'),
      // photo: require('./photos/neha.jpg')
    },
    {
      id: 2,
      name: "Dibyendu Koley",
      position: "Co-incharge",
      role: "I am Dibyendu Koley 2nd year ECE from Cooch Behar Government engineering college ",
      photo: require('./Member_photos/HDR.jpg'),
    },
    {
      id: 3,
      name: "Anwesha Ghosh",
      position: "Social media handler ",
      role: "I am Anwesha Ghosh 2nd year ECE from Cooch Behar Government engineering college ",
    photo: require('./Member_photos/Anwesha Ghosh.jpg'),
    },
    {
      id: 4,
      name: "Diya Ghosh",
      position: "Reporter, content writer",
      role: "I am Diya Ghosh 2nd year EE from Cooch Behar Government engineering college",
      photo: require('./Member_photos/Diya Ghosh.jpg'),
    },
      {
        id: 5,
        name: "Himanshu Adhikary",
        position: "Photographer",
        role: "I am Himanshu Adhikary 2nd year EE from Cooch Behar Government engineering college",
      photo: require('./Member_photos/Himanshu Adhikary.jpg'),
      },
      
      {
        id: 6,
        name: "Joydeep Mitra",
        position: "Reporter",
        role: "I am Joydeep Mitra 2nd year ME from Cooch Behar Government engineering college",
      photo: require('./Member_photos/Joydeep Mitra.jpg'),
      },
      {
        id: 7,
        name: "Neha Sarkar",
        position: "Photographer",
        role: "I am Neha Sarkar 2nd year ECE from Cooch Behar Government engineering college  ",
      photo: require('./Member_photos/NEHA SARKAR ECE 31.jpg'),
      },
      {
        id: 8,
        name: "Shubhojit Hazra",
        position: "Content Writer",
        role: "I am Shubhojit Hazra 2nd year EE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/SHUBHOJIT HAZRA.jpg'),
      },
      {
        id: 9,
        name: "Nabajyoti Nag",
        position: "Graphic Designer",
        role: "I am Nabajyoti Nag 2nd year ECE from Cooch Behar Government engineering college",
      photo: require('./Member_photos/Nabajyoti Nag.jpg'),
      },
      {
        id: 10,
        name: "Tamanna Mishra",
        position: "Tech member",
        role: "I am Tamanna Mishra 2nd year CSE from Cooch Behar Government engineering college",
      photo: require('./Member_photos/Tamanna.jpg'),
      },
      {
        id: 11,
        name: "Satyajit Roy",
        position: "Tech member",
        role: "I am Satyajit Roy 1st year CSE from Cooch Behar Government engineering college ",
        photo: require('./Member_photos/me1.jpg'),
      },
      {
        id: 12,
        name: "Debojit Sarkar",
        position: "Graphic Designer",
        role: "I am Debojit Sarkar 1st year CSE from Cooch Behar Government engineering college ",
        photo: require('./Member_photos/Debojit Sarkar.jpg'),
      },
      {
        id: 13,
        name: "Subham Saha",
        position: "Tech member",
        role: "I am Subham Saha 1st year CSE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/Subham Saha.webp'),
      },
      {
        id: 14,
        name: "Bhargabi Mukherjee",
        position: "Content Writer",
        role: "I am Bhargabi Mukherjee 1st year EE from Cooch Behar Government engineering college ",
        photo: require('./Member_photos/Bhargabi.jpg'),
      },
      {
        id: 15,
        name: "Kankana Sikder ",
        position: "Content Writer",
        role: "I am Ayush Kankana Sikder 1st year CE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/Kankana Sikder.jpg'),
      },
      {
        id: 16,
        name: "Ayan Roy",
        position: "Graphic Designer",
        role: "I am Ayan Roy 1st year CSE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/AYAN ROY.jpg'),
      },
      {
        id: 17,
        name: "Rishav Prasad",
        position: "Social Media Handler ",
        role: "I am Rishav Prasad 1st year CSE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/Rishav Prasad.jpg'),
      },
      {
        id: 18,
        name: "Parthiv Bania",
        position: "Tech member",
        role: "I am Parthiv Bania 1st year CSE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/Parthiv.jpg'),
      },
      {
        id: 19,
        name: "Ayush Kumar Sharma",
        position: "Repoter",
        role: "I am Ayush Kumar Sharma 1st year EE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/Aack Back.jpg'),
      },
      {
        id: 20,
        name: "Nirupam Konar",
        position: "Video editor",
        role: "I am Nirupam Konar 1st year ECE from Cooch Behar Government engineering college",
        photo: require('./Member_photos/NIRUPAM KONAR.jpg'),
      },
      {
        id: 21,
        name: "Soumadeep Das",
        position: "Cartoonist",
        role: "I am Soumadeep Das 1st year CSE from Cooch Behar Government engineering college  ",
        photo: require('./Member_photos/Soumadeep Das.jpg'),
      },
      
  ];
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleSendClick = () => {
    if (!email) {
      alert(`Please enter your email address`);
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    alert(`Email:- ${email} submitted!\nThanks for being a part of us 🧡`);
    setEmail('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
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
                  src={member.photo||"no photo"} 
                  // src={(!member.photo || member.photo.trim() === "") ? (
                  //   <p className="card-content text-muted">No Title</p>
                  // ) : (
                  //   <p className="card-content">
                  //     {member.photo}
                     
                  //   </p>
                  // )} 
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
                {member.role.slice(0, 90)}
                {member.role.length > 90 && "..."}
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


