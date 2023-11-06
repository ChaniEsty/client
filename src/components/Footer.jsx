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
             justifyContent: "center", gap: 1, alignContent: "center", bottom:"0", width: "100%", display: "flex",
        }}>
     
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                {/* <h6 style={{fontFamily:'sans-serif',color:"white",fontSize:"22"}} >חברת השמה-</h6> */}
                <img style={{width:"100%",padding:"20px"}} src="\images\logo.png"></img><br></br>
                <NavLink to="/" style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}> דף הבית</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="jobs">מחפשים עבודה</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/gettingEmployees">מגייסים עובדים</NavLink><br></br><br></br>
                <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/inqueries">צרו קשר</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                    <h3 style={{color:"white",fontFamily:'sans-serif',padding:"20px"}}>תפקידים מבוקשים</h3>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/jobs?field=php">מתכנת php</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="jobs?field=מהנדס תוכנה">מהנדס תוכנה</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="/jobs?field=data engineer">Data engineer</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="/jobs?field=AI">AI</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}}>
                    <h3 style={{color:"white",fontFamily:'sans-serif',padding:"20px"}}>ערים מועדפות</h3>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/jobs?city=ירושלים">ירושלים</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}} to="/jobs?city=תל אביב">תל אביב</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="/jobs?city=רמת גן">רמת גן</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="/jobs?city=פתח תקווה"> פתח תקווה</NavLink>
                </div>
                <div style={{backgroundColor:"black",width:"20%",textAlign:"center"}} >
                <h3 style={{color:"white",fontFamily:'sans-serif',padding:"20px"}}>שפות פופלאריות</h3>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=java">Java</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=python">python</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=react">react</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=c">c</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=node.js">node.js</NavLink><br></br><br></br>
                    <NavLink style={{textDecoration:'none' ,color:'white' ,fontFamily:'sans-serif'}}to="jobs?subject=angular">angular</NavLink>

                </div></Box>  </> 
    )}
export default Footer
