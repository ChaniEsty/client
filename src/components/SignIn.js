import { useState ,useContext} from "react";
import React from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/authContext";

import SignUp from "./SignUp";
import axios from "axios"
const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const {signIn} = useContext(AuthContext);
    // const signIn = async () => {
    //     // debugger;
    //      const user = JSON.stringify({ signInEmail, signInPassword });
    //     console.log("signin")
    //     const response = await axios.post ("http://localhost:5000/logIn/signIn",{ signInEmail, signInPassword })
    //     console.log(response.data.accessToken)  
    //     // const response = await fetch("http://localhost:5000/logIn/signIn",
    //     //     {
    //     //         method: 'POST',
    //     //         headers: { 'Content-Type': 'application/json' },
    //     //         body: user
    //     //     })
    //     // debugger;
    //     if (response.statusText=="OK"){ 
    //     // if (response.ok) {
    //         const acssesToken = response.data.accessToken;
    //         alert("logged in");
    //         sessionStorage.setItem("acssesToken", acssesToken);
    //         alert(acssesToken);
    //     }
    //     else
    //         alert("not found");
    // }

    const newPassword = async () => {
        //const stringSignInEmail=JSON.stringify({ signInEmail })
       // console.log(stringSignInEmail)
        const response = await fetch(`http://localhost:5000/logIn/${signInEmail}/password`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                //query: JSON.stringify({ signInEmail })
            })
            console.log(response);
        if (response.ok)
            alert("new password sent");
        else
            alert("cant send password");
    }
    
    return (
        <div className="overlay">
            {/* <!-- LOGN IN FORM by Omar Dsoky -->*/}
            <form>
                {/* <!--   con = Container  for items in the form--> */}
                <div className="con">
                    {/* <!--     Start  header Content  --> */}
                    <header className="head-form">
                        <h2>Log In</h2>
                        {/* <!--     A welcome message or an explanation of the login form --> */}
                        <p>login here using your username and password</p>
                    </header>
                    {/* <!--     End  header Content  --> */}
                    <br></br>
                    <div className="field-set">
                        {/* <!--   user name --> */}
                        <span className="input-item">
                            <i className="fa fa-user-circle"></i>
                        </span>
                        {/* <!--   user name Input--> */}
                        <input className="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e) => setSignInEmail(e.target.value)} ></input>
                        <br></br>
                        {/* <!--   Password --> */}
                        <span className="input-item">
                            <i className="fa fa-key"></i>
                        </span>
                        {/* <!--   Password Input--> */}
                        <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" onChange={(e) => setSignInPassword(e.target.value)}></input>

                        {/* <!--      Show/hide password  --> */}
                        {/* <span>
                            <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                        </span> */}
                        <br></br>
                        {/* <!--        buttons --> */}
                        {/* <!--      button LogIn --> */}
                        <button className="button" type="button" onClick={()=>{ signIn(signInEmail,signInPassword)}}> Log In </button>
                    </div>
                    {/* <!--   other buttons --> */}
                    <div className="other">
                        {/* <!--      Forgot Password button--> */}
                        <button className="btn submits frgt-pass" onClick={newPassword}>Forgot Password</button>
                        {/* <!--     Sign Up button --> */}
                        <NavLink className="btn submits sign-up" to="/signUp">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></NavLink>
                        {/* <button className="btn submits sign-up" onClick={signUp}>Sign Up
                            <!--         Sign Up font icon -->
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;


