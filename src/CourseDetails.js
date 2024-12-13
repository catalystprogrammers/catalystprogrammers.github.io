import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from './Data'; // Import course data
import './App.css';

const CourseDetails = () => {
  const { id } = useParams(); // Get the course ID from URL parameters
  const course = Data.find(course => course.id === parseInt(id)); // Find the course by ID

  if (!course) {
    return <div></div>; // If course not found, display a message
  }

  return (
    <div className="course-page">
      <div className="course-container">
        {/* Course Title */}
        <h1 className="course-heading text-center">{course.name}</h1>

        {/* Course Image and Price Section */}
        <div className="course-image-section text-center">
          <img src={course.image} alt={course.name} className="course-image" />
          <h3 className="course-price">₹ {course.price}</h3>
        </div>

        {/* Course Description and Details */}
        <div className="course-details-container">
          <div className="course-info-section">
            <h2 className="course-heading">Course Overview</h2>
            <h4 className="course-description mt-5">{course.description}</h4>
            <h3 className="newsletter-p mt-4">Course Description</h3>
            <p className="fs-5 mt-3">{course.detailedDescription}</p>

            {/* Dropdown for Course Options */}
            <div className="course-options">
              <div>
                <label className="fs-5 newsletter-p">Duration:</label>
                <select className="option">
                  <option>6 Weeks</option>
                  <option>8 Weeks</option>
                  <option>12 Weeks</option>
                  <option>6 months</option>
                  <option>9 months</option>
                  <option>12 months</option>
                </select>
              </div>
              <div>
                <label className="fs-5 newsletter-p">Mode:</label>
                <select className="option">
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>
            </div>

            {/* Enroll Now Button */}
            <Link to="https://forms.gle/EdmEmQanaF6TsQDZ9" style={{ textDecoration: "none", color: "white" }}>
              <button className="enroll-now-button ">Enroll Now</button>
            </Link>
          </div>
        </div>

        {/* Syllabus Section */}
        <div className="course-syllabus mt-5">
          <h1 className="course-heading mt-5  ">Syllabus Covered</h1>
          <div className="syllabus-content mt-5 ">
            <ul className="syllabus-list">
              {course.syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <img src="/images/syllabus.png" alt="Syllabus" className="syllabus-image " />
          </div>
        </div>


        {/* Back to Courses Link */}
        <Link to="/courses" className="go-back-to-courses">
          Go back to Courses →
        </Link>
        {/* <hr /> */}
        <hr style={{ width: "50vw" }} />

      </div>
    </div>
  );
};

export default CourseDetails;
