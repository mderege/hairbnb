import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import GoogleLogin from "./components/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <GoogleOAuthProvider clientId="989487628694-ku7po9jejcpcqk5d8itqrrb0s22vlac0.apps.googleusercontent.com">
      <div className="w-full p-6">
        <Navbar />
        <div className="mt-20">
          <Outlet />
        </div>
        <div className="App">
          <GoogleLogin setUser={setUser} />
          {user && (
            <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
