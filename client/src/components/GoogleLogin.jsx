// import React, { useCallback } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../api";
// import '../login/Login.css'; // Import the CSS file for styling

// const GoogleLoginComponent = ({ setUser, onSubmit }) => {
//     const responseGoogle = useCallback(async (authResult) => {
//         try {
//             if (authResult["code"]) {
//                 const result = await googleAuth(authResult.code);
//                 setUser(result.data.data.user); // Set user state
//                 alert("Successfully logged in");
//             } else {
//                 console.log(authResult);
//                 throw new Error(authResult);
//             }
//         } catch (e) {
//             console.error("Error during login:", e);
//         } finally {
//             onSubmit(); // Ensure navigation occurs after the login attempt
//         }
//     }, [setUser, onSubmit]);

//     const googleLogin = useGoogleLogin({
//         onSuccess: responseGoogle,
//         onError: responseGoogle,
//         flow: "auth-code",
//     });

//     const handleClick = () => {
//         googleLogin(); // Attempt to log in
//     };

//     return (
//         <div className="login-container">
//             <h1>Welcome Back!</h1>
//             <p>Please sign in to continue.</p>
//             <button className="google-login-button" onClick={handleClick}>
//                 Sign in with Google
//             </button>
//         </div>
//     );
// };

// export default GoogleLoginComponent;


// import React, { useState } from "react";
// import { login } from "../auth";
// import { useOutletContext } from "react-router-dom";
// import '../Login/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setUser } = useOutletContext();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await login(email, password);
//       setUser(user);
//       alert("Successfully logged in!");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome Back!</h1>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="google-login-button">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { login } from "../auth";  // Assuming this function handles authentication
import { useOutletContext, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import '../Login/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useOutletContext(); // Get setUser from context
  const navigate = useNavigate(); // useNavigate for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password); // Assuming the login function returns user object
      console.log(user)
      setUser(user);  // Set the user in context
      
      // Check user role and redirect accordingly
      if (user.level === "stylist") {
        navigate("/ProfilePage"); // Redirect to stylist dashboard
      } else if (user.level === "client") {
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
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="google-login-button">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
