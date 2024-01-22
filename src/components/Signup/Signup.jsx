import { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import leetcodeLogo from "../../assets/leetcodeLogo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8089/leetcode/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store the token in local storage
        console.log("Signup successful");
      } else {
        // Handle signup error
        const data = await response.json();
        if (response.status === 400 && data.message === 'Email already exists') {
          alert('Email already exists');
        } else {
          console.error(data.message);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  return (
    <div id="signup" className="flex-col">
      <div className="signup-form">
        <img
          className="logo1"
          src={leetcodeLogo}
          alt="logo"
        />

        <h3>Create Account</h3>
        <div className="subform">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Your Email"
          />
        </div>

        <div className="subform">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <NavLink to="/">
        <button className="button" type="submit" id="test" onClick={handleSignup}>
          SIGNUP
        </button>
        </NavLink>
       
        <div className="forget-pass">
          <NavLink to="/login">
            <p>Already have an account? Login here</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
