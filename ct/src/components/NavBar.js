import React from 'react';
import './NavBar.css';
import clgLogo from './photos/clgLogo.png';
import india from './photos/india.png';
import logo from './photos/cgectimes.png';
import mainLogo from './photos/ct.jpg';

const NavBar = () => {
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
    
     
      
    return (
        <div className='main_nav'>
            <div className="fixed-top bg-white">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="head container-fluid">
                        <div className="search-box">
                            <input className="form-control" type="text" placeholder="Search" />
                        </div>

                        <div className="navbar-brand d-flex align-items-center">
                            <img src={clgLogo} alt="Logo" className="logo-img mx-2" />
                            <span className="dept-names"> | CSE   || | ECE | EE  ||  ME | CE</span>
                            <img src={clgLogo} alt="Logo" className="logo-img mx-2" />
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="nav-item email-btn"><a href="mailto:thecgectimesofficial@gmail.com">Email<i className="fa-solid fa-envelope mx-1"></i></a> </div>
                            <a href="https://www.linkedin.com/company/the-cgec-times/"><i className="fa-brands fa-linkedin-in mx-2 linkedIn social-icon"></i></a>
                            <a href="https://www.instagram.com/the_cgec_times/"><i className="fa-brands fa-instagram mx-2 instaGram social-icon"></i></a>
                            <a href="https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/"><i className="fa-brands fa-facebook-f mx-2 faceBook social-icon"></i></a>
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
                            <span className="publication-item me-3">Publication</span>
                            <span className="publication-item me-3">Sports</span>
                            <span className="publication-item me-3">Clubs</span>
                            <span className="publication-item me-3">Committees</span>
                            <span className="publication-item me-3">Academic Depts</span>
                            <span className="publication-item me-3">Academic Event</span>
                            <span className="publication-item me-3">Fest Gallery</span>
                            <span className="publication-item me-3">Interviews</span>
                        </div>
                    </div>
                </div>
            </div>

      
            <div className="margin"></div>

            
            
        </div>
    );
};

export default NavBar;