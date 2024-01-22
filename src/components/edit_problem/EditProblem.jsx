// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../Contest/Contest.css";
import leetcodeLogo from "../../assets/leetcodeLogo.png";
import { useParams } from "react-router-dom";

const EditProblem = () => {

  const { id } = useParams();
  const problemId = parseInt(id);

  const [problemTitle, setProblemTitle] = useState("");
  const [problemDesc, setProblemDesc] = useState("");
  const [problemAccep, setProblemAccep] = useState("");
  const [problemDiff, setProblemDiff] = useState("");
  const [problem, setProblem] = useState(null);


  useEffect(() => {
        // Fetch the student data using an API call
        fetch(`http://localhost:8089/leetcode/problem/${problemId}`)
            .then(response => response.json())
            .then(data => {
                setProblem(data);
                setProblemTitle(data.title);
                setProblemDesc(data.description);
                setProblemAccep(data.acceptanceRate);
                setProblemDiff(data.difficulty);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
  }, [problemId]);

  const handleUpdate = () => {
        // Construct the updated student object
        const updatedProblem = {
            id: problemId,
            title: problemTitle,
            description: problemDesc,
            acceptanceRate: problemAccep,
            difficulty: problemDiff
        };

        // Send a PUT request to update the student
        fetch(`http://localhost:8089/leetcode/update/${problemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProblem),
        })
            .then(response => {
                if (response.ok) {
                    // Handle success, e.g., redirect or display a success message
                    console.log(problem);
                    console.log('Problem updated successfully');
                } else {
                    // Handle errors, e.g., display an error message
                    console.error('Failed to update Problem');
                }
            })
            .catch(error => {
                console.error('Request error:', error);
            });
    };



  return (
    <div id="signup" className="flex-col">
      <div className="signup-form">
        <img className="logo1" src={leetcodeLogo} alt="logo" />

        <h3>Edit Problem</h3>
        <div className="subform">
          <label htmlFor="title">Problem Title</label>
          <input
            onChange={(e) => setProblemTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            value={problemTitle}
            placeholder="Problem Title"
          />
        </div>

        <div className="subform">
          <label htmlFor="acceptance">Problem Acceptance</label>
          <input
            onChange={(e) => setProblemAccep(e.target.value)}
            type="text"
            id="acceptance"
            name="acceptance"
            placeholder="Problem Acceptance"
            value={problemAccep}
          />
        </div>

        <div className="subform">
          <label htmlFor="difficulty">Problem Difficulty</label>
          <select
            onChange={(e) => setProblemDiff(e.target.value)}
            id="difficulty"
            name="difficulty"
            value={problemDiff}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="subform">
          <label htmlFor="description">Problem Description</label>
          <textarea
            onChange={(e) => setProblemDesc(e.target.value)}
            id="description"
            name="description"
            placeholder="Problem Description"
            value={problemDesc}
          />
        </div>

        <button onClick={handleUpdate} className="button" type="submit" id="test">
          Update
        </button>

        <div className="forget-pass"></div>
      </div>
    </div>
  );
};

export default EditProblem;
