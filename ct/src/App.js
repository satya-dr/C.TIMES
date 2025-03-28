import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import NewsPage from './components/NewsPage'; 
import ClubSection from './components/ClubSection'; 
import EventSection from './components/EventSection'; 
import TeamPage from './components/TeamPage'; 



function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <NewsPage/>
      <ClubSection/>
      <EventSection/>
      <TeamPage/>
       
      
    </div>
  );
}

export default App;