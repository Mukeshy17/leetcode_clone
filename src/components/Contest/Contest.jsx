// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Contest.css";
import leetcodeLogo from "../../assets/leetcodeLogo.png";

const Contest = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [acceptanceRate, setAcceptanceRate] = useState("");
  const [difficulty, setDifficulty] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const problem = { title, acceptanceRate, description,difficulty };
    fetch("http://localhost:8089/leetcode/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(problem),
    }).then(() => {
      console.log("New Problem Added");
    });
  };

  return (
    <div id="signup" className="flex-col">
      <div className="signup-form">
        <img className="logo1" src={leetcodeLogo} alt="logo" />

        <h3>Add Problem</h3>
        <div className="subform">
          <label htmlFor="title">Problem Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            value={title}
            placeholder="Problem Title"
          />
        </div>

        <div className="subform">
          <label htmlFor="acceptance">Problem Acceptance</label>
          <input
            onChange={(e) => setAcceptanceRate(e.target.value)}
            type="text"
            id="acceptance"
            name="acceptance"
            placeholder="Problem Acceptance"
            value={acceptanceRate}
          />
        </div>

        <div className="subform">
          <label htmlFor="difficulty">Problem Difficulty</label>
          <select
            onChange={(e) => setDifficulty(e.target.value)}
            id="difficulty"
            name="difficulty"
            value={difficulty}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="subform">
          <label htmlFor="description">Problem Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            placeholder="Problem Description"
            value={description}
          />
        </div>

        <button onClick={handleSubmit} className="button" type="submit" id="test">
          Add
        </button>

        <div className="forget-pass"></div>
      </div>
    </div>
  );
};

export default Contest;
