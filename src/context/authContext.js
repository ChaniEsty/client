import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user")) || null
    );
    const [token, setToken] = useState(
        sessionStorage.getItem("token") || null
    );
    // const navigate = useNavigate()

    //signInEmail,signInPassword
    const signIn = async (signInEmail, signInPassword) => {
        console.log(signInEmail,signInPassword);
        const res = await axios.post(
            "http://localhost:5000/login/signIn",
            { signInEmail, signInPassword },
            {
                withCredentials: true,
            }
        );
        console.log(res);
        if (true) {
            alert(res.data.message);
            setCurrentUser(res.data.user);
            setToken(res.data.accessToken);
            
        }
        return res.status;
    };
    const signOut = () => {

        setCurrentUser(null);
        setToken(null);
    };
    useEffect(() => {
        sessionStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    useEffect(() => {
        sessionStorage.setItem("token", token);
    }, [token]);

    return (
        <AuthContext.Provider value={{ currentUser, token, signIn, signOut }}>
            {children}
        </AuthContext.Provider>

    )
};
