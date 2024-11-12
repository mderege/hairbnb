// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../login/Login.css"; // Ensure this path is correct

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        // Simulate a successful login with a hardcoded user ID
        const hardcodedUserId = "67333712c31376a1bd7f3d6a"; // Replace this with an actual user ID after implementing login logic
        navigate(`/ProfilePage`);    
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLoginSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                {/* {error && <p className="error-message">{error}</p>} */}
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default Login;