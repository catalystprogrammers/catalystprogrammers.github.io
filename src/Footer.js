import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>

      <div className="footer-content">
        {/* Brand Description */}
        <div className="footer">

          <img className="footer-logo mb-1" src={`${process.env.PUBLIC_URL}/images/cplogo.png`} alt="Logo" />
        </div>
        <br />
        <h1 className="newsletter-p">
          "Code like nobody’s watching. Join Catalyst Programmers for some serious fun!"
        </h1>
        <br />
        <br />

        {/* Footer Sections */}
        <div className="footer-sections mt-0">
          {/* Social Media Links */}
          <div className="footer-section social-media">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com/catalystprogrammers?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/catalystprogrammers/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/918503967987?text=Hello,%20I%20need%20more%20information" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.youtube.com/@lyfofvipin_tech" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          {/* Important Links */}
          <div className="footer-section important-links">
            <h2>Important Links</h2>
            <ul>
              {/* Link to the About Us section */}
              <li><a href="#about-us">About Us</a></li>
              {/* Links to different pages within the app */}

              <li><Link to="/Courses">Our Courses</Link></li>
              <li><Link to="/Instructors">Instructors</Link></li>
              <li><Link to="/BlogPage">Blogs</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h2>Newsletter</h2>
            <p className="newsletter-p">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <p className="courseheading fs-4 mt-5">&copy; Catalyst Programmers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
