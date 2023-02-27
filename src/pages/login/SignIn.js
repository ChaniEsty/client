import { useState } from "react";
const SignIn = async () => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const signIn=async()=>{
        const response = await fetch("http://localhost:5000/logIn/signIn",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ signInEmail, signInPassword })
        })
    console.log(response);
    }
    
    return (
        <div><label>?משתמש קיים</label><br></br>
            <input type="email" onChange={(e) => setSignInEmail(e.target.value)} placeholder="אימייל" /><br></br>
            <input type="password" onChange={(e) => setSignInPassword(e.target.value)} placeholder="סיסמא" /><br></br>
            <button onClick={signIn}>כניסה</button><br></br></div>
    )
}

export default SignIn;

    
