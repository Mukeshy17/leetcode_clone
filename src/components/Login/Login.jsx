// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Login.css";
import { NavLink,  } from "react-router-dom";
import leetcodeLogo from "../../assets/leetcodeLogo.png";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // Store the token in local storage
        console.log("Login successful");
      } else {
       // handle login error
        const data = await response.json();
        if (response.status === 401) {
          alert("Invalid credentials. Please check your email and password.");
        } else {
          console.error(data.message);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div id="login" className="flex-col">
      <div className="signup-form">
        <img
          className="logo1"
          src={leetcodeLogo}
          alt="logo"
        />

        <h3>Welcome Back</h3>
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
        <NavLink to='/'> <button className="button" type="submit" id="test" onClick={handleLogin}>
          LOGIN
        </button></NavLink>
        
        <div className="forget-pass-l">
          <p>Forget Password?</p>
          <NavLink to='/signup'><p>Signup here</p></NavLink>
        </div>
        
      </div>
      </div>
  );
};

export default Login;
