import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import "./App.css";
import "./components/Jobs/job.css"
import "./components/style.css"
import AddJob from "./components/AddJob";
import PersonalArea from "./components/PersonalArea";
import { AuthContextProvider } from "./context/authContext";
import { Box, Container, Paper } from "@mui/material"
import Footer from "./components/Footer";
import Header from "./components/Header";
// import "./signUp.css"


function App() {
  return (<>
  
    <AuthContextProvider>
      <Router>
      <nav className='main-nav'>
        <label>שלום, "+אורח"</label>
        {/* <img src="\images\דף הבית.png"></img> */}
        {/* <img src="\images\‏‏התחברות.PNG"></img> */}
        {/* <img src="\images\‏‏לכידה.PNG"></img> */}
        {/* <img src="\images\משרות.png"></img> */}
        {/* <img src="\images\מגייסים עובדים.png"></img> */}
        {/* <img src="\images\‏‏צרו קשר.PNG"></img> */}
        <NavLink to="/">דף הבית</NavLink>
        <NavLink to="/signIn">התחברות</NavLink>
        <NavLink to="/personalArea">אזור אישי </NavLink>
        <NavLink to="/jobs">משרות </NavLink>
        <NavLink to="/gettingEmployees">מגייסים עובדים</NavLink>
        <NavLink to="/inqueries">צרו קשר</NavLink>
        <img style={{width:"100px"}} src="\images\logo.png"></img>
      </nav>
       
       
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="signIn" element={<SignIn></SignIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="jobs" element={<Jobs></Jobs>}></Route>
          <Route path="gettingEmployees" element={<AddJob></AddJob>}></Route>
          <Route path="personalArea" element={<PersonalArea></PersonalArea>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthContextProvider>
    </>
    );
}

    export default App;
