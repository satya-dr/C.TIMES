import React from 'react';
import About from './About';
import NewsPage from './NewsPage';
import ClubSection from './ClubSection';
import EventSection from './EventSection';
import TeamPage from './TeamPage';

const FullHomePage = () => {
  return (
    <>
      <About />
      <NewsPage />
      <ClubSection />
      <EventSection />
      <TeamPage />
    </>
  );
};

export default FullHomePage;