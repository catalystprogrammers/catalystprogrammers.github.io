import React from 'react';
import './App.css'; // Importing the custom CSS file
import { Link } from "react-router-dom";

const Instructors = () => {
  // Instructor Data (JSON)
  const instructors = [
    {
      id: "1",
      name: "Bhaskar Yogi",
      designation: "Mern Stack Developer",
      image: "/images/bhaskarsir.jpg",
      description: "Meet Bhaskar Yogi, a masterful MERN stack developer with a wealth of experience in crafting dynamic applications and empowering aspiring developers. As an integral part of Catalyst Programmers, Bhaskar is on a mission to shape the future of web development by delivering top-notch training in JavaScript, React.js, Node.js, and Express.js. With his blend of technical expertise and a passion for teaching, Bhaskar inspires the next generation to turn their coding dreams into reality.",
      experience: "7 years"
    },
    {
      id: "2",
      name: "Jitin Goyal",
      designation: "Fullstack with JAVA or MERN Developer",
      image: "/images/jitinsir.jpg",
      description: "Meet Jitin Goyal, a highly skilled full-stack developer with extensive expertise in MERN stack, TypeScript, AWS, Golang, Java, React Js ,and Next.js. At Catalyst Programmers, Jitin is committed to educating the next generation of developers by providing comprehensive training in modern web technologies, cloud computing, and programming languages. With his deep knowledge and teaching acumen, he inspires learners to excel and thrive in the ever-evolving tech industry.",
      experience: "6 years"
    },
    {
      id: "3",
      name: "Kumar Vipin Yadav",
      designation: "Software Engineer",
      image: "/images/vipinsir.jpg",
      description: "Meet Kumar Vipin Yadav, a highly skilled professional with extensive expertise in Red Hat OpenStack, Red Hat OpenShift, Ansible, Jenkins, and Tekton. At Catalyst Programmers, Vipin is dedicated to training the next generation of developers by providing comprehensive guidance in Python, Flask, Django, Selenium, Cypress, Pytest, and Playwright. With his mastery of containers, Git, and GitHub, he equips learners with the tools and skills needed to excel in the ever-evolving tech industry.",
      experience: "7 years"
    }
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <h2 className="text-center mt-1 mb-5 inst-heading">
          <img className='courseimg ' src="/images/i2 (2).png" alt="" />

          &nbsp; &nbsp; &nbsp; &nbsp;"An instructor’s reward is the success of their students."
          <h1 className='newsletter-p fs-1 mt-3'>Meet our mentors: Guiding the way to your success!</h1>
        </h2>
        {instructors.map((instructor, index) => (
          <div className="col-lg-4 mb-4 " key={index}>
            <div
              className="card ml-3 mt-5"
              style={{ backgroundImage: `url(/images/i1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="card-body text-center">
                <div className="instructor-image mx-auto mb-3">
                  <img src={instructor.image} alt={instructor.name} className="rounded-circle" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                </div>
                <h5 className="card-title " style={{ color: "#004ab1" }}>{instructor.name}</h5>
                <h4 className="card-subtitle mb-2 " style={{ color: "orangered" }}>{instructor.designation}</h4>
                <p className="card-text">{instructor.description}</p>
                <p><strong className='newsletter-p'>Experience:</strong> {instructor.experience}</p>
                <Link to={`/instructor/${index + 1}`} ><button className="btn inst-btn mb-5">View More</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Icon Cards Section */}
      <div className="icons-section-container mt-5">
        <h1 className='text-center mt-5 mb-5 newsletter-p '>What’s in It for You? Discover the Advantages!</h1>
        <div className="icons-section mt-2">
          <div className="icon-card">
            <img src="/images/icons-i/1.png" alt="" />
            <p>Lifetime Access</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/2.png" alt="" />
            <p>24/7 Support</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/3.png" alt="" />
            <p>Expert Mentorship</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/4.png" alt="" />
            <p>Certification of Completion</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/5.png" alt="" />
            <p>Hands-on-Projects</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/6.png" alt="s" />
            <p>Flexible Schedule</p>
          </div>
          <div className="icon-card">
            <img src="/images/icons-i/7.png" alt="" />
            <p>Live Sessions</p>
          </div><br />
          <img src="/images/ibook.png" className='bookimg' alt="" />
        </div>
      </div>
      <hr style={{ width: "50vw" }} />

    </div>
  );
};

export default Instructors;
