import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Data from './Data';
import './App.css';

const Courses = () => {
  // Tilt effect logic
  const handleMouseMove = (e, id) => {
    const card = document.getElementById(id);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Adjust for tilt strength
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (id) => {
    const card = document.getElementById(id);
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="courses-page" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <h1 className="text-center mt-5 mb-5 courseheading ">
        <img className='courseimg' src={`${process.env.PUBLIC_URL}/images/courseicon.png`} alt="" />
        "Make it work, make it right, make it fast. – Kent Beck"
        <h1 className='newsletter-p fs-1 mt-5 course-h1'> EXPLORE OUR COURSES </h1>
      </h1>

      <div className="courses-cards mt-5">
        {Data.map((item) => (
          <div
            key={item.id}
            id={`card-${item.id}`}
            className="courses-product-card"
            onMouseMove={(e) => handleMouseMove(e, `card-${item.id}`)}
            onMouseLeave={() => handleMouseLeave(`card-${item.id}`)}
          >
            <div className="product-image-container">
              <img
                src={item.image}
                alt={item.name}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h4 className="product-title mt-3">{item.name}</h4>
              <p className="product-description">{item.description}</p>

              {/* Link to CourseDetails page, passing the course ID */}
              <Link to={`/coursedetails/${item.id}`} className="viewdetails-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Back to Courses Link */}
      <Link to="/" className="go-back-to-courses">
        Go back to Home →
      </Link>

      <br />
      <hr style={{ width: "50vw" }} />

    </div>
  );
};

export default Courses;
