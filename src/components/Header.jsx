
// import React from "react"
// import { NavLink } from "react-router-dom";
// const Header = () => {


//     return (
//       //   <>
//       //   <nav className='main-nav'>
//       //   <label>שלום, "+אורח"</label>
//       //   {/* <img src="\images\דף הבית.png"></img> */}
//       //   {/* <img src="\images\‏‏התחברות.PNG"></img> */}
//       //   {/* <img src="\images\‏‏לכידה.PNG"></img> */}
//       //   {/* <img src="\images\משרות.png"></img> */}
//       //   {/* <img src="\images\מגייסים עובדים.png"></img> */}
//       //   {/* <img src="\images\‏‏צרו קשר.PNG"></img> */}
//       //   <NavLink to="/">דף הבית</NavLink>
//       //   <NavLink to="/signIn">התחברות</NavLink>
//       //   <NavLink to="/personalArea">אזור אישי </NavLink>
//       //   <NavLink to="/jobs">משרות </NavLink>
//       //   <NavLink to="/gettingEmployees">מגייסים עובדים</NavLink>
//       //   <NavLink to="/inqueries">צרו קשר</NavLink>
//       // </nav>
//       //   </>
//     )
// }
// export default Header;
import React, { useContext } from "react"
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from "../context/authContext";


const Header = () => {

    const { currentUser } = useContext(AuthContext);

    return (
        //       //   <>
        <nav className='main-nav'>
            <label style={{ color: 'white', marginBottom: '7px', fontSize: '20px' }}>{currentUser?currentUser.name:"אורח"}<AccountCircleIcon sx={{ marginBottom: '-7px' }} ></AccountCircleIcon></label>
            {/* <img src="\images\דף הבית.png"></img> */}
            {/* <img src="\images\‏‏התחברות.PNG"></img> */}
            {/* <img src="\images\‏‏לכידה.PNG"></img> */}
            {/* <img src="\images\משרות.png"></img> */}
            {/* <img src="\images\מגייסים עובדים.png"></img> */}
            {/* <img src="\images\‏‏צרו קשר.PNG"></img> */}
            <NavLink to="/">דף הבית</NavLink>
            <NavLink to="/signIn">התחברות</NavLink>
            <NavLink to="/personalArea">אזור אישי </NavLink>
            <NavLink to="/jobs">משרות </NavLink>
            <NavLink to="/gettingEmployees">מגייסים עובדים</NavLink>
            <NavLink to="/inqueries">צרו קשר</NavLink>
            <img style={{ width: "100px" }} src="\images\logo.png"></img>
        </nav>)
}
export default Header;
