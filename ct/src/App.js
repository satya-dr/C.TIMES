import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import NewsPage from './components/NewsPage'; 
import ClubSection from './components/ClubSection'; 
import EventSection from './components/EventSection'; 
import TeamPage from './components/TeamPage';
import Default from './components/Default'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Default />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/clubs" element={<ClubSection />} />
          <Route path="/events" element={<EventSection />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;