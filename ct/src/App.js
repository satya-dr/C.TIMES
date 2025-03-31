
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FullWeb from './components/FullWeb';
import LoadingBar from 'react-top-loading-bar';
import NavBar from './components/NavBar';
import About from './components/About';
import NewsPage from './components/NewsPage'; 
import ClubSection from './components/ClubSection'; 
import EventSection from './components/EventSection'; 
import TeamPage from './components/TeamPage';
import Home from './components/Home'; 


function AppWrapper() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
   
    setProgress(10);
    
    const timer1 = setTimeout(() => setProgress(60), 300);
    const timer2 = setTimeout(() => setProgress(80), 600);
    const timer3 = setTimeout(() => setProgress(100), 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setProgress(0);
    };
  }, [location.pathname]);

  return (
    <>
      <LoadingBar
        color='#0078a8'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
        shadow={true}
        containerStyle={{ zIndex: 9999 }}
      />
      <NavBar />
      <FullWeb/>
      <div style={{ 
         
        transition: 'opacity 0.3s ease' 
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/clubs" element={<ClubSection />} />
          <Route path="/events" element={<EventSection />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;