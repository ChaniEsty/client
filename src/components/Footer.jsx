import React, { Component } from "react"
import { Box, Container, Paper } from "@mui/material"
import { NavLink } from "react-router-dom";

import { TableFooter } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
const Footer = () => {


    return (
        <>
        {/* <nav className='main-nav'>
          <label>שלום, "+אורח"</label>
          <NavLink to="/"><img src="public\images\‏‏דף הבית.PNG"></img>דף הבית</NavLink>
          <NavLink to="/signIn"><img src="public\images\‏‏התחברות.PNG"></img>התחברות</NavLink>
          <NavLink to="/personalArea"><img src="public\images\‏‏לכידה.PNG"></img>אזור אישי </NavLink>
          <NavLink to="/jobs"><img src="public\images\‏‏משרות.PNG"></img>משרות </NavLink>
          <NavLink to="/gettingEmployees"><img src="public\images\‏‏מגייסים עובדים.PNG"></img>מגייסים עובדים</NavLink>
          <NavLink to="/inqueries"><img src="public\images\‏‏צרו קשר.PNG"></img>צרו קשר</NavLink>
        </nav> */}
        <Box sx={{
            justifyContent: "center", gap: "5%", position: "fixed", alignContent: "center", bottom: 0, width: "100%", display: "flex", marginBottom: "5%", backgroundColor: "5f5d5d"
        }}>
                <div style={{backgroundColor:"#5f5d5d"}}>
                    <h6>חברת השמה-ITeck</h6>
                    <label>דף הבית</label><br></br>
                    <label>אודות החברה</label><br></br>
                    <label>מחפשים עבודה</label><br></br>
                    <label>מגייסים עובדים</label><br></br>
                    <label>צרו קשר</label>
                </div>
                <div style={{backgroundColor:"#5f5d5d"}}>
                    <h6>תפקידים מבוקשים</h6>
                    <label>מתכנת php</label><br></br>
                    <label>מהנדס תוכנה</label><br></br>
                    <label>Data scientist</label><br></br>
                    <label>Java developer</label>
                </div>
                <div style={{backgroundColor:"#5f5d5d"}} >
                    <h6>מאמרים מובילים</h6>
                    <label>7 סיבות לפנות לחברת השמה</label><br></br>
                    <label>6 דרכים למציאת עבודה בהייטק</label><br></br>
                    <label>סימנים שהגיע זמן להחליף עבודה</label>
                </div></Box></> 
    )}
export default Footer
