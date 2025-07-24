
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import NavBar from './components/NavBar';
import About from './components/About';
import NewsPage from './components/NewsPage'; 
import ClubSection from './components/ClubSection'; 
import EventSection from './components/EventSection'; 
import TeamPage from './components/TeamPage';
 


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
      <About />
      <NewsPage />
      <ClubSection />
      <EventSection />
      <TeamPage />
      <div style={{ 
         
        transition: 'opacity 0.3s ease' 
      }}>
       
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







// import { useState, useEffect } from 'react';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   useLocation,
//   Outlet 
// } from 'react-router-dom';import LoadingBar from 'react-top-loading-bar';
// import NavBar from './components/NavBar';
// import About from './components/About';
// import NewsPage from './components/NewsPage'; 
// import ClubSection from './components/ClubSection'; 
// import EventSection from './components/EventSection'; 
// import TeamPage from './components/TeamPage';
// import Signup from './components/Signup';
// import Dashboard from './components/Dashboard'; // নতুন কম্পোনেন্ট তৈরি করতে হবে



// function AppWrapper() {
//   const [progress, setProgress] = useState(0);
//   const location = useLocation();
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/`)
//       .then(response => response.json())
//       .then(data => console.log('ব্যাকেন্ড স্ট্যাটাস:', data))
//       .catch(error => console.error('ব্যাকেন্ড এরর:', error));
//   }, []);

//   useEffect(() => {
   
//     setProgress(10);
    
//     const timer1 = setTimeout(() => setProgress(60), 300);
//     const timer2 = setTimeout(() => setProgress(80), 600);
//     const timer3 = setTimeout(() => setProgress(100), 1000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//       setProgress(0);
//     };
//   }, [location.pathname]);

//   return (
//     <>
//       <LoadingBar
//         color='#0078a8'
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//         height={3}
//         shadow={true}
//         containerStyle={{ zIndex: 9999 }}
//       />
//       <NavBar />
//       <Outlet />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AppWrapper />}>
//           {/* নেস্টেড রাউট হিসেবে মূল কম্পোনেন্টগুলো */}
//           <Route index element={<About />} />
//           <Route path="news" element={<NewsPage />} />
//           <Route path="clubs" element={<ClubSection />} />
//           <Route path="events" element={<EventSection />} />
//           <Route path="team" element={<TeamPage />} />
//         </Route>
        
//         {/* অথেন্টিকেশন রাউট */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;