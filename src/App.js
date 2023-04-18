import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import "./App.css";
import "./components/style.css"
import AddJob from "./components/AddJob";
import PersonalArea from "./components/PersonalArea";
function App() {
  return (
   <Router>
     <nav className='main-nav'>
          <label>שלום, "+אורח"</label>
          <NavLink to="/"><img src="public\images\‏‏דף הבית.PNG"></img>דף הבית</NavLink>
          <NavLink to="/signIn"><img src="public\images\‏‏התחברות.PNG"></img>התחברות</NavLink>
          <NavLink to="/personalArea"><img src="public\images\‏‏לכידה.PNG"></img>אזור אישי </NavLink>
          <NavLink to="/jobs"><img src="public\images\‏‏משרות.PNG"></img>משרות </NavLink>
          <NavLink to="/gettingEmployees"><img src="public\images\‏‏מגייסים עובדים.PNG"></img>מגייסים עובדים</NavLink>
          <NavLink to="/inqueries"><img src="public\images\‏‏צרו קשר.PNG"></img>צרו קשר</NavLink>
        </nav>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route> 
      <Route path="signIn" element={<SignIn></SignIn>}></Route>
      <Route path="signUp" element={<SignUp></SignUp>}></Route>
      <Route path="jobs" element={<Jobs></Jobs>}></Route> 
      <Route path="gettingEmployees" element={<AddJob></AddJob>}></Route> 
      <Route path="personalArea" element={<PersonalArea></PersonalArea>}></Route> 

    </Routes>
   </Router>
  );
}

export default App;
