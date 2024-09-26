import { Outlet, Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/login"
import SignUp from "./pages/signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    
  );
};
export default App
