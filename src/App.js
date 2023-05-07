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
import { Typography } from '@mui/material';
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
        </nav>
        <Box sx={{
            justifyContent: "center", gap: "1%", position: "fixed", alignContent: "center", bottom: 0, width: "100%", display: "flex", marginBottom: "5%", backgroundColor: "5f5d5d"
        }}>
     
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                <h6>חברת השמה-ITeck</h6>
                <NavLink to="/"> דף הבית</NavLink><br></br>
                <NavLink>אודות החברה</NavLink><br></br>
                <NavLink>מחפשים עבודה</NavLink><br></br>
                <NavLink to="/gettingEmployees">מגייסים עובדים</NavLink><br></br>
                <NavLink to="/inqueries">צרו קשר</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                    <h6>תפקידים מבוקשים</h6>
                    <Typography sx={{color:"white"}}>מתכנת php</Typography><br></br>
                    <Typography sx={{color:"white"}}>מהנדס תוכנה</Typography><br></br>
                    <Typography sx={{color:"white"}}>Data scientist</Typography><br></br>
                    <Typography sx={{color:"white"}}>Java developer</Typography>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}} >
                    <h6>מאמרים מובילים</h6>
                    <Typography sx={{color:"white"}}>7 סיבות לפנות לחברת השמה</Typography><br></br>
                    <Typography sx={{color:"white"}}>6 דרכים למציאת עבודה בהייטק</Typography><br></br>
                    <Typography sx={{color:"white"}}>סימנים שהגיע זמן להחליף עבודה</Typography>
                </div></Box> 
       
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="signIn" element={<SignIn></SignIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="jobs" element={<Jobs></Jobs>}></Route>
          <Route path="gettingEmployees" element={<AddJob></AddJob>}></Route>
          <Route path="personalArea" element={<PersonalArea></PersonalArea>}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
    </>
    );
}

    export default App;
