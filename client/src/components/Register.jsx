// import React, { useState } from "react";
// import { register } from "../auth";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await register(email, password);
//       console.log("Registered user:", user);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleRegister}>
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
//         <button type="submit">Register</button>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { register } from "../auth";
//import '../Login/Login.css';

const Register = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await register(email, password);
      setUser(user);
      alert("Successfully registered!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Join Hairbnb</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit" className="google-login-button">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
