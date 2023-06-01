// import React from "react";
// import { useState } from "react";
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { Typography, Box } from '@mui/material';
// import "./signUp.css"
// const SignUp = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [checkPassword, setCheckPassword] = useState("");
//     const[touched,setTouched]=useState({email:false,password:false})
//     const validate=(email, password)=> {
//         return {
//           email: email.length === 0,
//           password: password.length === 0
//         };
//       }
//     const shouldMarkError = field => {
//         const hasError = errors[field];
//         const shouldShow = touched[field];
  
//         return hasError ? shouldShow : false;
//       }; 
//     const signUp = async (role) => {
//         if (!password == checkPassword)
//             alert("סיסמא שגויה")
//         const user = JSON.stringify({ email, iduser: "empty", name: firstName + " " + lastName, phone, password, role })
//         debugger;
//         const response = await fetch("http://localhost:5000/logIn",
//             {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: user
//             })
//         if (response.ok)
//             alert(` נוסף ${role} `);
//         else
//             alert(`can't add ${role}`);
//         console.log(response);
//     }
//     const handleBlur = (field ) => {
//         setTouched({ ...touched, [field]: true }
//         );
//       };
//     const errors = validate(email, password);
//     const isDisabled = Object.keys(errors).some(x => errors[x])
//     return (
        
//         <Box sx={{width:"60%" ,textAlign:'center',marginRight:"20%"}}>
//             <Typography variant="h5">עדיין לא נרשמת?</Typography>
//             {/* <div style={{marginRight:'40%'}}> */}
//             <div className="p-float-label" dir="rtl">
//                 <InputText  className="input" type="text" onChange={(e) => setLastName(e.target.value)} />
//                 <label>שם משפחה</label>
//             </div>&nbsp;&nbsp; 
//             <div className="p-float-label">
//                 <InputText className="input" type="text" required="true" requiredMessage="First Name is a required field" onChange={(e) => setFirstName(e.target.value)} />
//                 <label>שם פרטי</label>
//             </div>&nbsp;&nbsp; 
//             <div className="p-float-label">
//                 <InputText className="input" type="text" onChange={(e) => setPhone(e.target.value)} />
//                 <label>טלפון</label>
//             </div>&nbsp;&nbsp; 
//             <div className="p-float-label">
//                 <InputText onBlur={handleBlur("email")} className={shouldMarkError("email") ? "error" : ""} type="email" onChange={(e) => setEmail(e.target.value)} />
//                 <label>דוא"ל</label>
//             </div>&nbsp;&nbsp; 
//             <div className="p-float-label">
//                 <InputText className="input" type="password" onChange={(e) => setPassword(e.target.value)} />
//                 <label>סיסמא</label>
//             </div>&nbsp;&nbsp; 
//             <div className="p-float-label">
//                 <InputText className="input" type="password" onChange={(e) => setCheckPassword(e.target.value)} />
//                 <label>אימות סיסמא</label>
//             </div>&nbsp;&nbsp; 
//             {/* </div> */}
            

// {/* <button disabled={!isEnabled}>Sign up</button>; */}
//             <Button className="button" disabled={isDisabled} onClick={() => { signUp("מעסיק") }}>מעסיק</Button>
//             <Button className="button" disabled={isDisabled} onClick={() => { signUp("מחפש תעסוקה") }}>מחפש תעסוקה</Button>
//         </Box>
//     )
// }

// export default SignUp
import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
//import './FormDemo.css';
import "./signUp.css"
const SignUp = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const validate = (data) => {
        let errors = {};

        if (!data.firstName) {
            errors.firstName = 'שם שדה חובה';
        }
        if (!data.lastName) {
            errors.lastName = 'שם שדה חובה';
        }
        if (!data.email) {
            errors.email = 'דוא"ל שדה חובה.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }

        if (!data.password) {
            errors.password = 'סיסמא שדה חובה';
        }
        if(!(data.password===data.checkPassword))
            errors.checkPassword='סיסמא שגויה'

       

        return errors;
    };

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);

        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false) } /></div>;
    const passwordHeader = <h6>בחר סיסמא</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">הצעות</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>אותיות</li>
                <li>תווים</li>
                <li>מספרים</li>
                <li>מינימום 8 תווים</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div style={{marginRight:'30%'}}className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top"  breakpoints={{ '960px': '80vw' }} style={{ width: '15vw' }}>
               
                    <h2>נרשמת בהצלחה</h2>
                
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h1 className="text-center">עדיין לא נרשמת?</h1>
                    <Form onSubmit={onSubmit} initialValues={{ firstName: '',lastName:'' ,email: '', phone:'',password: '',checkPassword:''}} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="firstName" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="firstName" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="firstName" className={classNames({ 'p-error': isFormFieldValid(meta) })}>שם פרטי*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="lastName" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="lastName" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="lastName" className={classNames({ 'p-error': isFormFieldValid(meta) })}>שם משפחה*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
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
                             <Field name="phone" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="phone" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}> טלפון </label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>סיסמא*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="checkPassword" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText type='password' id="checkPassword" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>אימות סיסמא* </label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            
                            
                            {/* const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [checkPassword, setCheckPassword] = useState(""); */}
                            <Button type="submit" label="Submit" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}
export default SignUp
