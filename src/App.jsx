import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AllProblems from './components/AllProblems/AllProblems';
import ProblemsPage from './components/ProblemsPage/ProblemsPage';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import './App.css';
import Explore from './components/Explore/Explore';
import Contest from './components/Contest/Contest';
import EditProblem from './components/edit_problem/EditProblem';
import Discuss from './components/Discuss/Discuss';

const App = () => {
  
  


  return (
    <Router>
      <div className="dashboard">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plans" element={<Discuss />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/addproblem" element={<Contest/>} />
          <Route path="/problemset/all/" element={<AllProblems />} />
          <Route path="/problems/:id/" element={<ProblemsPage />} />
          <Route path="/edit/:id/" element={<EditProblem />} />
          <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
