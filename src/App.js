import Login from "./pages/login/Login";

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignUp from "./pages/login/SignUp";
import SignIn from "./pages/login/SignIn";

function App() {
  return (
   <Router>
     <nav className='main-nav'>
          {/* <NavLink to="/">דף הבית</NavLink>
          <NavLink to="/login">כניסה </NavLink>
          <NavLink to="/register">הרשמה </NavLink>
          <NavLink to="/book/list">ספרים </NavLink> */}
        </nav>
    <Routes>
      <Route path="signIn" element={<SignIn></SignIn>}></Route>
      <Route path="signUp" element={<SignUp></SignUp>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
