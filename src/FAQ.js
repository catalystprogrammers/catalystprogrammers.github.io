import React, { useState } from "react";
import './App.css'
function FAQ() {
  // State to track which FAQ item is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data
  const faqData = [
    {
      question: "What is the duration of each course?",
      answer:
        "The duration of each course varies depending on the program, but most courses last between 4 to 12 weeks."
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll in any course by visiting the Home page and clicking on the 'Register Now' button."
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes, our courses are self-paced with access to study materials, videos, and assignments that you can complete at your own speed."
    },
    {
      question: "What certifications will I receive after completing a course?",
      answer:
        "After completing a course, you'll receive a certification of completion, which is recognized by industry professionals."
    }
  ];

  // Toggle active index (to show/hide answers)
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
