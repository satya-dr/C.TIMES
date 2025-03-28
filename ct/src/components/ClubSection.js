import React from "react";
import './ClubSection.css'; 
const ClubsSection = () => {
  const clubs = [
    {
      id: 1,
      name: "TECH-O-NICKS",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Empowering students with technology, innovation, and collaboration. Join us to explore coding, robotics, AI, and more!",
    },
    {
      id: 2,
      name: "Debate Club",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Engage in thought-provoking discussions and share your argumentation skills. Join us to debate, learn, and lead!"
    },
    {
      id: 3,
      name: "Quilaxy CGEC",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Challenge your knowledge and sharpen your mind with exciting patterns. Join us for fun, learning, and competition!"
    },
    {
      id: 4,
      name: "Pop Talks",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Inspire and be inspired. Join us to build confidence, master public speaking, and share powerful ideas."
    },
    {
      id: 5,
      name: "Hiring Nirvana",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Move to the rhythm and express yourself through dance. Join us to learn, perform, and celebrate the art of movement."
    },
    {
      id: 6,
      name: "Capture Crew",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Capture moments, tell stories, and explore the art of photography. Join us to learn, create, and share your vision!"
    },
    {
      id: 7,
      name: "Creative Pens",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Express your thoughts through poetry and storytelling. Join us to write, share, and inspire with words!"
    },
    {
      id: 8,
      name: "Sports Club",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Stay active, build teamwork, and embrace the spirit of sports! Join us for training, competitions, and fitness fun."
    },
    {
      id: 9,
      name: "Rongmilanti",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Unleash your creativity through painting, sketching, and digital art. Join us to explore, create, and inspire!"
    },
    {
      id: 10,
      name: "Pratikriya Theatrical Group",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Step into the spotlight and bring stories to life! Join us for acting, storytelling, and plays."
    },
    {
      id: 11,
      name: "Gamer's Creed",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Level up your skills and connect with fellow gamers! Join us for casual play, competitive tournaments, and game development."
    },
    {
      id: 12,
      name: "Melodies of CGEC",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Express yourself through music and rhythm. Join us to sing, play instruments, and create harmonies."
    },{
      id: 13,
      name: "Melodies of CGEC",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      description: "Express yourself through music and rhythm. Join us to sing, play instruments, and create harmonies."
    }
  ];

  return (
    <>
    <div className="clubs-container">
      <h2 className="section-title">OUR CLUBS</h2>
      
      <div className="clubs-grid">
        {clubs.map((club) => (
          <div key={club.id} className="club-card">
            <h3 className="club-name"><a
              rel="noreferrer"
              href={club.newsUrl}
              target="_blank"
              style={{textDecoration:'none'}}
            >
              {club.name}
            </a>
            </h3>
            <p className="club-description">"{club.description}"</p>
          </div>
        ))}
      </div>
    </div>
    <div className="margin"></div>
    </>
  );
};

export default ClubsSection;