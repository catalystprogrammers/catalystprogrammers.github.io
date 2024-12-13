import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [form, setForm] = useState({});
  const [allData, setAllData] = useState([]);

  const changeHandle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Message sent by: ${form.email}`);
    // Handle form submission logic here
  };

  return (
    <>
      <div className="contact-form-container">
        {/* Contact Info Card with Video */}
        <div className="contact-info-card">
          <div className="contact-video-container">
            <video className="contact-video" autoPlay loop muted>
              <source src="/images/contactvedeo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p className="mt-3 text-center">We’d love to hear from you. Please fill out the form below!</p>
          <form onSubmit={handleSubmit}>
            {/* Name Input Field */}
            <div className="contact-input-group">
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={changeHandle}
                required
              />
            </div>

            {/* Email Input Field */}
            <div className="contact-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={changeHandle}
                required
              />
            </div>

            {/* Message Input Field */}
            <div className="contact-input-group">
              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={changeHandle}
                required
              />
            </div>

            {/* Contact Button */}
            <button className="contact-submit-btn mt-5" type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="company-info-box">
        <div className="company-info-content">
          {/* Image Section */}
          <img src="/images/building.png" alt="Company Building" className="company-image" />

          {/* Text Section */}
          <div className="company-text">
            <h3>CATALYST PROGRAMMERS</h3>
            <p className="fs-4 newsletter-p mb-5">
              We are here to assist you! Feel free to reach out to us.
            </p>
            <div className="contact-info">
              <p><strong className="newsletter-p">Email:</strong> catalystprogrammers@gmail.com</p>
              <p><strong className="newsletter-p">Address:</strong> 56/80 Rajat Path Mansarovar, Sector 5 Mansarovar</p>
              <p><strong className="newsletter-p">Phone:</strong> +91-8503967987</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "50vw" }} />


    </>
  );
};

export default Contact;
