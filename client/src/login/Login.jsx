// Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import "../login/Login.css"; // Ensure this path is correct

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         // Simulate a successful login with a hardcoded user ID
//         const hardcodedUserId = "67333712c31376a1bd7f3d6a"; // Replace this with an actual user ID after implementing login logic
//         navigate(`/ProfilePage`);    
//     };

//     return (
//         <div className="login-container">
//             <h2 className="login-title">Login</h2>
//             <form onSubmit={handleLoginSubmit} className="login-form">
//                 <div className="form-group">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                         className="form-input"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         className="form-input"
//                     />
//                 </div>
//                 {/* {error && <p className="error-message">{error}</p>} */}
//                 <button type="submit" className="login-button">Login</button>
//             </form>
//         </div>
//     );
// }

// client/src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

fetch('https://hairbnbbe-9f629b6e0127.herokuapp.com/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'sim@example.com', password: 'sim1234' }),
    credentials: 'include' // Send cookies or authorization headers
});

const Login = ({ setLoggedInUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');

    const { email, password } = formData;

    const onChange = (e) => 
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                'https://hairbnbbe-9f629b6e0127.herokuapp.com/api/auth/login',
                { email, password }
            );
            localStorage.setItem('token', res.data.token);
            setLoggedInUser(email);

            // Set success message
            setMessage('Logged in successfully');
        } catch (err) {
            console.error(err.response.data);
            // Set error message
            setMessage(err.response.data + 'Failed to login - wrong credentials');
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
};

export default Login;