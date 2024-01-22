import { useEffect, useState } from "react";
import "./AllProblems.css"
import { Link } from "react-router-dom";


const AllProblemsPage = () => {

  const [problems, setProblems] = useState([]);
  const email = "Mukesh";

  // useEffect(() => {
  //   fetch('http://localhost:3000/problems', {
  //     method: "GET"
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
    
  //   .then(data => {
  //     console.log(data); // Check the received data
  //     setProblems(data.problems);
  //   })
  //   .catch(error => {
  //     console.error('Fetch error:', error);
  //   });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8089/leetcode/getAll") // Corrected URL and removed the extra comma
      .then((res) => res.json())
      .then((result) => {
        setProblems(result);
      });
  }, []);

  const handleDelete = (problemId) => {
    fetch(`http://localhost:8089/leetcode/delete/${problemId}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(`Student with ID ${problemId} deleted`);
        // After successfully deleting the student, you may want to update the list of students.
        // You can do this by making another fetch request or by modifying the state as appropriate.
      })
      .catch((error) => {
        console.error(`Error deleting student with ID ${problemId}:`, error);
      });
  };
  
  if(email){
    return (
      <div className="content">
        <h1>Welcome to the problem page</h1>
        <div className="column">
          <p className="id">ID</p>
          <p className="title1">Title</p>
          <p className="acceptance">Acceptance Rate</p>
          <p className="difficulty">Difficulty</p>
        </div>
        <div className="problem-cards">
        {problems.map((problem) => (
            <Link to={`/problems/${problem.id}`} key={problem.id}>
              <div className="column">
                <p className="id">{problem.id}</p>
                <p className="title">{problem.title}</p>
                <p className="acceptance">{problem.acceptanceRate}</p>
                <p className="difficulty" style={{
                  color: problem.difficulty === 'Easy' ? 'rgb(15, 234, 15)' : problem.difficulty === 'Medium' ? 'yellow' : 'red'
                }}>
                  {problem.difficulty}
                </p>
                <Link to={`/edit/${problem.id}`}><button className="edit">Edit</button></Link>
                <Link to={`/problemset/all/`}><button onClick={() => handleDelete(problem.id)} className="delete">delete</button></Link>
              </div>
            </Link>
                  
  
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="content">
      <h1>Welcome to the problem page</h1>
      <div className="column">
        <p className="id">ID</p>
        <p className="title">Title</p>
        <p className="acceptance">Acceptance Rate</p>
        <p className="difficulty">Difficulty</p>
      </div>
      <div className="problem-cards">
      {problems.map((problem) => (
          <Link to={`/problems/${problem.id}`} key={problem.id}>
            <div className="column">
              <p className="id">{problem.id}</p>
              <p className="title">{problem.title}</p>
              <p className="acceptance">{problem.acceptanceRate}</p>
              <p className="difficulty" style={{
                color: problem.difficulty === 'Easy' ? 'rgb(15, 234, 15)' : problem.difficulty === 'Medium' ? 'yellow' : 'red'
              }}>
                {problem.difficulty}
              </p>
            </div>
          </Link>
                

        ))}
      </div>
    </div>
  );
};

export default AllProblemsPage;

