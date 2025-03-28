import React from "react";
import "./NewsPage.css";
import inoVative from './photos/art1.jpg';
import Art from './photos/art2.jpg';
import Cultral from './photos/art3.jpg';
import Tech from './photos/art4.jpg';
import Rashme from './photos/art5.jpg';
import PhotoGraphy from './photos/art6.jpg';
import no1 from './photos/NO1.jpg';
import no2 from './photos/NO2.jpg';
import no3 from './photos/NO3.jpg';



const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Shades of winter: Art exhibition by Rongmilant",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "Rongmilanti",
      content: "The air at Cooch Behar Government Engineering College (CGEC) buzzed with excitement on November 27th..............",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: inoVative 
    },
    {
      id: 2,
      title: "Art exhibition by Rongmilanti",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "Rongmilanti",
      content: "The exhibition featured a variety of artworks.........",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: Art 
    },
    {
      id: 3,
      title: "Winter Capture Competition",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "Capture Crew",
      content: "The Winter Capture Competition organized by Capture Crew.........",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: Cultral 
    },
    {
      id: 4,
      title: "Robotics Boot Camp 2024: A Journey into Innovation...",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "TECHNOLOGY",
      content:"",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: Tech 
    },
    {
      id: 5,
      title: "Rashmela – A Grand Cultural Festival",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "ARTS AND CULTURE",
      content:"",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: Rashme 
    },
    {
      id: 6,
      title: "Vibrant Day QuizIgnites Minds at CGEC",
      date: "BY cgec times FEBRUARY 4,2025",
      category: "PHOTOGRAPHY",
      content: "The air buzzed with excitement on December 14th as Quilaxy CGEC............",
      newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
      image: PhotoGraphy 
    },
    {
        id: 7,
        title: "CGEC Vs MJNMCH: An enticing football match",
        date: "BY cgec times FEBRUARY 4,2025",
        category: "PHOTOGRAPHY",
        content: " friendly inter-college football match was held...........",
        newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
        image: no1
      },
      {
        id: 8,
        title: " Rashmela – A Grand Cultural Festival",
        date: "BY cgec times FEBRUARY 4,2025",
        category: "PHOTOGRAPHY",
        content: "",
        newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
        image: no2 
      },
      {
        id: 9,
        title: "Vibrant Day Quiz Ignites Minds at CGEC...",
        date: "BY cgec times FEBRUARY 4,2025",
        category: "PHOTOGRAPHY",
        content: "The Winter Capture Competition organized by Capture Crew...",
        newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
        image: no3 
      },
      {
        id: 10,
        title: "Vibrant Day Quiz Ignites Minds at CGEC...",
        date: "BY cgec times FEBRUARY 4,2025",
        category: "PHOTOGRAPHY",
        content: "The Winter Capture Competition organized by Capture Crew...",
        newsUrl:'https://www.facebook.com/people/The-CGEC-TIMES/100088137340330/',
        image: no3 
      },
  ];

  return (
    <>
    <div className="news-container">
      <div className="news-header">
        <h2 className="section-title">LATEST NEWS</h2>
      </div>
      
      <div className="news-trending "style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <span className="trending-label">-: TRENDING :-</span>
      </div>
      
      <div className="row"> 
        {newsItems.map((item) => (
          <div className="col-md-4" key={item.id}> 
            <div className="news-card my-2 mx-1">
              <div className="card-image-container">
                <img 
                  src={item.image} 
                  alt={item.title?.slice(0, 45) || "No Image Description"} 
                  className="card-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
                  }}
                />
              </div>
              <div className="card-content-wrapper">
                <div className="card-header">
                  <span className="card-category">
                    {item.category?.slice(0, 20) || "No Category"}
                  </span>
                  <span className="card-date">
                    {item.date?.slice(0, 29) || "No Date"}
                  </span>
                </div>
                <h3 className="card-title">
                {(!item.title || item.title.trim() === "") ? (
                  <p className="card-content text-muted">No Title</p>
                ) : (
                  <p className="card-content">
                    {item.title.slice(0, 33)}
                    {item.title.length > 33 && "..."}
                  </p>
                )}
                </h3>
                {(!item.content || item.content.trim() === "") ? (
                  <p className="card-content text-muted">No Content Available</p>
                ) : (
                  <p className="card-content">
                    {item.content.slice(0, 30)}
                    {item.content.length > 30 && "..."}
                  </p>
                )}
                <a
              rel="noreferrer"
              href={item.newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark my-2"
            >
              Read more
            </a>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
    <div className="margin"></div>
    </>
  );
}; 

export default NewsPage;


