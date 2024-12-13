import React from "react";
import "./App.css"; 

const WhyChooseUs = () => {
  const services = [
    {
      title: "Live Sessions",
      description: "Participate in live sessions with experts, gaining real-time insights and answers to all your questions.",
      icon: "fas fa-video",
    },
    {
      title: "Live Projects",
      description: "Work on live projects, developing practical skills while tackling real-world challenges in IT and programming.",
      icon: "fas fa-project-diagram",
    },
    {
      title: "Best Service",
      description: "Our service ensures the highest standards of teaching, providing quality mentorship and support at every step.",
      icon: "fas fa-star",
    },
    {
      title: "New Skills Training",
      description: "Learn the latest, high-demand skills and stay ahead in the industry by acquiring practical, future-proof knowledge.",
      icon: "fas fa-graduation-cap",
    },
    {
      title: "New Technologies",
      description: "We cover the most relevant, emerging technologies, giving you the tools you need to excel in today’s tech-driven world.",
      icon: "fas fa-cogs",
    },
    {
      title: "Industry Certification",
      description: "Get certified by industry leaders, showcasing your expertise and increasing your chances of landing your ideal job.",
      icon: "fas fa-certificate",
    },
  ];

  return (
    <div className="y-us-section">
      <div className="container">
        <div className="y-us-head">
          <h2 className="animate__animated animate__fadeInDown">Why Choose Us ?</h2>
          <p className="animate__animated animate__fadeInUp">
            Catalyst Programmers offers cutting-edge online courses designed to help you excel in the ever-changing tech industry.
          </p>
          <span className="y-us-title-border"></span>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="service-box animate__animated animate__fadeIn">
                <div className="iconset">
                  <i className={`${service.icon} icon`}></i>
                </div>
                <div className="y-us-content">
                  <h4 className="y-us-title">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
