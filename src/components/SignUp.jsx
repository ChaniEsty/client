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
import { RadioButton } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';
import { Link, NavLink } from "react-router-dom";
import { useField } from 'react-final-form-hooks';
import { TextField, Box, Autocomplete } from "@mui/material";


import "./signUp.css"
import { TextareaAutosize } from '@mui/material';
const SignUp = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState();
    const options=["מעסיק","מחפש עבודה"]
    // const [role, setRole] = useState('');

    // const handleRoleChange = (e) => {
    //     if (e.value == "מחפש תעסוקה")
    //         setRole("employee");
    //     else if (e.value == "מעסיק")
    //         setRole("employer");
    // };
    // const roleOptions = [
    //     { label: 'מחפש תעסוקה', value: 'מחפש תעסוקה' },
    //     { label: 'מעסיק', value: 'מעסיק' },
    // ];
    // const RadioGroupField = ({input, options}) => (
    //     <div>
    //         {options.map((option) => (
    //             <div className="field" key={option.value}>
    //                 <span className="p-float-label">
    //                     <RadioButton
    //                         inputId={option.value}
    //                         {...input}
    //                         value={option.value}
    //                         checked={input.value === option.value}
    //                     />
    //                     <label htmlFor={option.value}>{option.label}</label>
    //                 </span>
    //             </div>
    //         ))}
    //     </div>
    //     );

    // const roleField = useField('role');
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
        console.log("in submit" + data.email,data.firstName,data.lastName,data.role,data.phone,data.password);
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
            alert(`can't add ${data.role}`);
        console.log(response);
        setShowMessage(true);
        form.restart();
    };
    const isFormFieldValid = (meta) => meta && meta.touched && meta.error;

    // const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
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
                                <div className="field/">
                                    <span className="p-float-label">
                                        <Autocomplete id="role" {...input} options={options} getOptionLabel={option => option} isOptionEqualToValue
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    // label="תפקיד"
                                                    variant="outlined"
                                                />
                                            )} />
                                        <label htmlFor="firstName" className={classNames({ 'p-error': isFormFieldValid(meta) })}>תפקיד</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            {/* <Autocomplete
                                id="city"
                                style={{ width: 250 }}
                                options={nameCities}
                                getOptionLabel={option => option}
                                multiple
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="עיר"
                                        variant="outlined"
                                    />
                                )}

                                onChange={(event, value) => setCity(value)} // prints the selected value */}

                            {/* /> */}
                            {/* <Field name="role">
                                {({ input }) => (
                                    <RadioGroupField
                                        input={input}
                                        options={roleOptions}
                                    />
                                )}
                            </Field> */}

                            {/* <Field name="role" type='radio'>
                                {({ input }) => (
                                    <>
                                        <div className="field">
                                            <span className="p-float-label">
                                                <RadioButton inputId="role_employee" {...input} value="מחפש תעסוקה" className={classNames({ 'p-invalid': isFormFieldValid(input.meta) })} />
                                                <label htmlFor="role_employee" className={classNames({ 'p-error': isFormFieldValid(input.meta) })}>מחפש תעסוקה</label>
                                            </span>
                                        </div>
                                        <div className="field">
                                            <span className="p-float-label">
                                                <RadioButton inputId="role_employer" {...input} value="מעסיק" className={classNames({ 'p-invalid': isFormFieldValid(input.meta) })} />
                                                <label htmlFor="role_employer" className={classNames({ 'p-error': isFormFieldValid(input.meta) })}>מעסיק</label>
                                            </span>
                                        </div>
                                    </>)
                                } 
                            </Field>*/}
                            {/* <RadioGroup {...input}>
                                            {roleOptions.map((option) => (
                                                <div key={option.value} className="p-field-radiobutton">
                                                    <RadioButton
                                                        id={`role_${option.value}`}
                                                        inputId={`role_${option.value}`}
                                                        {...roleField.input}
                                                        value={option.value}
                                                        checked={roleField.input.value === option.value}
                                                    />
                                                    <label htmlFor={`role_${option.value}`}>{option.label}</label>
                                                </div> */}
                            {/* ))}
                                        </RadioGroup>
                                    </span>
                                    </div> */}
                            {/* )}
                        </Field> */}
                            {/* <Field
                                name="employee"
                                render={({ input, meta }) => (
                                    <div className="field">
                                        <span className="p-float-label">
                                            <RadioButton
                                                inputId="מחפש תעסוקה"
                                                {...input}
                                                type="radio"
                                                name="position"
                                                value="מחפש תעסוקה"
                                                className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                                                checked={input.value === 'מחפש תעסוקה'} />
                                            <label htmlFor="option1" className={classNames({ 'p-error': isFormFieldValid(meta) })}>מחפש תעסוקה</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} />
                            <Field name="employer"
                                render={({ input, meta }) => (
                                    <div className="field">
                                        <span className="p-float-label">
                                            <RadioButton
                                                inputId="מעסיק"
                                                type="radio"
                                                {...input}
                                                name="position"
                                                value="מעסיק"
                                                className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                                                checked={input.value === 'מעסיק'} />
                                            <label htmlFor="option2" className={classNames({ 'p-error': isFormFieldValid(meta) })}>מעסיק</label>
                                        </span>
                                        {getFormErrorMessage(meta)}
                                    </div>
                                )} /> */}
                            {/* import React, { useState } from 'react';
import { RadioButton } from 'primereact/radiobutton';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.value);
  };

  return (
    <form>
      <div className="form-group">
        <div className="p-field-radiobutton">
          <RadioButton
            inputId="option1"
            name="options"
            value="option1"
            onChange={handleOptionChange}
            checked={selectedOption === 'option1'}
          />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="p-field-radiobutton">
          <RadioButton
            inputId="option2"
            name="options"
            value="option2"
            onChange={handleOptionChange}
            checked={selectedOption === 'option2'}
          />
          <label htmlFor="option2">Option 2</label>
        </div>
        {/* Add more radio buttons as needed */}
                            {/* </div>
    </form>
  );
};

export default MyForm; */}


                            {/* <div className="field">
                                <span className="p-float-label">
                                    <RadioButton
                                        inputId="role_employee"
                                        name="role"
                                        value="employee"
                                        onChange={handleRoleChange}
                                        checked={role === 'employee'}
                                    />
                                    <label htmlFor="role_employee">מחפש תעסוקה</label>
                                </span>
                            </div>
                            <div className="field">
                                <span className="p-float-label">
                                    <RadioButton
                                        inputId="role_employer"
                                        name="role"
                                        value="employer"
                                        onChange={handleRoleChange}
                                        checked={role === 'employer'}
                                    />
                                    <label htmlFor="role_employer">מעסיק</label>
                                </span>
                            </div> */}

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
