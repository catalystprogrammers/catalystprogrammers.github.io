import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules"; // Correct module imports
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import './App.css';  // Import the CSS file

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Aishwarya Bachchani",
      feedback: "Catalyst's hands-on projects were the highlight for me. They gave me practical experience and boosted my confidence in coding.",
      image: "/images/students/s1.jpg",
    },
    {
      name: "Gaurav singh solanki",
      feedback: "As a beginner, I found the courses perfect for understanding programming basics. The step-by-step approach really worked for me.",
      image: "/images/students/s2.jpg",
    },
    {
      name: "Rajat Mishra",
      feedback: "The support from the mentors was amazing! They were always available to clear my doubts, which made the learning process smooth.",
      image: "/images/students/s3.jpg",
    },
    {
      name: "Anchal Chaudhary",
      feedback: "The projects were challenging but rewarding. They helped me understand how to apply concepts in real-world scenarios.",
      image: "/images/students/s4.jpg", // Replace with actual image URLs
    },
    {
      name: "Yash Sharma",
      feedback: "The pricing is very affordable for the value provided. I was able to land my first internship after completing the course.",
      image: "/images/students/s5.jpg",
    },
    {
      name: "Kishan Jangid",
      feedback: "The course content was detailed and well-explained. I loved how the instructors made the lessons engaging and easy to follow.",
      image: "/images/students/s6.jpg",
    },
  ];

  return (

    <div className="testimonial-container ">
      <h1 className="newsletter-p mt-5 mb-5 text-center"><strong>Discover the Stories Behind Our Success</strong> — Hear from Our Students!</h1>
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination]}
        className="testimonialSwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={testimonial.image} alt={`${testimonial.name}'s picture`} />
              <p>{testimonial.feedback}</p>
              <h3>{testimonial.name}</h3>
              <br />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr style={{ width: "50vw" }} />

    </div>

  );
};

export default TestimonialSlider;
