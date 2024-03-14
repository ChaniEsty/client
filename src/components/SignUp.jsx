import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import { NavLink,useNavigate } from "react-router-dom";
import { TextField, Autocomplete } from "@mui/material";


import "./signUp.css"
const SignUp = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState();
    const navigate = useNavigate();
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
        if (!(data.password === data.checkPassword))
            errors.checkPassword = 'סיסמא שגויה'
        return errors;
    };

    const onSubmit = async (data, form) => {
        console.log("in submit" + data.email, data.firstName, data.lastName, data.role, data.phone, data.password);
        setFormData(data);
        const user = { email: data.email, name: data.firstName + " " + data.lastName, phone: data.phone, password: data.password, role: data.role };
        const response = await fetch("http://localhost:5000/logIn",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
        if (response.ok)
            alert(` נוסף ${data.role} `);
        else
            alert(`לא יכול להוסיף ${data.role}`);
        console.log(response);
        setShowMessage(true);
        form.restart();
        navigate("/signIn");


    };
    const isFormFieldValid = (meta) => meta && meta.touched && meta.error;
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = (
        <div className="flex justify-content-center">
            <Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} />
        </div>);
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
        <div style={{ marginRight: '30%' }} className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" breakpoints={{ '960px': '80vw' }} style={{ width: '15vw' }}>

                <h2>נרשמת בהצלחה</h2>

            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h1 className="text-center">עדיין לא נרשמת?</h1>
                    <Form onSubmit={onSubmit} initialValues={{ firstName: '', lastName: '', email: '', phone: '', password: '', checkPassword: '', role: 'מחפש תעסוקה' }} validate={validate} render={({ handleSubmit }) => (
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
                                        <InputText id="lastName" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
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
                                        <InputText id="phone" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid(meta) })}> טלפון </label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>סיסמא*</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="checkPassword" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText type='password' id="checkPassword" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>אימות סיסמא* </label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="role" render={({ input, meta }) => (
                                <Autocomplete id="role"  {...input} options={["מעסיק", "מחפש תעסוקה"]}
                                    getOptionLabel={(option) => {
                                        console.log(input.value, "lets sssssssssssssssss")
                                        console.log(option);
                                        return option
                                    }}
                                    onChange={(event, option) => (input.onChange(option))}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                        />
                                    )} />
                            )} />

                            <NavLink to={"/signIn"}>רשום כבר? לחץ כאן להתחברות</NavLink>
                            <Button type="submit" label="הרשם" className="button" />

                        </form >
                    )} />
                </div >
            </div >
        </div >
    );
}
export default SignUp;
