// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import React Router
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Home from './Home';  // Home component import
import Footer from './Footer';
import Courses from './Courses';
import Contact from './Contact';
import Instructors from './Instructors';
import BlogPage from './BlogPage';
import CourseDetails from './CourseDetails';
import InstructorDetailPage from './InstructorDetailPage';
import ScrollToTop from './ScrollToTop';  // Import ScrollToTop component

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop /> {/* Add ScrollToTop here */}

      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/Courses" element={<Courses />} />  {/* courses route */}
        <Route path='/Contact' element={<Contact />} />
        <Route path="/Instructors" element={<Instructors />} />
        <Route path="/instructor/:id" element={<InstructorDetailPage />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/coursedetails/:id" element={<CourseDetails />} /> {/* CourseDetails route */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
