import React, { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../context/authContext";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    const { currentUser } = useContext(AuthContext);
    const[openMenu,setOpenMenu]=useState(false);
    const showMenu=()=>{
         setOpenMenu(!openMenu);
    }
    return (
        <nav className={openMenu?"menu open":"menu"}>
            <IconButton className="iconButton" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={showMenu}>
                <MenuIcon className="menuIcon" sx={{color:"#10acb5"}}/>
            </IconButton>
            <label style={{ color: 'white', marginBottom: '7px', fontSize: '20px' }}>{currentUser ? currentUser.name : "אורח"}<AccountCircleIcon sx={{ marginBottom: '-7px' }} ></AccountCircleIcon></label>
            <NavLink className="a" to="/">דף הבית</NavLink>
            <NavLink className="a" to="/signIn">התחברות</NavLink>
            <NavLink className="a" to="/personalArea">אזור אישי </NavLink>
            <NavLink className="a" to="/jobs">משרות </NavLink>
            <NavLink className="a" to="/gettingEmployees">מגייסים עובדים</NavLink>
            <NavLink className="a" to="/inqueries">צרו קשר</NavLink>
            <img className="logo" style={{ width: "100px" }} src="\images\logo.png"></img>
        </nav>)
}
export default Header;
