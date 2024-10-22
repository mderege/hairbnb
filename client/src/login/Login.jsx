import React, { useEffect, useState } from 'react';
import GoogleLoginComponent from "../components/GoogleLogin";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "../login/Login.css"; // Import the CSS file for styling

function Login() {
    const [user, setUser] = useState(null); // Ensure useState is used correctly
    const navigate = useNavigate(); // Initialize navigate for redirection

    useEffect(() => {
        if (user) {
            console.log("User authenticated:", user);
        } else {
            console.log("Not quite authenticated lol");
        }
    }, [user]);

    const handleLoginSubmit = () => {
        // Navigate to home immediately upon login submission
        navigate('/'); // Redirect to home page immediately
    };

    return (
            <div className="login-container">
                <GoogleLoginComponent setUser={setUser} onSubmit={handleLoginSubmit} />
                {user && (
                  <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                  </div>
                )}
            </div>
    );
}

export default Login;
