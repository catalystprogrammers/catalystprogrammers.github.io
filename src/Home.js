import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import TestimonialSlider from "./TestimonialSlider";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import "./App.css";

function Home() {
  return (
    <div className="home">
      {/* Carousel Section */}
      <Carousel className="carousel-section">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/1.png`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/2.png`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/images/3.png`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* About Us Section */}
      <div className="about-section" id="about-us">
        <h2 className="section-heading text-center mt-3">Discover Catalyst Programmers</h2>

        <div className="about-container">
          {/* First Row: Text on Left, Image on Right */}
          <div className="about-row">
            <div className="about-text">
              <p className="about-p">
                At <strong>Catalyst Programmers</strong>, we’re not just about coding – we’re about crafting futures.
                With top-notch programming courses led by industry experts, we help you thrive in the ever-evolving tech world.
              </p>
            </div>
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/images/h2.png`} alt="Learning at Catalyst" />
            </div>
          </div>

          {/* Second Row: Text on Right, Image on Left */}
          <div className="about-row reverse">
            <div className="about-text">
              <p className="about-p">
                Our vision is to empower every aspiring coder with cutting-edge programming skills and practical experience.
              </p>
            </div>
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/images/h3.png`} alt="Our Vision" />
            </div>
          </div>

          {/* New Row: Flexible Online Classes & Training Programs */}
          <div className="about-row">
            <div className="about-text">
              <p className="about-p">
                We offer flexible online classes that allow you to learn at your own pace, from anywhere in the world.
              </p>
            </div>
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/images/h4.png`} alt="Online Classes" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section-container">
        <h1 className="section-heading">
          Look at the <img src={`${process.env.PUBLIC_URL}/images/h1.png`} className="w-25 section-heading" alt="" /> We Have For You
        </h1>
        <div className="video-section mt-1">
          <img className="b1" src={`${process.env.PUBLIC_URL}/images/b1 (2).png`} alt="" />
          <video autoPlay loop muted className="video-bg">
            <source src={`${process.env.PUBLIC_URL}/images/vedeo.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img className="b2" src={`${process.env.PUBLIC_URL}/images/b2 (2).png`} alt="" />
        </div>
      </div>

      {/* Buttons */}
      <Link to="https://forms.gle/EdmEmQanaF6TsQDZ9">
        <button className="register-btn">Register Now !</button>
      </Link>
      <Link to="/Courses">
        <button className="register-btn mt-3">Explore Courses</button>
      </Link>

      {/* Components */}
      <WhyChooseUs />
      <FAQ />
      <TestimonialSlider />
    </div>
  );
}

export default Home;
