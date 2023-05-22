import { useState, useContext } from "react";
import React from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/authContext";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Box } from "@mui/material";
const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const { signIn } = useContext(AuthContext);
    const newPassword = async () => {
        const response = await fetch(`http://localhost:5000/logIn/${signInEmail}/password`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
        console.log(response);
        if (response.ok)
            alert("new password sent");
        else
            alert("cant send password");
    }

    return (
        <Box sx={{paddingRight:'40%'}}>
            <h2>התחברות</h2><br/>
            <div className="p-float-label"> 
                <InputText className="input" type="text" onChange={(e) => setSignInEmail(e.target.value)} ></InputText>
                <label>חברה</label>
            </div>&nbsp;&nbsp;
            <div className="p-float-label">   
                <InputText style={{minWidth:"250px"}} className="input" type="password"  name="password" onChange={(e) => setSignInPassword(e.target.value)}></InputText>
                <label>חברה</label>
            </div>&nbsp;&nbsp; 
                
                <Button className="button"  style={{fontSize:'0.5rem',marginRight: "20%",marginTop: "2%", marginBottom: "2%"}} size="small" onClick={newPassword}>שכחתי סיסמא</Button><br></br>
                <Button className="button" style={{minWidth:'170px',marginRight:'5%',textAlign:'center',padding: "0.75rem 3.5rem"}} type="button" onClick={() => { signIn(signInEmail, signInPassword) }}> התחבר </Button><br></br>
                <NavLink to="/signUp">הרשם</NavLink>
        </Box>
        // <div className="overlay">
        //     {/* <!-- LOGN IN FORM by Omar Dsoky -->*/}
        //     <form>
        //         {/* <!--   con = Container  for items in the form--> */}
        //         <div className="con">
        //             {/* <!--     Start  header Content  --> */}
        //             <header className="head-form">
        //                 <h2>Log In</h2>
        //                 {/* <!--     A welcome message or an explanation of the login form --> */}
        //                 <p>login here using your username and password</p>
        //             </header>
        //             {/* <!--     End  header Content  --> */}
        //             <br></br>
        //             <div className="field-set">
        //                 {/* <!--   user name --> */}
        //                 <span className="input-item">
        //                     <i className="fa fa-user-circle"></i>
        //                 </span>
        //                 {/* <!--   user name Input--> */}
        //                 <input className="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e) => setSignInEmail(e.target.value)} ></input>
        //                 <br></br>
        //                 {/* <!--   Password --> */}
        //                 <span className="input-item">
        //                     <i className="fa fa-key"></i>
        //                 </span>
        //                 {/* <!--   Password Input--> */}
        //                 <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" onChange={(e) => setSignInPassword(e.target.value)}></input>

        //                 {/* <!--      Show/hide password  --> */}
        //                 {/* <span>
        //                     <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
        //                 </span> */}
        //                 <br></br>
        //                 {/* <!--        buttons --> */}
        //                 {/* <!--      button LogIn --> */}
        //                 <button className="button" type="button" onClick={()=>{ signIn(signInEmail,signInPassword)}}> Log In </button>
        //             </div>
        //             {/* <!--   other buttons --> */}
        //             <div className="other">
        //                 {/* <!--      Forgot Password button--> */}
        //                 <button className="btn submits frgt-pass" onClick={newPassword}>Forgot Password</button>
        //                 {/* <!--     Sign Up button --> */}
        //                 <NavLink className="btn submits sign-up" to="/signUp">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></NavLink>
        //                 {/* <button className="btn submits sign-up" onClick={signUp}>Sign Up
        //                     <!--         Sign Up font icon -->
        //                     <i className="fa fa-user-plus" aria-hidden="true"></i>
        //                 </button> */}
        //             </div>
        //         </div>
        //     </form>
        // </div>
    )
}

export default SignIn;


