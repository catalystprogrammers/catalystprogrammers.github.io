import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const blogData = [
  {
    id: 1,
    title: 'Computer Science Basics',
    description: 'An introduction to the foundational concepts of computer science, including algorithms, data structures, and more.',
    image: '/images/blog1.jpg', // Ensure this is in the public folder
    date: 'Oct 2, 2024',
    link: 'https://lyfofvipin.github.io/lcsbasics'
  },
  {
    id: 2,
    title: 'Slices In Go Lang',
    description: 'Learn about slices in Go, which are more powerful and flexible than arrays.',
    image: '/images/blog2.jpg', // Ensure this is in the public folder
    date: 'Sep 28, 2024',
    link: 'https://lyfofvipin.github.io/slices_in_go_lang'
  },
  {
    id: 3,
    title: 'Arrays In Go Lang',
    description: 'A deep dive into arrays in Go, including how they work and when to use them.',
    image: '/images/blog3.jpg', // Ensure this is in the public folder
    date: 'Sep 7, 2024',
    link: 'https://lyfofvipin.github.io/array_in_golang'
  },
  {
    id: 4,
    title: 'Strings In Go Lang',
    description: 'Master string manipulation in Go, understanding string methods and conversions.',
    image: '/images/blog4.jpg', // Ensure this is in the public folder
    date: 'Aug 23, 2024',
    link: 'https://lyfofvipin.github.io/string_in_golang-copy'
  },
  {
    id: 5,
    title: 'Loop In Go Lang',
    description: 'An in-depth look at loops in Go, including `for` loops and how they differ from other languages.',
    image: '/images/blog5.jpg', // Ensure this is in the public folder
    date: 'Aug 23, 2024',
    link: 'https://lyfofvipin.github.io/loop_in_go_lang'
  },
  {
    id: 6,
    title: 'Introduction to Switch Case In Go Lang',
    description: 'A beginner-friendly guide to using switch case statements in Go for conditional branching.',
    image: '/images/blog6.jpg', // Ensure this is in the public folder
    date: 'Aug 23, 2024',
    link: 'https://lyfofvipin.github.io/Introduction_to_switch_case_in_golang'
  },
  {
    id: 7,
    title: 'Functions in C programming',
    description: 'A beginner-friendly guide to using switch case statements in Go for conditional branching.',
    image: '/images/blog7.jpg', // Ensure this is in the public folder
    date: 'Aug 26, 2024',
    link: 'https://lyfofvipin.github.io/function_with_strings_in_c'
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h2 className="blog-title">Latest Blog Posts</h2>
      <div className="blog-cards-container">
        {blogData.map((post) => (
          <Link to={post.link} key={post.id} className="blog-card-link">
            <div className="blog-card">
              <img
                src={post.image} 
                alt={post.title}
                className="blog-card-image" 
              />
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-description">{post.description}</p>
                <span className="blog-card-date">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
      <br />
      <hr />
    </div>
  );
};

export default BlogPage;
