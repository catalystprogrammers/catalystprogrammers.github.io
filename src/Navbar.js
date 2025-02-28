import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneVolume, FaHome, FaBlog, FaBookOpen, FaChalkboardTeacher, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/phone.png`} width={"20px"} />
            <a href="tel:+918503967987" style={{ textDecoration: "none", color: "white" }}>
              +91-8503967987
            </a>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} width={"15px"} />
            <a href="mailto:catalystprogrammers@gmail.com" className="me-5" style={{ textDecoration: "none", color: "white" }}>
              catalystprogrammers@gmail.com
            </a>
          </div>
          <span>
            <Link
              to="https://forms.gle/EdmEmQanaF6TsQDZ9"
              style={{ textDecoration: "none", color: "white" }} s
            >
              Register Now
            </Link>
          </span>
        </div>
      </div>


      {/* Navbar */}
      <nav className="navbar sticky-top">
        <div className="logo">
          <img className="navlogoimg" src={`${process.env.PUBLIC_URL}/images/cplogo.png`} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/Courses" onClick={closeMenu}>
                <FaBookOpen /> Courses
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={closeMenu}>
                <FaPhoneVolume /> Contact
              </Link>
            </li>
            <li>
              <Link to="/Instructors" onClick={closeMenu}>
                <FaChalkboardTeacher /> Instructors
              </Link>
            </li>
            <li>
              <Link to="/BlogPage" onClick={closeMenu}>
                <FaBlog /> Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes style={{ fontSize: "24px", color: "orangered" }} />
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
