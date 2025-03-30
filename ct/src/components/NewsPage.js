import React from "react";
import "./NewsPage.css";



const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Boithok workshop by Creative Pens ",
      date: "BY cgec times 28th February, 2025",
      category: "Creative Pens",
      content: "Creative Pens, the college's literary club successfully conducted a writing and recitation workshop on 28th February, 2025. Perfectly titled Boithok, the event highlighted our student body's literary zeal. The stage, bathed in warm, inviting light, became a platform for insightful observations and the sheer beauty of language.",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/creativPen.jpg'),
    },
    {
      id: 2,
      title: "Bharate chai: A memorable anniversary for Pratibimba Theatre Club ",
      date: "BY cgec times  4th March, 2025",
      category: "Pratibimba Theatre ",
      content: "Marking another year of enriching the college's cultural landscape, Pratibimba Theatre Club commemorated its anniversary with a powerful and moving production of a play, Bharate Chai on 4th March, 2025, leaving the audience spellbound. The drama, which marked the 5th anniversary of the club, drew a huge audience from every year and department. With this event, the club stepped into its 6th phase, with the theme----- comic and truth. The evening, a testament to dedication and passion, proved to be an unforgettable experience for the packed audience. Bharate Chai centered around a woman who wants to give a room in her house on rent. She receives multiple people, only to find them imperfect and troublesome as tenants.",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/pratibimba.jpg'),
    },
    {
      id: 3,
      title: "Campus coders unite in  ScriptSphere : Doubthub's JavaScript bootcamp! ",
      date: "BY cgec times 11th March, 2025",
      category: "Doubthub",
      content: "With the demand for JavaScript developers soaring, the CGEC Doubthub took a proactive step, hosting a specialized bootcamp, providing vital skills to the students. ScriptSphere, the JavaScript Bootcamp, brought together the coders of the college, from 1st to 11th March, 2025. For many students, JavaScript was a daunting concept, a language lurking behind the sleek interfaces of modern websites.",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/doubtHub.jpg'),
    },
    {
      id: 4,
      title: "An Insightful Session on Frontend Development with Debashis Debnath",
      date: "BY cgec times  16th March, 2025",
      category: "TECHNOLOGY",
      content:"On March 16th, Sunday, at 7:00 PM, a highly engaging Google Meet session was conducted featuring Debashis Debnath, an esteemed alumnus of CGEC (CSE Batch 2016-20) and currently SDE-II at American Express. The session provided students with a golden opportunity to explore the dynamic field of frontend development and gain industry insights from an experienced professional.",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/doubtHub.jpg'),
    },
    {
      id: 5,
      title: "Jamming Session at CGEC – A Musical Escape",
      date: "BY cgec times 7th march, 2025",
      category: "Sports",
      content:"On March 7th, CGEC witnessed yet another unforgettable jamming session, a celebration of music, unity, and pure joy. The event brought together students from all backgrounds, whether they played an instrument, sang, or simply appreciated the magic of music.",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/mel.jpg'),
    },
    {
      id: 6,
      title: "The sound of campus: Guitar session by Melodies of CGEC ",
      date: "BY cgec times February 27, 2025",
      category: "Melodies ",
      content: "The air buzzed with excitement on December 14th as Quilaxy CGEC............",
      newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
      image: require('./NewsPhotos/march/mel.jpg'),
    },
    {
        id: 7,
        title: "SMASH 2.0 – CGEC Sports Club’s Thrilling Badminton Tournament",
        date: "BY cgec times February 25th and 26th,2025",
        category: "Sports",
        content: " The CGEC Sports Club successfully organized SMASH 2.0, an exhilarating badminton tournament held on February 25th and 26th, bringing together students from 1st year to 4th year for an intense competition filled with passion, skill, and sportsmanship. ",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/badminton.jpg'),
      },
      {
        id: 8,
        title: " La Reconquista de Gol 2025: A Thrilling Battle for Football Supremacy",
        date: "BY cgec times 2025",
        category: "Sports",
        content: "The La Reconquista de Gol 2025 football tournament at CGEC was an electrifying spectacle that brought together passionate players and enthusiastic supporters for an unforgettable competition. With four teams—The Unbeatables, Thunderstorms, Goated XI, and Raging Bulls—battling for the championship, the tournament was a thrilling showcase of skill, strategy, and determination.",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/football.jpg'),
      },
      {
        id: 9,
        title: "CGEC vs. JGEC: A Fierce Football Battle",
        date: "BY cgec times 2025",
        category: "Sports",
        content: "In an exhilarating face-off between CGEC and JGEC, the football match was nothing short of a thrilling spectacle. Both teams entered the field with high spirits, determined to claim victory in this much-anticipated showdown. The match saw CGEC putting up a valiant fight, displaying remarkable teamwork, resilience, and skill. However, despite their relentless efforts, they fell short, securing the position of runners-up against a formidable JGEC squad.",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/jgecVScgec.jpg'),
      },
      {
        id: 10,
        title: "BYTEBURST 2025 ",
        date: "BY cgec times  8th and 9th of March,2025",
        category: "Techo-nicks",
        content: "The Grand Tech-Fest of Cooch Behar Government Engineering College BYTEBURST, the much-anticipated annual tech-fest of Cooch Behar Government Engineering College, took place on the 8th and 9th of March, bringing together innovation, creativity, and technical prowess under one roof. As the name suggests, every byte of the college—students from all academic years—came together to burst into an electrifying display of talent across various engineering disciplines. This grand event served as a vibrant platform to exhibit the true craftsmanship, knowledge, and ingenuity of future engineers through a multitude of exciting competitions and exhibitions.",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/BYTEBURST .jpg'),
      },
      {
        id: 11,
        title: "Capturing life: Rongmilanti's Live figure sketch competition ",
        date: "BY cgec times  12th March, 2025",
        category: "Rongmilanti",
        content: "The Rongmilanti Art Club plays a pivotal role in fostering creativity and artistic expression among the students of the college. Recently, the club organised a Live Figure Sketch competition. The air in the college premises crackled with a different kind of energy on 12th March, 2025. A testament to the campus's creative spirit and unwavering commitment, the long-awaited competition turned a simple classroom into a lively studio. The competition offered a unique opportunity for aspiring and seasoned artists alike to test their skills and capture the human form in real-time. It was divided into two levels ------ basic and advance.",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/sketch.jpg'),
      },
      {
        id: 12,
        title: "Rhymes and Reasons: Creative Pens spreads spring cheer with donation ",
        date: "BY cgec times  14th March, 2025",
        category: "Creative Pens",
        content: "Basanta Utsav, or Spring Festival, is a time of joy and celebration, marking the arrival of new beginnings. The vibrant hues of spring were further enriched by the generosity of the Creative Pens Club. On 14th March, 2025, the club presented Nirashroy nari o shishu sebabhavan located at Chakir More with a donation, spreading warmth and support beyond the college gates. The Creative Pens, true to its ethos of creativity and community engagement, translated its values into a tangible act of service. Understanding the importance of sharing the joy of the season, the club members initiated a drive collecting money from students. ",
        newsUrl:'https://satya-dr.github.io/CGEC-TIMES/mainWeb/comingSoon/index.html',
        image: require('./NewsPhotos/march/Rhymes.jpg'),
      },
  ];

  return (
    <>
    <div className="news-container">
      <div className="news-header">
        <h2 className="section-title">LATEST NEWS</h2>
      </div>
      
      <div className="news-trending "style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <span className="trending-label"><i class="fas fa-star" style={{color:'#17003a'}}></i> TRENDING <i class="fas fa-star"style={{color:'#17003a'}}></i></span>
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
                    {item.category?.slice(0, 25) || "No Category"}
                  </span>
                  <span className="card-date">
                    {item.date?.slice(0, 49) || "No Date"}
                  </span>
                </div>
                <h3 className="card-title">
                {(!item.title || item.title.trim() === "") ? (
                  <p className="card-content text-muted">No Title</p>
                ) : (
                  <p className="card-content">
                    {item.title.slice(0, 50)}
                    {item.title.length > 50 && "..."}
                  </p>
                )}
                </h3>
                {(!item.content || item.content.trim() === "") ? (
                  <p className="card-content text-muted">No Content Available</p>
                ) : (
                  <p className="card-content">
                    {item.content.slice(0, 60)}
                    {item.content.length > 60 && "..."}
                  </p>
                )}
                <a
              rel="noopener noreferrer"
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


