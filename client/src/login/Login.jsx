import React, { useEffect, useState } from 'react';
import GoogleLogin from "../components/GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "../login/Login.css"; // Import the CSS file for styling

function Login() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize navigate for redirection

    useEffect(() => {
        if (user) {
            // Optional: You can still use this to check if user is set.
            console.log("User authenticated:", user);
        }
        else {
            console.log("Not quite authenticated lol");
        }
    }, [user]);

    const handleLoginSubmit = () => {
        // Navigate to home immediately upon login submission
        navigate('/'); // Redirect to home page immediately
    };

    return (
        <GoogleOAuthProvider clientId="989487628694-ku7po9jejcpcqk5d8itqrrb0s22vlac0.apps.googleusercontent.com">
            <GoogleLogin setUser={setUser} onSubmit={handleLoginSubmit} />
            {user && (
              <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            )}
        </GoogleOAuthProvider>
    );
}

export default Login;


