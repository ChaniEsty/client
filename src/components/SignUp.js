import React from "react";
import { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Typography } from '@mui/material';import "./signUp.css"
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [checkPassword,setCheckPassword]=useState("");
    //const checkPassword = document.getElementById("checkPassword").value;
    const signUp = async (role) => {
        if (!password == checkPassword)
            alert("סיסמא שגויה")
        const user = JSON.stringify({ email, iduser: "empty", name: firstName + " " + lastName, phone, password,role })
        debugger;
        const response = await fetch("http://localhost:5000/logIn",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: user
            })
            if(response.ok)
                alert(` נוסף ${role} `);
            else
                alert(`can't add ${role}`);
        console.log(response);
    }
    return (
        <div className="signUp"><Typography variant="h5">עדיין לא נרשמת?</Typography><br></br>
        <InputText onChange={(e) => setLastName(e.target.value)} placeholder="שם משפחה" />
        <InputText onChange={(e) => setFirstName(e.target.value)} placeholder="שם פרטי" /><br></br>
        <InputText onChange={(e) => setPhone(e.target.value)} placeholder="טלפון" />
        <InputText type="email" onChange={(e) => setEmail(e.target.value)} placeholder='דוא"ל' /><br></br>
        <InputText type="password" onChange={(e) => setPassword(e.target.value)} placeholder="סיסמא" />
        <InputText type="password" onChange={(e) => setCheckPassword(e.target.value)} placeholder="אימות סיסמא" /><br></br>
        <Button className="button" onClick={()=>{signUp("מעסיק")}}>מעסיק</Button>
        <Button className="button" onClick={()=>{signUp("מחפש תעסוקה")}}>מחפש תעסוקה</Button></div>
    )
}

export default SignUp
