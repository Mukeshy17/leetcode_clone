import { useEffect, useState } from "react";
import "./ProblemsPage.css";
import { useParams } from "react-router-dom";

const ProblemsPage = () => {
  const javaCode = `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
  const [text, setText] = useState(javaCode);
  const { id } = useParams();
  const problemId = parseInt(id);
  const [problem, setProblem] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch the problem data using an API call
  //   fetch(`http://localhost:3000/problems/${problemId}`, {
  //     method: "GET",
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log("Received data:", data); // Log the data received from the API
  //     // Check if data is an object
  //     if (typeof data === 'object' && data !== null) {
  //       console.log(data);
  //       setProblem(data.problem); // Set the problem object
  //     } else {
  //       console.error('Data received is not an object:', data);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Fetch error:', error);
  //   });
  // }, [problemId]);


  // useEffect(() => {
  //   // Fetch the problem data using an API call
  //   fetch(`http://localhost:8081/leetcode/problem/${problemId}`, {
  //     method: "GET",
  //   })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log("Received data:", data); // Log the data received from the API
  //     // Check if data is an object
  //     if (typeof data === 'object' && data !== null) {
  //       console.log(data);
  //       setProblem(data.problem); // Set the problem object
  //     } else {
  //       console.error('Data received is not an object:', data);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Fetch error:', error);
  //   });
  // }, [problemId]);


  useEffect(() => {
    fetch(`http://localhost:8089/leetcode/problem/${problemId}`,) // Corrected URL and removed the extra comma
      .then((res) => res.json())
      .then((result) => {
        setProblem(result);
      });
  }, []);
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/submission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({problemId, text }),
      });
      console.log(problemId);

      if (response.ok) {
        console.log("Code submitted successfully");
      } else {
        console.error("Code submission failed");
      }
    } catch (error) {
      console.error("Error submitting code:", error);
    }
  };
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  if (!problem) {
    return <div>Problem not found.{id}</div>;
  }
  return (
    <>
      <div className="content1">
        <div className="description">
          <h2>
            {problem.id} : {problem.title}
          </h2>
          <p className={problem.difficulty}>{problem.difficulty}</p>
          <p>{problem.description}</p>
          {/* {problem.examples.map((example, index) => (
            <div key={index}>
              <h3>Example {index + 1}:</h3>
              <p>Input: {JSON.stringify(example.input)}</p>
              <p>Output: {JSON.stringify(example.output)}</p>
              <p>Explanation: {example.explanation}</p>
            </div>
          ))} */}
          
            <div >
              <h3>Example 1:</h3>
              <p>Input: 1 2 3 4 5</p>
              <p>Output: 45</p>
              <p>Explanation: You have given an Array num</p>
            </div>
         
          <p>Acceptance Rate: {problem.acceptanceRate}</p>
        </div>
        <div className="codeditor">
        <form onSubmit={handleSubmit}>
          <textarea id="w3review" name="w3review" onChange={(e)=> setText(e.target.value)} value={text} rows="4" cols="50">
            Write your code here
          </textarea>
          <button type="submission">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProblemsPage;
