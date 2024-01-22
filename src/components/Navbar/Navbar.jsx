import { NavLink  } from "react-router-dom";
import leetcodeLogo from "../../assets/leetcodeLogo.png";

import "./Navbar.css";
// import { useEffect, useState } from "react";

const Navbar = () => {

  // const[userEmail,setUserEmail] = useState(null);

  // const navigate = useNavigate();
  

  
  // useEffect(() => {
  //   function callback2(data) {
  //     if (data.username) {
  //       setUserEmail(data.username);
  //     }
  //   }
  
  //   function callback1(res) {
  //     res.json().then(callback2);
  //   }
  
  //   fetch("http://localhost:3000/admin/me", {
  //     method: "GET",
  //     headers: {
  //       "Authorization": "Bearer " + localStorage.getItem("token")
  //     }
  //   }).then(callback1);
  // }, []); // This empty dependency array ensures that this effect runs only once
  
  // // Use another useEffect to log userEmail when it changes
  // useEffect(() => {
  //   // console.log(userEmail);
  // }, [userEmail]);
  

  // if(userEmail){
  //   return(
  //     <div id="navbar-main">
  //     <NavLink to="/">
  //       <div className="logo-box flex-row">
  //         <img
  //           className="logo"
  //           src={leetcodeLogo}
  //           alt="logo"
  //         />
  //         <p>LeetCode</p>
  //       </div>
  //     </NavLink>
  //     <div className="nav-options">
  //       <NavLink to="/explore">Explore</NavLink>
  //     </div>
  //     <div className="nav-options">
  //       <NavLink to="/problemset/all/">Problems</NavLink>
  //     </div>
  //     <div className="nav-options">
  //       <NavLink to="/addproblem">Contest</NavLink>
  //     </div>
  //     <div className="nav-options1">
  //       <NavLink to="/signup">
  //         <p className="signup-btn">{userEmail}</p>
  //       </NavLink>
  //         <button className="login-btn" onClick={()=>{
  //           localStorage.setItem("token",null);
  //           navigate("/signup");
  //         }}>Login</button>
  //     </div>
  //   </div>
  //   )
  // }

  return (
    <div id="navbar-main">
      <NavLink to="/">
        <div className="logo-box flex-row">
          <img
            className="logo"
            src={leetcodeLogo}
            alt="logo"
          />
          <p>PeetCode</p>
        </div>
      </NavLink>
      <div className="nav-options">
        <NavLink to="/explore">Explore</NavLink>
      </div>
      <div className="nav-options">
        <NavLink to="/problemset/all/">Problems</NavLink>
      </div>
      <div className="nav-options">
        <NavLink to="/addproblem">Add Problem</NavLink> 
      </div>
      <div className="nav-options">
        <NavLink to="/plans">Plans</NavLink> 
      </div>
      <div className="nav-options1">
        <NavLink to="/signup">
          <button className="signup-btn">Signup</button>
        </NavLink>
      
        <NavLink to="/login">
          <button className="login-btn">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
