// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Explore.css';
import dsaImage from '../../assets/dsa.jpg';
import jsImage from '../../assets/JavaScript-logo.png';
import sqlImage from '../../assets/sql.png';
import javaImage from '../../assets/java.jpeg';
import cImage from '../../assets/c++.png';

const Explore = () => {
  const courses = [
    { title: 'DSA', image: dsaImage },
    { title: 'JavaScript', image: jsImage },
    { title: 'SQL', image: sqlImage },
    { title: 'Java', image: javaImage },
    { title: 'C++', image: cImage },
  ];

  return (
    <div className="explore-container">
      <h2>LeetCode Explore</h2>
      <div className="course-cards">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
