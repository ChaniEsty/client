import React, { Component } from "react"
import { Box, Container, Paper } from "@mui/material"
import { Link,NavLink, useNavigate } from "react-router-dom"
import { Router } from "react-router-dom"


const Footer = () => {


    return (
        <>
        <Box sx={{
            justifyContent: "center", gap: "1%", position: "fixed", alignContent: "center", bottom: 0, width: "100%", display: "flex", marginBottom: "5%", backgroundColor: "5f5d5d"
        }}>
     
                <div style={{backgroundColor:"#5f5d5d",width:"20%",textAlign:"center"}}>
                    <h6>חברת השמה-ITeck</h6>
                   
                    <label> דף הבית</label><br></br>
                    <label>אודות החברה</label><br></br>
                    <label>מחפשים עבודה</label><br></br>
                    <label>מגייסים עובדים</label><br></br>
                    <label>צרו קשר</label>
                </div>
                <div style={{backgroundColor:"#5f5d5d",width:"20%",textAlign:"center"}}>
                    <h6>תפקידים מבוקשים</h6>
                    <label>מתכנת php</label><br></br>
                    <label>מהנדס תוכנה</label><br></br>
                    <label>Data scientist</label><br></br>
                    <label>Java developer</label>
                </div>
                <div style={{backgroundColor:"#5f5d5d",width:"20%",textAlign:"center"}} >
                    <h6>מאמרים מובילים</h6>
                    <label>7 סיבות לפנות לחברת השמה</label><br></br>
                    <label>6 דרכים למציאת עבודה בהייטק</label><br></br>
                    <label>סימנים שהגיע זמן להחליף עבודה</label>
                </div></Box></> 
    )}
export default Footer
