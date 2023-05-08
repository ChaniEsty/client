import React, { Component } from "react"
import { Box, Container, Paper } from "@mui/material"
import { Link,NavLink, useNavigate } from "react-router-dom"
import { Router } from "react-router-dom"
import { Typography } from '@mui/material';
import { fontSize } from "@mui/system";


const Footer = () => {


    return (
        <>
        <Box sx={{
            justifyContent: "center", gap: "1%", position: "relative", alignContent: "center", bottom:"0", width: "100%", display: "flex",marginBottom:"5%"
        }}>
     
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                <h6 style={{fontFamily:'sans-serif',color:"white",fontSize:"22"}} >חברת השמה-<img style={{width:"70px",padding:"1%"}} src="\images\logo.png"></img></h6>
                <NavLink to="/" style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}> דף הבית</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>אודות החברה</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>מחפשים עבודה</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/gettingEmployees">מגייסים עובדים</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/inqueries">צרו קשר</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                    <h6>תפקידים מבוקשים</h6>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>מתכנת php</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>מהנדס תוכנה</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>Data scientist</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>Java developer</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}} >
                    <h6>מאמרים מובילים</h6>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>7 סיבות לפנות לחברת השמה</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>6 דרכים למציאת עבודה בהייטק</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}>סימנים שהגיע זמן להחליף עבודה</NavLink>
                </div></Box>  </> 
    )}
export default Footer
