// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HomePage.css";
import crashCourse from "../../assets/crashCourse.jpeg";
import crashCourse1 from "../../assets/crashCource1.png";

const HomePage = () => {
  return (
    <>
      <div className="greet">
        <h1>Welcome to PeetCode</h1>
        <p>Improve your coding skills and prepare for technical interviews.</p>
      </div>
      <div className="home-container">
        <div className="left-section">
          <ul>
            <li className="section-1">
              <strong>Featured Coding Challenges:</strong>
              <ul>
                <li>
                  Display a selection of coding challenges covering various
                  topics such as algorithms, data structures, databases, and
                  more.
                </li>
                <li>
                  Include a brief description of each challenge and its
                  difficulty level.
                </li>
                <li>
                  Provide a button that takes users directly to the challenge.
                </li>
              </ul>
            </li>
            <li className="section-1">
              <strong>Top Interview Questions:</strong>
              <ul>
                <li>
                  Curate a list of commonly asked interview questions from
                  popular tech companies.
                </li>
                <li>Offer solutions and explanations for each question.</li>
                <li>
                  Highlight the importance of practicing these questions for
                  interview preparation.
                </li>
              </ul>
            </li>
            <li className="section-1">
              <strong>Coding Competitions:</strong>
              <ul>
                <li>
                  Advertise upcoming or ongoing coding competitions on your
                  platform.
                </li>
                <li>
                  Provide details about the competition format, rules, and
                  prizes.
                </li>
                <li>
                  Allow users to register for competitions and participate.
                </li>
              </ul>
            </li>
            <li className="section-1">
              <strong>Coding Topic Explorer:</strong>
              <ul>
                <li>
                  Categorize coding challenges by topics such as arrays,
                  strings, linked lists, trees, dynamic programming, etc.
                </li>
                <li>
                  Create a user-friendly interface for users to explore
                  challenges based on their preferred topics.
                </li>
              </ul>
            </li>
            <li className="section-1">
              <strong>User Progress and Stats:</strong>
              <ul>
                <li>
                  Offer user profiles where users can track their coding
                  progress.
                </li>
                <li>
                  Show statistics like solved problems, coding streaks, and
                  accuracy.
                </li>
                <li>Provide insights into areas where users can improve.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="right-section">
          <img
            className="interview"
            src={crashCourse}
            alt="interview"
          />
          <img
            className="interview"
            src={crashCourse1}
            alt="interview"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
