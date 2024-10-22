// App.jsx
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <GoogleOAuthProvider clientId="989487628694-ku7po9jejcpcqk5d8itqrrb0s22vlac0.apps.googleusercontent.com">
      <div className="w-full p-6">
        <Navbar />
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
