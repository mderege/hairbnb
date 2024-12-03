

// export default Login;
import React, { useState } from "react";
import { useContext } from "react"; 
import { UserContext } from "./UserContext";
import { login } from "../auth";  // Assuming this function handles authentication
import { useOutletContext, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
//import '../Login/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext); // Get setUser from context
  const navigate = useNavigate(); // useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password); // Assuming the login function returns user object
      console.log(user)
      console.log("THIS IS USER")
      setUser(user);  // Set the user in context
      
      // Check user role and redirect accordingly
      if (user.level === "Stylist") {
        navigate("/ProfilePage"); // Redirect to stylist dashboard
      } else if (user.level === "Customer") {
        navigate("/client-dashboard"); // Redirect to client dashboard
      } else {
        // Fallback, in case the role is not recognized
        alert("Unrecognized role");
      }

      alert("Successfully logged in!");
    } catch (err) {
        console.error("Login error:", err);
      setError(err.message);  // Handle login errors
    }
  };

  return (
    <div className="login-container max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back!</h1>
        <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your email"
                />
            </div>

            {/* Password Input */}
            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your password"
                />
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                    Login
                </button>
            </div>
        </form>

        {/* Error Message */}
        {error && (
            <p className="mt-4 text-sm text-red-500 text-center">
                {error}
            </p>
        )}
    </div>
  );
};

export default Login;
