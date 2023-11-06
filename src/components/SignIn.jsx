// import { useState, useContext } from "react";
// import React from "react";
// import { NavLink , Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { Box } from "@mui/material";
// const SignIn = () => {
//     const [signInEmail, setSignInEmail] = useState("");
//     const [signInPassword, setSignInPassword] = useState("");
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const handleSignIn=()=>{
//         signIn(signInEmail,signInPassword);
//         navigate("/personalArea");
//     }
//     const newPassword = async () => {
//         const response = await fetch(`http://localhost:5000/logIn/${signInEmail}/password`,
//             {
//                 method: 'GET',
//                 headers: { 'Content-Type': 'application/json' },
//             })
//         console.log(response);
//         if (response.ok)
//             alert("new password sent");
//         else
//             alert("cant send password");
//     }

//     return (
//         <Box sx={{paddingRight:'40%'}}>
//             <h2>התחברות</h2><br/>
//             <div className="p-float-label"> 
//                 <InputText className="input" type="text" onChange={(e) => setSignInEmail(e.target.value)} ></InputText>
//                 <label style={{marginLeft:'80%'}}>דוא"ל</label>
//             </div>&nbsp;&nbsp;
//             <div className="p-float-label">   
//                 <InputText style={{minWidth:"250px"}} className="input" type="password"  name="password" onChange={(e) => setSignInPassword(e.target.value)}></InputText>
//                 <label style={{marginLeft:'80%'}}>סיסמא</label>
//             </div>&nbsp;&nbsp; 

//                 <Button className="button"  style={{fontSize:'0.5rem',marginRight: "20%",marginTop: "2%", marginBottom: "2%"}} size="small" onClick={newPassword}>שכחתי סיסמא</Button><br></br>
//                 <Button className="button" style={{minWidth:'170px',marginRight:'5%',textAlign:'center',padding: "0.75rem 3.5rem"}} type="button" onClick={() => {handleSignIn()}}> התחבר </Button><br></br>
//                 <NavLink to="/signUp">הרשם</NavLink>
//         </Box>
//         // <div className="overlay">
//         //     {/* <!-- LOGN IN FORM by Omar Dsoky -->*/}
//         //     <form>
//         //         {/* <!--   con = Container  for items in the form--> */}
//         //         <div className="con">
//         //             {/* <!--     Start  header Content  --> */}
//         //             <header className="head-form">
//         //                 <h2>Log In</h2>
//         //                 {/* <!--     A welcome message or an explanation of the login form --> */}
//         //                 <p>login here using your username and password</p>
//         //             </header>
//         //             {/* <!--     End  header Content  --> */}
//         //             <br></br>
//         //             <div className="field-set">
//         //                 {/* <!--   user name --> */}
//         //                 <span className="input-item">
//         //                     <i className="fa fa-user-circle"></i>
//         //                 </span>
//         //                 {/* <!--   user name Input--> */}
//         //                 <input className="form-input" id="txt-input" type="text" placeholder="@UserName" onChange={(e) => setSignInEmail(e.target.value)} ></input>
//         //                 <br></br>
//         //                 {/* <!--   Password --> */}
//         //                 <span className="input-item">
//         //                     <i className="fa fa-key"></i>
//         //                 </span>
//         //                 {/* <!--   Password Input--> */}
//         //                 <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" onChange={(e) => setSignInPassword(e.target.value)}></input>

//         //                 {/* <!--      Show/hide password  --> */}
//         //                 {/* <span>
//         //                     <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
//         //                 </span> */}
//         //                 <br></br>
//         //                 {/* <!--        buttons --> */}
//         //                 {/* <!--      button LogIn --> */}
//         //                 <button className="button" type="button" onClick={()=>{ signIn(signInEmail,signInPassword)}}> Log In </button>
//         //             </div>
//         //             {/* <!--   other buttons --> */}
//         //             <div className="other">
//         //                 {/* <!--      Forgot Password button--> */}
//         //                 <button className="btn submits frgt-pass" onClick={newPassword}>Forgot Password</button>
//         //                 {/* <!--     Sign Up button --> */}
//         //                 <NavLink className="btn submits sign-up" to="/signUp">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></NavLink>
//         //                 {/* <button className="btn submits sign-up" onClick={signUp}>Sign Up
//         //                     <!--         Sign Up font icon -->
//         //                     <i className="fa fa-user-plus" aria-hidden="true"></i>
//         //                 </button> */}
//         //             </div>
//         //         </div>
//         //     </form>
//         // </div>
//     )
// }

// export default SignIn;


import React, { useState, useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { RadioButton } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import "./signUp.css"
import { Radio } from '@mui/material';
import { Troubleshoot } from '@mui/icons-material';
const SignIn = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [visible, setVisible] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const validate = (data) => {
        let errors = {};

        // if (!data.firstName) {
        //     errors.firstName = 'שם שדה חובה';
        // }
        // if (!data.lastName) {
        //     errors.lastName = 'שם שדה חובה';
        // }
        if (!data.email) {
            errors.email = 'דוא"ל שדה חובה.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }
        if (!data.password) {
            errors.password = 'סיסמא שדה חובה';
        }
        // if (!(data.password === data.checkPassword))
        //     errors.checkPassword = 'סיסמא שגויה'



        return errors;
    };
    // const handleSignIn = () => {
    //     signIn(formData.email, formData.password);
    //     navigate("/personalArea");
    // }
    const newPassword = async (email) => {
        const response = await fetch(`http://localhost:5000/logIn/${email}/password`,
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

    const onSubmit = async (data, form) => {
        console.log("in submit" + data);
        setFormData(data);
        const status = await signIn(data.email, data.password);
        if (status == 200) {
            setShowMessage(true);
            form.restart();
            navigate("/personalArea");
        }
        else
            alert("not found");
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };



    return (
        <div style={{ marginRight: '30%' }} className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" breakpoints={{ '960px': '15vw' }} style={{ width: '15vw' }}>

                <h2>נרשמת בהצלחה</h2>

            </Dialog>
            <Dialog visible={visible} onHide={() => setVisible(false)} position="top" breakpoints={{ '960px': '15vw' }} style={{ width: '15vw' }}>

                <h4>לאיפוס סיסמא הכנס מייל</h4>
                <InputText style={{ width: '12vw' }} id="email" placeholder='email' onChange={(e) => { newPassword(e.target.value) }} />

            </Dialog>
            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">התחברות</h2>
                    <Form onSubmit={onSubmit} initialValues={{ email: '', password: '' }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">

                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>דוא"ל*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText type="password" id="password" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>סיסמא*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />

                            <Button className="button" style={{ width: "25%", alignItems: "end", fontSize: "10px", marginRight: "75%" }} onClick={() => { setVisible(true) }}>שכחתי סיסמא</Button>&nbsp;&nbsp;
                            <Button type='submit' className="button" > התחבר </Button><br></br><br></br>
                            {/* <Button type="submit" label="Submit" className="mt-2" /> */}
                            <NavLink to="/signUp">הרשם</NavLink>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}
export default SignIn;
