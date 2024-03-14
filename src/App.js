import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import AddJob from "./components/AddJob";
import PersonalArea from "./components/PersonalArea";
import { AuthContextProvider } from "./context/authContext";
import { Box} from "@mui/material"
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import "./components/Jobs/job.css"
import "./components/style.css"


function App() {
  return (<>

    <AuthContextProvider>
      <Router>
        <Header></Header>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, minHeight: "100vh", justifyContent: "space-between" }}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="signIn" element={<SignIn></SignIn>}></Route>
            <Route path="signUp" element={<SignUp></SignUp>}></Route>
            <Route path="jobs" element={<Jobs></Jobs>}></Route>
            <Route path="gettingEmployees" element={<AddJob></AddJob>}></Route>
            <Route path="personalArea" element={<PersonalArea></PersonalArea>}></Route>
            <Route path="inqueries" element={<Contact></Contact>}></Route>
          </Routes>
          <Box >
            <Footer /></Box>
        </Box>
      </Router>
    </AuthContextProvider>
  </>
  );
}

export default App;
