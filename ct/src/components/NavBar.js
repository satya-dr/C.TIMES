import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import clgLogo from './photos/clgLogo.png';
import india from './photos/india.png';
import logo from './photos/cgectimes.png';
import mainLogo from './photos/ct.jpg';

const NavBar = () => {
    const [showClubsDropdown, setShowClubsDropdown] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showMenuDropdown, setshowMenuDropdown] = useState(false);
    const [showPublicationsDropdown, setShowPublicationsDropdown] = useState(false);
    const [showSportsDropdown, setshowSportsDropdown] = useState(false);
    
    const getCurrentDate = () => {
        const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        };
        const today = new Date();
        return today.toLocaleDateString('en-US', options);
    };

    const toggleClubsDropdown = () => {
        setShowClubsDropdown(!showClubsDropdown);
    };

    const clubs = [
        "TECH-O-NICKS",
        "PEP TALKS",
        "CAPTURE CREW",
        "GAMER'S CREED",
        "CREATIVE PENS",
        "SPORTS CLUB",
        "ART CLUB",
        "DEBATE CLUB"
    ];
      
    return (
        <div className='main_nav'>
            <div className="fixed-top bg-white">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="head container-fluid">
                        {/* options */}
                        <div className="menu-dropdown-container ms-3">
    <div 
        className="user-menu d-flex align-items-center"
        onClick={() => setshowMenuDropdown(!showMenuDropdown)}
        style={{ cursor: 'pointer' }}
    >
        <i className="fas fa-th-list menu-icon"></i>
        <i className={`fas fa-caret-down ms-2 ${showMenuDropdown ? 'fa-rotate-180' : ''}`}></i>
    </div>

    {showMenuDropdown && (
        <div className="menu-dropdown-menu">
            <Link to="/" className="dropdown-item">
                <i className="fas fa-home me-2"></i>Home
            </Link>
            <Link to="/clubs" className="dropdown-item">
                <i className="fas fa-people-group me-2"></i>Clubs
            </Link>
            <Link to="/news" className="dropdown-item">
                <i className="fas fa-newspaper me-2"></i>News
            </Link>
            <Link to="/team" className="dropdown-item">
                <i className="fas fa-people-group me-2"></i>Team
            </Link>
            <Link to="/events" className="dropdown-item">
                <i className="fas fa-calendar-day me-2"></i>Events
            </Link>
        </div>
    )}
</div>
                        {/* <div className="search-box">
                            <input className="form-control" type="text" placeholder="Search" />
                        </div> */}

                        <div className="navbar-brand d-flex align-items-center">
                            <img src={clgLogo} alt="Logo" className="logo-img mx-2" />
                            <span className="dept-names">BSH | CSE   || | ECE | EE  ||  ME | CE</span>
                            <img src={clgLogo} alt="Logo" className="logo-img mx-2" />
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="nav-item email-btn">
                                <a href="/Email">Email<i className="fas fa-envelope mx-1"></i></a>
                            </div>
                            <a href="https://www.linkedin.com/company/the-cgec-times/">
                                <i className="fab fa-linkedin-in mx-2 linkedIn social-icon"></i>
                            </a>
                            <a href="https://www.instagram.com/the_cgec_times/">
                                <i className="fab fa-instagram mx-2 instaGram social-icon"></i>
                            </a>
                            <a href="https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/">
                                <i className="fab fa-facebook-f mx-2 faceBook social-icon"></i>
                            </a>

                            <div className="user-dropdown-container ms-3">
    <div 
        className="user-menu d-flex align-items-center"
        onClick={() => setShowUserDropdown(!showUserDropdown)}
        style={{ cursor: 'pointer' }}
    >
        <i className="fas fa-user-circle user-menu-icon"></i>
        <i className={`fas fa-caret-down ms-2 ${showUserDropdown ? 'fa-rotate-180' : ''}`}></i>
    </div>

    {showUserDropdown && (
        <div className="user-dropdown-menu">
            <Link to="/profile" className="dropdown-item">
                <i className="fas fa-user me-2"></i>Profile
            </Link>
            <Link to="/settings" className="dropdown-item">
                <i className="fas fa-cog me-2"></i>Settings
            </Link>
            <Link to="/logout" className="dropdown-item">
                <i className="fas fa-sign-out-alt me-2"></i>Logout
            </Link>
        </div>
    )}
</div>
                            
                            
                        </div>
                    </div>
                </nav>
            </div>

            <div className="header-section login_sec container-fluid bg-white" style={{ marginTop: '80px' }}>
               <div className="row">
                   <div className="col-md-12">
                       <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
                       <div className='dateDetails d-flex justify-content-center align-items-center mb-3 mb-md-0'>
                         <u> {getCurrentDate()} || e-Paper || TODAY'S PAPER <br />  ENGLISH | বাংলা | हिंदी 
                         </u>
                       </div>
                           <div className='clg_logos d-flex mb-3 mb-md-0'>
                               <img className='main_logo' src={mainLogo} alt="" />
                               <img className='cgec' src={logo} alt="" />
                           </div>
                           <div>
                               <div className="edition my-1">EDITION <img src={india} alt="" />INDIA</div>
                               <div className="logSign">
                                   <button className="btn logIn btn-primary"><a href="/">Log In</a></button>
                                   <button className="btn signIn btn-primary mx-1"><a href="/">Sign In</a></button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

            <div className="publications-section button_sec container-fluid bg-white p-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                            



{/* Publications dropdown */}
<div 
    className="position-relative d-inline-block me-3"
    onMouseEnter={() => setShowPublicationsDropdown(true)}
    onMouseLeave={() => setShowPublicationsDropdown(false)}
>
    <button 
        className="publication-item dropdown-toggle"
        onClick={() => setShowPublicationsDropdown(!showPublicationsDropdown)}
    >
        Publications <i className={`fas fa-caret-down ms-1 ${showPublicationsDropdown ? 'fa-rotate-180' : ''}`}></i>
    </button>
    
    {showPublicationsDropdown && (
        <div className="publications-dropdown-menu">
            <Link to="/magazine" className="dropdown-item">
                <i className="fas fa-book me-2"></i>College Magazine
            </Link>
            <Link to="/newsletter" className="dropdown-item">
                <i className="fas fa-newspaper me-2"></i>Monthly Newsletter
            </Link>
            <Link to="/annual-report" className="dropdown-item">
                <i className="fas fa-file-alt me-2"></i>Annual Report
            </Link>
            <Link to="/research-papers" className="dropdown-item">
                <i className="fas fa-flask me-2"></i>Research Papers
            </Link>
        </div>
    )}
</div>


<div 
    className="position-relative d-inline-block me-3"
    onMouseEnter={() => setshowSportsDropdown(true)}
    onMouseLeave={() => setshowSportsDropdown(false)}
>
    <button 
        className="publication-item dropdown-toggle"
        onClick={() => setshowSportsDropdown(!showSportsDropdown)}
    >
        Sports <i className={`fas fa-caret-down ms-1 ${showSportsDropdown ? 'fa-rotate-180' : ''}`}></i>
    </button>
    
    {showSportsDropdown && (
        <div className="publications-dropdown-menu">
            <Link to="/magazine" className="dropdown-item">
                <i className="fas fa-cricket me-2"></i>Cricket
            </Link>
            <Link to="/newsletter" className="dropdown-item">
                <i className="fas fa-futbol me-2"></i>Football
            </Link>
            <Link to="/annual-report" className="dropdown-item">
                <i className="fas fa-volleyball-ball me-2"></i>volley ball
            </Link>
            <Link to="/research-papers" className="dropdown-item">
                <i className="fas fa-table-tennis me-2"></i>Badminton
            </Link>
        </div>
    )}
</div>

                            <Link to="/" className="publication-item me-3">Clubs</Link>
                            <Link to="/" className="publication-item me-3">Commities</Link>
                            <Link to="/" className="publication-item me-3">Academic Dept.</Link>
                            <Link to="/" className="publication-item me-3">Academic Events</Link>
                            
                            {/* Clubs dropdown
                            <div 
                                className="position-relative d-inline-block me-3"
                                onMouseEnter={() => setShowClubsDropdown(true)}
                                onMouseLeave={() => setShowClubsDropdown(false)}
                            >
                                <button 
                                    className="publication-item dropdown-toggle"
                                    onClick={toggleClubsDropdown}
                                >
                                    Clubs
                                </button>
                                
                                {showClubsDropdown && (
                                    <div className="clubs-dropdown-menu">
                                        {clubs.map((club, index) => (
                                            <Link 
                                                key={index}
                                                to={`/clubs/${club.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="dropdown-item"
                                            >
                                                {club}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div> */}
                            
                            {/* <Link to="/" className="publication-item me-3">Fest Gallery</Link> */}
                            <Link to="/" className="publication-item me-3">Interviews</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="margin"></div>
        </div>
    );
};

export default NavBar;

