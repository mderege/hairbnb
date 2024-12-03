// App.jsx
import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet, useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (firebaseUser) => {
    try {
      // Fetch user data (like role) from your backend or Firebase
      const response = await fetch(`/api/user/${firebaseUser.uid}`);
      const userData = await response.json();
  
      // Update the user state with role information
      setUser(userData);
  
      // Redirect based on role
      if (userData.role === "stylist") {
        navigate("/ProfilePage");
      } else if (userData.role === "client") {
        navigate("/client-dashboard");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  return (
    <GoogleOAuthProvider clientId="989487628694-ku7po9jejcpcqk5d8itqrrb0s22vlac0.apps.googleusercontent.com">
      <div className="w-full p-6">
        <Navbar />
        <div className="mt-20">
          <Outlet context={{ user, setUser }}/> {/* Provide user and setUser to child routes */}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
