import React, { useState, useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import "./signUp.css"
const SignIn = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [visible, setVisible] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const validate = (data) => {
        let errors = {};
        if (!data.email) {
            errors.email = 'דוא"ל שדה חובה.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }
        if (!data.password) {
            errors.password = 'סיסמא שדה חובה';
        }
        return errors;
    };
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
        console.log("status: " + status)
        if (status == 200) {
            setShowMessage(true);
            form.restart();
            navigate("/personalArea");
        }
        else
            alert("סיסמא או מייל שגויים נסו שנית");
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }} className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" breakpoints={{ '960px': '15vw' }} style={{ width: '15vw' }}>

                <h2>נרשמת בהצלחה</h2>

            </Dialog>
            <Dialog visible={visible} onHide={() => setVisible(false)} position="top" style={{ width: '300px' }}>

                <h4>לאיפוס סיסמא הכנס מייל</h4>
                <InputText style={{ width: '250px' }} id="email" placeholder='email' onChange={(e) => { newPassword(e.target.value) }} />

            </Dialog>
            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">התחברות</h2>
                    {/*  */}
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
                            <NavLink to="/signUp">הרשם</NavLink>
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}
export default SignIn;
