import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
