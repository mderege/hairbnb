# .gitignore

```
node_modules/
.vercel

```

# client\.gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.vercel

```

# client\eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

```

# client\index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/hairbnblogonobackground.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HairBnB</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# client\Login\Login.css

```css
/* LoginPage.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    margin: auto;
}

h1 {
    margin-bottom: 10px;
    color: #333;
}

p {
    margin-bottom: 20px;
    color: #666;
}

.google-login-button {
    background-color: #4285F4;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.google-login-button:hover {
    background-color: #357ae8;
}
```

# client\Login\Login.js

```js
import React from 'react';
import LoginPage from './LoginPage';

function App() {
    const setUser  = (user) => {
        console.log(user);
        window.location.href = '/'
    };

    return (
        <div>
            <LoginPage setUser ={setUser} />
        </div>
    );
}

export default App;
```

# client\package.json

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-oauth/google": "^0.12.1",
    "@srexi/purecounterjs": "^1.5.0",
    "aos": "^2.3.4",
    "axios": "^1.7.7",
    "mongodb": "^6.10.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "node": "20.17.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@testing-library/jest-dom": "^6.6.2",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.13",
    "@types/mocha": "^10.0.9",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.7.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "jest": "^29.7.0",
    "postcss": "^8.4.47",
    "react-router-dom": "^6.26.2",
    "supertest": "^7.0.0",
    "tailwindcss": "^3.4.11",
    "vite": "^5.4.10"
  }
}

```

# client\postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# client\public\hairbnblogo.svg

This is a file of the type: SVG Image

# client\public\hairbnblogonobackground.png

This is a binary file of the type: Image

# client\public\vite.svg

This is a file of the type: SVG Image

# client\README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

# client\src\api.js

```js

import axios from 'axios';

const api = axios.create({
   
    baseURL: "https://hairbnbbe-9f629b6e0127.herokuapp.com/api/v1",
    withCredentials: true,

});

export const googleAuth = (code) => api.get(`/auth/google?code=${code}`);
```

# client\src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# client\src\App.jsx

```jsx
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

```

# client\src\assets\react.svg

This is a file of the type: SVG Image

# client\src\components\About.jsx

```jsx
// About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="about section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>About Us</h3>
            <h2>
              We're like Airbnb, but for hairdressers, hair stylists, and barbers.
            </h2>
            <p>
              You deserve the haircut or style you want. Our platform lets you browse through, search, filter, and look at the work of stylists in your area, helping you understand which will be the best fit for you. Oh - and you can see availability and book appointments directly through the app.
            </p>
            <a href="#" className="read-more">
              <span>Browse stylists in your area</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              {/* Icon Box 1 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Free to use</h3>
                  <p>
                    Hairbnb never adds hidden fees or requires a subscription to book
                  </p>
                </div>
              </div>
              {/* Icon Box 2 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-clipboard-pulse"></i>
                  <h3>Simple browsing</h3>
                  <p>
                    We make it easy to search and filter for the services you want
                  </p>
                </div>
              </div>
              {/* Icon Box 3 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-command"></i>
                  <h3>Direct management</h3>
                  <p>
                    Appointments, re-bookings, and cancellations are all done here, on the site
                  </p>
                </div>
              </div>
              {/* Icon Box 4 */}
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-graph-up-arrow"></i>
                  <h3>Reviews</h3>
                  <p>
                    See photos of work done in the past so you know what you'll get
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

```

# client\src\components\AvailabilityProfile.jsx

```jsx

```

# client\src\components\Contact.jsx

```jsx
// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              {/* Contact Info Items */}
              {/* Address */}
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div>
              {/* ... other info items */}
            </div>
          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                {/* Form Fields */}
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                {/* ... other form fields */}
                <div className="col-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

```

# client\src\components\Footer.jsx

```jsx
// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          {/* Footer About */}
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">Hairbnb</span>
            </a>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter"></i></a>
              {/* ... other social icons */}
            </div>
          </div>
          {/* ... other footer sections */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

```

# client\src\components\GoogleLogin.jsx

```jsx
import React, { useCallback } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import '../login/Login.css'; // Import the CSS file for styling

const GoogleLoginComponent = ({ setUser, onSubmit }) => {
    const responseGoogle = useCallback(async (authResult) => {
        try {
            if (authResult["code"]) {
                const result = await googleAuth(authResult.code);
                setUser(result.data.data.user); // Set user state
                alert("Successfully logged in");
            } else {
                console.log(authResult);
                throw new Error(authResult);
            }
        } catch (e) {
            console.error("Error during login:", e);
        } finally {
            onSubmit(); // Ensure navigation occurs after the login attempt
        }
    }, [setUser, onSubmit]);

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    const handleClick = () => {
        googleLogin(); // Attempt to log in
    };

    return (
        <div className="login-container">
            <h1>Welcome Back!</h1>
            <p>Please sign in to continue.</p>
            <button className="google-login-button" onClick={handleClick}>
                Sign in with Google
            </button>
        </div>
    );
};

export default GoogleLoginComponent;

```

# client\src\components\Header.jsx

```jsx
// Header.js
import React from 'react';

function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src="assets/img/hairbnblogo.svg" alt="" />
          <h1 className="sitename">Hairbnb</h1><span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>
      </div>
    </header>
  );
}

export default Header;

```

# client\src\components\HeroSection.jsx

```jsx
// HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Hairbnb</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Helping you get the haircut or stylist you want
            </p>
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            {/* Sign-up form */}
            <form action="forms/newsletter.php" method="post" className="php-email-form">
              {/* <div className="sign-up-form">
                <input type="email" name="email" />
                <input type="submit" value="Sign up / Log in" />
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

```

# client\src\components\ModifyRecord.jsx

```jsx

```

# client\src\components\Navbar.jsx

```jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 mb-6">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* Logo and Site Name */}
        <NavLink to="/" className="flex items-center">
          <img
            alt="HairBnB logo"
            className="h-10 ml-4"
            src="/hairbnblogonobackground.png"
          />
          <h1 className="text-2xl font-bold ml-2">HairBnB</h1>
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        <NavLink
            to="/landing"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold text-lg transition ease-in duration-100" : "text-gray-600 hover:text-pink-500 font-semibold text-lg transition ease-in duration-100"
            }
          >
            Stylists
          </NavLink>
        </div>
        <div className="flex items-center">
          <NavLink
            to="/ProfilePage"
            className="bg-pink-500 shadow-md text-white px-4 py-2 rounded-full mr-4 hover:bg-pink-600 transition ease-in duration-100"
          >
            My Profile
          </NavLink>
        </div>

        {/* Get Started Button */}
        <div className="flex items-center">
          <NavLink
            to="/create"
            className="bg-pink-500 shadow-md text-white px-4 py-2 rounded-full mr-4 hover:bg-pink-600 transition ease-in duration-100"
          >
            Get Started / Log In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

```

# client\src\components\ProfilePage.jsx

```jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProfilePage = () => {
//   const { userId } = useParams(); // Retrieve userId from the URL
//   const [profile, setProfile] = useState(null);
//   const [appointments, setAppointments] = useState({
//     upcoming: [],
//     past: [],
//   });

//   useEffect(() => {
//     console.log("User ID from URL:", userId); // Log to check if userId is correct

//     const fetchProfile = async () => {
//       try {
//         // Use userId instead of id
//         const response = await axios.get(`https://hairbnbbe-9f629b6e0127.herokuapp.com/profile/${userId}`);
//         console.log("API Response:", response);

//         if (response.status === 200) {
//           const profileData = response.data;
//           setProfile(profileData);

//           const currentTime = new Date();
//           const upcomingAppointments = profileData.appointments.filter(
//             (appt) => new Date(appt.time) > currentTime
//           );
//           const pastAppointments = profileData.appointments.filter(
//             (appt) => new Date(appt.time) <= currentTime
//           );

//           setAppointments({
//             upcoming: upcomingAppointments,
//             past: pastAppointments,
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     if (userId) { // Ensure userId is defined before fetching
//       fetchProfile();
//     }
//   }, [userId]);

//   const handleCancel = async (appointmentId) => {
//     try {
//       await axios.delete(`https://hairbnbbe-9f629b6e0127.herokuapp.com/appointments/${appointmentId}`);
//       setAppointments((prevAppointments) => ({
//         ...prevAppointments,
//         upcoming: prevAppointments.upcoming.filter(
//           (appt) => appt.id !== appointmentId
//         ),
//       }));
//       alert('Appointment canceled');
//     } catch (error) {
//       console.error('Error cancelling appointment:', error);
//     }
//   };

//   if (!profile) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
//         {profile.name}'s Profile
//       </h1>
//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Info</h2>
//         <p><strong>Email:</strong> {profile.email}</p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
//         {appointments.upcoming.length > 0 ? (
//           <ul className="space-y-4">
//             {appointments.upcoming.map((appointment) => (
//               <li
//                 key={appointment.id}
//                 className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
//               >
//                 <span>{new Date(appointment.time).toLocaleString()}</span>
//                 <button
//                   onClick={() => handleCancel(appointment.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-lg"
//                 >
//                   Cancel
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No upcoming appointments.</p>
//         )}
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Past Appointments</h2>
//         {appointments.past.length > 0 ? (
//           <ul className="space-y-4">
//             {appointments.past.map((appointment) => (
//               <li key={appointment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                 {new Date(appointment.time).toLocaleString()}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No past appointments.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ProfilePage;

// ProfilePage.jsx
import React from 'react';

const ProfilePage = () => {
    // Hardcoded data for Simone
    const user = {
        id: "67333712c31376a1bd7f3d6a",
        name: "Simone",
        personalStatement: "Hello, I'm Simone",
        level: "Stylist",
        email: "sim@gmail.com",
        password: "sim123456",
        preferredService: "",
        hairType: "",
        stylistHairstylesOffered: [
            { name: "Classic Bob Cut", time: 30, price: 45 },
        ],
        stylistCertification: "Licensed Color",
        yearsExperience: "5 years",
        stylistAvailabilities: ["Monday 10:00 AM", "Wednesday 3:00 PM"]
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <header className="relative h-32 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-6 flex items-center justify-center shadow-lg">
                <h1 className="text-5xl font-bold text-white">
                    Welcome, {user.name}!
                </h1>
            </header>

            {/* User Profile Section */}
            <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Profile Information</h2>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Level:</strong> {user.level}</p>
                <p><strong>Personal Statement:</strong> {user.personalStatement}</p>
                <p><strong>Certification:</strong> {user.stylistCertification}</p>
                <p><strong>Experience:</strong> {user.yearsExperience}</p>
            </section>

            {/* Services Offered Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hairstyles Offered</h2>
                {user.stylistHairstylesOffered.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {user.stylistHairstylesOffered.map((style, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800">{style.name}</h3>
                                <p>Time: {style.time} mins</p>
                                <p>Price: ${style.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No services listed.</p>
                )}
            </section>

            {/* Availability Section */}
            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Availability</h2>
                {user.stylistAvailabilities.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2">
                        {user.stylistAvailabilities.map((time, index) => (
                            <li key={index} className="text-gray-600">{time}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No available slots listed.</p>
                )}
            </section>
        </div>
    );
};

export default ProfilePage;
```

# client\src\components\Record.jsx

```jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Record() {
  const [form, setForm] = useState({
    name: "",
    personalStatement: "",
    level: "",
    email: "",
    preferredService: "",
    hairType: "",
    password: "",
    stylistHairstylesOffered: [],
    stylistCertification: "",
    yearsExperience: "",
    stylistAvailabilities: [],
  });
  // const [isNew, setIsNew] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const [hairstyleInput, setHairstyleInput] = useState({
    name: "",
    time: "",
    price: "",
  });

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined; 
      if(!id) return;
      const response = await fetch(
        `https://hairbnb.app/record/${params.id.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  const handleAddSlot = () => {
    if (selectedSlot.trim() != "") {
      console.log(selectedSlot);
      updateForm({ stylistAvailabilities: [...form.stylistAvailabilities, selectedSlot] });
      setSelectedSlot(""); // Clear input field after adding
    } else {
      alert("Please select a valid time slot.");
    }
  }

  const handleRemoveSlot = (slotToRemove) => {
    const updatedSlots = form.stylistAvailabilities.filter(
      (slot) => slot !== slotToRemove
    );
    updateForm({ stylistAvailabilities: updatedSlots });
  }

  const handleAddHairstyle = () => {
    const { name, time, price } = hairstyleInput;
    if (name && time && price) {
      const newHairstyle = {
        name,
        time: parseInt(time),
        price: parseFloat(price),
      };
      updateForm({
        stylistHairstylesOffered: [...form.stylistHairstylesOffered, newHairstyle],
      });
      setHairstyleInput({ name: "", time: "", price: "" }); // Reset input fields
    } else {
      alert("Please fill in all hairstyle fields.");
    }
  };

  const handleRemoveHairstyle = (indexToRemove) => {
    const updatedHairstyles = form.stylistHairstylesOffered.filter(
      (_, index) => index !== indexToRemove
    );
    updateForm({ stylistHairstylesOffered: updatedHairstyles });
  };
  
  

async function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.level) {
      alert("Please fill out all required fields.");
      return; // Exit the function if validation fails
    }
    const person = { ...form };
    try {
      const response = await fetch(`https://hairbnbbe-9f629b6e0127.herokuapp.com/record${params.id ? "/"+params.id : ""}`, {
        method: `${params.id ? "PATCH" : "POST"}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      setForm({ name: "", 
        personalStatement: "", 
        level: "" , 
        email: "", 
        preferredService: "", 
        hairType: "", 
        password: "", 
        stylistHairstylesOffered: [],
        stylistCertification: "",
        yearsExperience: "",
        stylistAvailabilities: [],
      });
      navigate("/");
    }
  }
    // New function to navigate to the login page
    const handleLoginNavigate = () => {
      navigate("/login");
    };

   return (
    <div className="max-w-4xl mx-auto p-6 bg-white border-2 border-gray-100 rounded-lg shadow-lg mt-2">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {params.id ? "Edit Profile" : "Create Profile"}
      </h2>
      <form onSubmit={onSubmit}>
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Personal Information
            </h3>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="First Last"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="yourname@example.com"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="string"
              id="password"
              className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Create Password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="level"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Role
            </label>
            <select
              id="level"
              className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              value={form.level}
              onChange={(e) => updateForm({ level: e.target.value })}
              required
            >
              <option value="">Select Role</option>
              <option value="Stylist">Stylist</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
        </div>

        {/* Stylist Details Section */}
        {form.level === "Stylist" && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Stylist Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label
                  htmlFor="personalStatement"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Personal Statement (max 200 characters)
                </label>
                <textarea
                  id="personalStatement"
                  className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Tell us about yourself..."
                  value={form.personalStatement}
                  onChange={(e) => updateForm({ personalStatement: e.target.value })}
                  rows={4}
                  maxLength={200} // Limit to 200 characters
                />
                <div className="text-sm text-gray-500">
                  {form.personalStatement.length}/200 characters
                </div>
              </div>
              <div>
                <label
                  htmlFor="stylistCertification"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Certifications
                </label>
                <input
                  type="text"
                  id="stylistCertification"
                  className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., Licensed Barber"
                  value={form.stylistCertification}
                  onChange={(e) =>
                    updateForm({ stylistCertification: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="yearsExperience"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Years of Experience
                </label>
                <input
                  type="number"
                  id="yearsExperience"
                  className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., 5"
                  value={form.yearsExperience}
                  onChange={(e) => updateForm({ yearsExperience: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="Stylist Availability"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Stylist Availabilities
                </label>
                <input
                  type="datetime-local"
                  id="stylistAvailability"
                  className="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddSlot}
                  className="mt-4 bg-pink-500 text-white py-1 px-4 rounded-md"
                  >
                  Add Slot
                </button>
              </div>
              <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Add a Hairstyle
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Style Name"
                    value={hairstyleInput.name}
                    onChange={(e) =>
                      setHairstyleInput({ ...hairstyleInput, name: e.target.value })
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <input
                    type="number"
                    placeholder="Time (mins)"
                    value={hairstyleInput.time}
                    onChange={(e) =>
                      setHairstyleInput({ ...hairstyleInput, time: e.target.value })
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <input
                    type="number"
                    placeholder="Price ($)"
                    value={hairstyleInput.price}
                    onChange={(e) =>
                      setHairstyleInput({ ...hairstyleInput, price: e.target.value })
                    }
                    className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddHairstyle}
                  className="mt-4 bg-pink-500 text-white py-1 px-4 rounded-md"
                >
                  Add Hairstyle
                </button>
              </div>
              <div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Selected Slots:</h4>
                  {form.stylistAvailabilities.length === 0 && (
                    <p>No slots added </p>
                  )}
                  {form.stylistAvailabilities.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {form.stylistAvailabilities.map((slot) => (
                        <li key={slot} className="flex justify-between">
                          <span>{new Date(slot).toLocaleString()}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveSlot(slot)}
                            className="text-red-500"
                          >
                           Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Hairstyles Offered:</h4>
                {form.stylistHairstylesOffered.length === 0 && <p>No hairstyles added.</p>}
                {form.stylistHairstylesOffered.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {form.stylistHairstylesOffered.map((style, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span>
                          {style.name} - {style.time} mins - ${style.price}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveHairstyle(index)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Customer Preferences Section */}
        {form.level === "Customer" && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Customer Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="hairType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Hair Type
                </label>
                <select
                  id="hairType"
                  className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-pink-500 focus:border-pink-500"
                  value={form.hairType}
                  onChange={(e) => updateForm({ hairType: e.target.value })}
                >
                  <option value="">Select Hair Type</option>
                  <option value="1A">1A</option>
                  <option value="1B">1B</option>
                  <option value="1C">1C</option>
                  <option value="2A">2A</option>
                  <option value="2B">2B</option>
                  <option value="2C">2C</option>
                  <option value="3A">3A</option>
                  <option value="3B">3B</option>
                  <option value="3C">3C</option>
                  <option value="4A">4A</option>
                  <option value="4B">4B</option>
                  <option value="4C">4C</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="preferredService"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Services
                </label>
                <input
                  type="text"
                  id="preferredService"
                  className="w-full border-gray-300 rounded-md shadow-sm p-1 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g., Haircut, Coloring"
                  value={form.preferredService}
                  onChange={(e) =>
                    updateForm({ preferredService: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-pink-500 text-white rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition"
          >
            Save Profile
          </button>
        </div>
      </form>

    {/* Login Button */}
    <div className="mt-4">
        <button
          type="button"
          onClick={handleLoginNavigate}
          className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
```

# client\src\components\RecordList.jsx

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import the hook


export default function RecordList() {
  const [records, setRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    distance: null,
    styleName: "",
    priceMin: null,
    priceMax: null,
    availability: null,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://hairbnbbe-9f629b6e0127.herokuapp.com/record/`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
  // }, [records.length]);
  }, []);

  const toggleFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  // async function deleteRecord(id) {
  //   await fetch(`http://localhost:5050/record/${id}`, {
  //     method: "DELETE",
  //   });
  //   const newRecords = records.filter((el) => el._id !== id);
  //   setRecords(newRecords);
  // }

// const filteredRecords = records.filter((record) =>
//   record.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.personalStatement?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   record.level?.toLowerCase().includes(searchQuery.toLowerCase())
// );

const filteredRecords = records
  .filter((record) =>
    record.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.personalStatement?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    record.email?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((record) => {
    if (filters.styleName) {
      const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
        ? record.stylistHairstylesOffered
        : [];
      const matchesStyle = offeredStyles.some((style) =>
        style.name.toLowerCase().includes(filters.styleName.toLowerCase())
      );
      if (!matchesStyle) {
        return false;
      }
    }
    // Price filter
    if (filters.priceMin !== null || filters.priceMax !== null) {
      const minPrice = parseFloat(filters.priceMin) || 0;
      const maxPrice = parseFloat(filters.priceMax) || Infinity;
      const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
        ? record.stylistHairstylesOffered
        : [];
      const matchesPrice = offeredStyles.some((style) => {
        const price = parseFloat(style.price);
        return price >= minPrice && price <= maxPrice;
      });
      if (!matchesPrice) {
        return false;
      }
    }

    // if (filters.priceMin !== undefined && filters.priceMax !== undefined) {
    //   return record.price >= filters.priceMin && record.price <= filters.priceMax;
    // }
    // // Availability filter
    // if (filters.availability) {
    //   // return record.stylistAvailabilities?.some(time => 
    //   //   // Logic to match availability with the filter criteria
    //   // );
    // }
    return true; // If no specific filter is applied, include the record
  }
);


const SalonCard = ({ record }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleProfileClick = () => {
    // Redirect to the stylist's profile page
    navigate(`/stylist/${record._id}`);
  };

  const handleBookingClick = () => {
    // Redirect to the booking page for the stylist
    navigate(`/stylist/${record._id}/book`);
  };

  const offeredStyles = Array.isArray(record.stylistHairstylesOffered)
    ? record.stylistHairstylesOffered
    : [];

  
  return (
  <div className="bg-white-100 p-4 rounded-xl shadow-md flex items-center mb-6 border-2 border-gray-100 hover:bg-gray-100 transition ease-in-out duration-300">
    <div className="w-1/3">
      {/* Replace with actual image URL if available */}
      <img src={'https://www.salonsdirect.com/blog/wp-content/uploads/2020/11/A-Guide-to-Going-Freelance-as-a-Hairdresser-Slice.jpg'} className="rounded-lg object-cover" alt={record.name} />
    </div>
    <div className="ml-4 w-2/3">
      <h3 onClick={handleProfileClick} className="font-semibold text-xl text-gray-800 hover:cursor-pointer">{record.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{record.personalStatement || 'No personal statement provided'}</p>
      <div className="mt-4 space-y-1 text-sm text-gray-600">
      <div className="flex justify-between">
          <span>Experience:</span>
          <span className="font-medium">{record.yearsExperience ? `${record.yearsExperience} years` : 'N/A'}</span>
      </div>
      <div className="flex justify-between">
        <span>Hairstyles Offered:</span>
        {/* <span className="font-medium">{record.stylistHairstylesOffered.name || 'N/A'}</span> */}
        {offeredStyles.length > 0 ? (
            <ul className="space-y-0">
              {offeredStyles.map((style, index) => (
                <li key={index}>{style.name}</li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>
      {/* Edit and Delete buttons */}
      <div className="flex gap-4 mt-4">
        {/* <Link
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          to={`/edit/${record._id}`}
        >
          Edit
        </Link>
        <button
          className="text-red-600 hover:text-red-800 font-medium text-sm"
          type="button"
          onClick={() => deleteRecord(record._id)}
        >
          Delete
        </button> */}
      </div>
    </div>
  </div>
  );
};


  // This method will map out the records on the table
  function recordList() {
    const stylistRecords = filteredRecords.filter((record) => record.level === "Stylist");
    return stylistRecords.map((record) => (
      <SalonCard
        record={record}
        key={record._id}
      />
    ));
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-white w-1/3 px-2 overflow-y-auto ">
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Logo placeholder */}
          {/* <img src="logo.png" alt="Logo" className="w-10 h-10"/> */}
        </div>
        {/* Search Bar */}
        <div className="relative mb-2 filter drop-shadow-md">
          <input
            type="text"
            className="mt-2 w-full p-3 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none flex items-center"
            placeholder="Search for stylists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['distance', 'price', 'reviews', 'availability'].map(filter => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`p-2 px-4 ${filters[filter] ? "bg-pink-500 text-white" : "bg-gray-200"} border-2 border-gray-300 rounded-full text-sm transition ease-linear hover:bg-pink-700 hover:text-white`}
              // p-2 px-4 bg-gray-200 border-2 border-gray-300 rounded-full text-sm filter drop-shadow-md hover:bg-pink-500 hover:text-white transition
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div> */}
        {/* <div className="space-y-4 mb-6"> */}
        <div className="flex mb-2 justify-center">
        <div className="relative w-full max-w-md justify-center">
      <button
        onClick={toggleDropdown}
        className="p-2 px-4 bg-gray-100 border-2 border-gray-300 rounded-full text-base filter drop-shadow-md hover:bg-pink-500 hover:text-white transition transition-all w-full duration-300 ease-in-out w-full text-left flex items-center justify-center"
      >
        Filters
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 space-y-4 z-10">
          {/* Distance Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Distance (mi)</label>
            <input
              type="range"
              min="0"
              max="20"
              value={filters.distance || 0}
              onChange={(e) => setFilters({ ...filters, distance: e.target.value })}
              className="w-full"
            />
            <span>{filters.distance} miles</span>
          </div>

          {/* Styles Offered Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Search Styles Offered</label>
            <input
              type="text"
              placeholder="e.g., Bob, Braids"
              value={filters.styleName || ''}
              onChange={(e) => setFilters({ ...filters, styleName: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {/* Price Range Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Price Range</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                value={filters.priceMin || ''}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg w-1/2"
              />
              <input
                type="number"
                placeholder="Max"
                value={filters.priceMax || ''}
                onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                className="p-2 border border-gray-300 rounded-lg w-1/2"
              />
            </div>
          </div>

          {/* Available Times Filter */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2 text-gray-700">Available Times</label>
            <input
              type="datetime-local"
              value={filters.availability || ''}
              onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
          </div>

          {/* Apply/Reset Filters (Optional) */}
          <div className="flex justify-between">
            <button
              onClick={() => setFilters({ 
                distance: null, 
                styleName: "", 
                priceMin: null, 
                priceMax: null, 
                availability: null })}
              className="p-2 px-4 bg-gray-300 rounded-lg text-sm hover:bg-gray-400 transition"
            >
              Reset
            </button>
            <button
              onClick={toggleDropdown}
              className="p-2 px-4 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>

        {/* Salon Listings */}
        <div className="space-y-6">
          {recordList()}
        </div>
      </aside>
      {/* Map Section */}
      <div className="w-2/3 relative rounded-lg overflow-hidden ml-2 shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128590.6922695734!2d-86.7844437!3d36.1744653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864665c6ec7e091%3A0x7416f4bb708c4034!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2sus!4v1697980411601" // Replace with your map embed link
          width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
        </iframe>
      </div>
    </div>
  );
}

```

# client\src\components\Services.jsx

```jsx
// Services.js
import React from 'react';

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Use any of our features to find the hair service you deserve</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Service Item 1 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-briefcase"></i>
              </div>
              <div>
                <h4 className="title">
                  <a href="#" className="stretched-link">Location Search</a>
                </h4>
                <p className="description">
                  See hair services near you, or search for services in a different area
                </p>
              </div>
            </div>
          </div>
          {/* Repeat for other service items with appropriate content */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

export default Services;

```

# client\src\components\SignUp.jsx

```jsx

```

# client\src\components\StylingPage.jsx

```jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StylistPage = () => {
  const { id } = useParams(); // Get the stylist's ID from the URL
  const [stylist, setStylist] = useState(null);
  // const [posts, setPosts] = useState([]); // might no longer be necessary
  const [reviews, setReviews] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchStylist = async () => {
      try {
        const response = await fetch(`https://hairbnbbe-9f629b6e0127.herokuapp.com/record/${id}`);
        if (!response.ok) {
          console.error('Failed to fetch stylist data');
          return;
        }
        const stylistData = await response.json();
        setStylist(stylistData);

        // Map stylistAvailabilities to bookings
        const availableTimes = stylistData.stylistAvailabilities.map((timeString, index) => ({
          id: index + 1,
          time: new Date(timeString).toLocaleString('en-US', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }),
        }));

        setBookings(availableTimes);
        console.log('Bookings:', availableTimes); // Debug output
      } catch (error) {
        console.error('Error fetching stylist data:', error);
      }
    };

    fetchStylist(); // Fetch stylist details on component mount

    // Sample data for posts and reviews (You might want to replace this with a real API call)
    // setPosts([
    //   { id: 1, 
    //     image: "https://live-essnc.s3.amazonaws.com/uploads/2024/06/sleek-blunt-bob.png", 
    //     description: "Classic Bob Cut", 
    //     price: 20 },
    //   { id: 2, 
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLuvLiv6FufJ1hBdu2VWyzrHR48H4rErCJIA&s", 
    //     description: "Layered Hair", 
    //     price: 30 },
    // ]);

    setReviews([
      { id: 1, name: "Jane Doe", rating: 5, comment: "Amazing experience!" },
      { id: 2, name: "John Smith", rating: 4, comment: "Very professional!" },
    ]);

  }, [id]);

  const sendEmail = async () => {
    try {
      const response = await axios.post("https://hairbnbbe-9f629b6e0127.herokuapp.com/api/sendmail", {
        email,
        bookingTime: selectedTime,
        stylistName: stylist.name
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleBooking = () => {
    if (selectedTime) {
      alert(`You've booked a slot at ${selectedTime}`);
      // Remove the booked time from the bookings array
      setBookings(bookings.filter((booking) => booking.time !== selectedTime));
      sendEmail();
      setSelectedTime(null); // Clear the selected time
    } else {
      alert("Please select a time.");
    }
  };

  if (!stylist) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="relative h-32 bg-gradient-to-r rounded-lg mb-6 from-pink-500 to-red-500 flex items-center justify-center shadow-xl">
        <h1 className="text-center text-5xl font-bold text-white">
          {stylist.name}'s Page
        </h1>
      </header>

      {/* Stylist Profile Section */}
      <section className="mb-8 bg-white border-2 border-gray-100 rounded-lg shadow-xl p-8">
          <div className="flex flex-col md:flex-row md: items-center items-center md:justify-center">
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200 flex-shrink-0">
              <img
                src="https://via.placeholder.com/150" // Replace with stylist's image if available
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Profile Details */}
            <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left max-w-md">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{stylist.name}</h2>
              <p className="text-gray-600">{stylist.personalStatement}</p>
              <div className="mt-4 space-y-2">
                <p><strong>Experience:</strong> {stylist.yearsExperience || 'N/A'} years</p>
                <p><strong>Certifications:</strong> {stylist.stylistCertification || 'N/A'}</p>
                <p><strong>Email:</strong> {stylist.email || 'N/A'}</p>
              </div>
            </div>
          </div>
        </section>

      {/* Stylist Portfolio Section */}
      <section className="border-none mb-0 pb-4 pt-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Hairstyles Offered</h2>
          {Array.isArray(stylist.stylistHairstylesOffered) && stylist.stylistHairstylesOffered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stylist.stylistHairstylesOffered.map((style, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              // src="https://via.placeholder.com/150" // Replace with actual image if available
              src="https://live-essnc.s3.amazonaws.com/uploads/2024/06/sleek-blunt-bob.png" // Replace with actual image if available
              alt={style.name}
              className="w-full h-60 object-cover"
            />
             <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{style.name}</h3>
                <p className="text-gray-600">Time: {style.time} mins</p>
                <p className="text-gray-600">Price: ${style.price}</p>
              </div>
          </div>
        ))}
        </div>
      ) : (
        <p className="text-gray-600">No hairstyles offered.</p>
      )}     
      </section>

      {/* Customer Reviews Section */}
      <section className="mb-6 pt-4 pb-4">
        <h2 className="text-4xl font-semibold text-gray-700 mb-8">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border-1 border-black p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">{review.name}</p>
              <p className="text-yellow-500 mb-2">
                {`Rating: ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}`}
              </p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
          
      {/* Booking Times Section */}

      {/* <section className="mb-0 pt-4">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Available Booking Times</h2>
        {bookings.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-4">
            {bookings.map((booking) => (
              <label key={booking.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="bookingTime"
                  value={booking.time}
                  className="form-radio h-5 w-5 text-blue-600"
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <span className="text-gray-600">{booking.time}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No available booking times.</p>
        )}
        <button
          onClick={handleBooking}
          className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-200"
        >
          Book Now
        </button>
      </section> */}

      <section className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Book an Appointment</h2>
          {bookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {bookings.map((booking) => (
                <label key={booking.id} className="flex items-center gap-2 border-2 bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                  <input
                    type="radio"
                    name="bookingTime"
                    value={booking.time}
                    className="form-radio h-5 w-5 text-pink-500"
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <span className="text-gray-800">{booking.time}</span>
                </label>
              ))}
            </div>
          ) : (
            <p className="mb-8 text-gray-500 text-center">No available booking times.</p>
          )}
          {/* <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-pink-500"
            /> */}
            <button
              onClick={handleBooking}
              className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-md shadow-md hover:bg-pink-600 transition-colors duration-200"
            >
              Book Now
            </button>
          {/* </div> */}
        </section>


    </div>
  );
};

export default StylistPage;
```

# client\src\components\Team.jsx

```jsx
// Team.js
import React from 'react';

function Team() {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>We are a team of 4 students at Vanderbilt University.</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {/* Team Member 1 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src="assets/img/team/sean.jpeg" className="img-fluid" alt="" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter"></i></a>
                {/* ... other social icons */}
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Sean Onamade</h4>
              <span>Developer</span>
              <p>Sean is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div>
          {/* Repeat for other team members with appropriate content */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

export default Team;

```

# client\src\components\userInfo.jsx

```jsx

```

# client\src\homepage\assets\css\main.css

```css
/**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# Font & Color Variables
# Help: https://bootstrapmade.com/color-system/
--------------------------------------------------------------*/
/* Fonts */
:root {
  --default-font: "Open Sans",  system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Montserrat",  sans-serif;
  --nav-font: "Poppins",  sans-serif;
}

/* Global Colors - The following color variables are used throughout the website. Updating them here will change the color scheme of the entire website */
:root { 
  --background-color: #ffffff; /* Background color for the entire website, including individual sections */
  --default-color: #212529; /* Default color used for the majority of the text content across the entire website */
  --heading-color: #32353a; /* Color for headings, subheadings and title throughout the website */
  --accent-color: #e84545; /* Accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out */
  --surface-color: #ffffff; /* The surface color is used as a background of boxed elements within sections, such as cards, icon boxes, or other elements that require a visual separation from the global background. */
  --contrast-color: #ffffff; /* Contrast color for text, ensuring readability against backgrounds of accent, heading, or default colors. */
}

/* Nav Menu Colors - The following color variables are used specifically for the navigation menu. They are separate from the global colors to allow for more customization options */
:root {
  --nav-color: #3a3939;  /* The default color of the main navmenu links */
  --nav-hover-color: #e84545; /* Applied to main navmenu links when they are hovered over or active */
  --nav-mobile-background-color: #ffffff; /* Used as the background color for mobile navigation menu */
  --nav-dropdown-background-color: #ffffff; /* Used as the background color for dropdown items that appear when hovering over primary navigation items */
  --nav-dropdown-color: #3a3939; /* Used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-hover-color: #e84545; /* Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
}

/* Color Presets - These classes override global colors when applied to any section or element, providing reuse of the sam color scheme. */

.light-background {
  --background-color: #f9f9f9;
  --surface-color: #ffffff;
}

.dark-background {
  --background-color: #060606;
  --default-color: #ffffff;
  --heading-color: #ffffff;
  --surface-color: #252525;
  --contrast-color: #ffffff;
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# General Styling & Shared Classes
--------------------------------------------------------------*/
body {
  color: var(--default-color);
  background-color: var(--background-color);
  font-family: var(--default-font);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

/* PHP Email Form Messages
------------------------------*/
.php-email-form .error-message {
  display: none;
  background: #df1529;
  color: #ffffff;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .sent-message {
  display: none;
  color: #ffffff;
  background: #059652;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.php-email-form .loading {
  display: none;
  background: var(--surface-color);
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}

.php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--accent-color);
  border-top-color: var(--surface-color);
  animation: php-email-form-loading 1s linear infinite;
}

@keyframes php-email-form-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Global Header
--------------------------------------------------------------*/
.header {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 20px 0;
  transition: all 0.5s;
  z-index: 997;
}

.header .logo {
  line-height: 1;
}

.header .logo img {
  max-height: 36px;
  margin-right: 8px;
}

.header .logo h1 {
  font-size: 24px;
  margin: 0;
  font-weight: 600;
  color: var(--heading-color);
}

.header .logo span {
  color: var(--accent-color);
  font-size: 24px;
  font-weight: 600;
  padding-left: 3px;
}

.header .btn-getstarted,
.header .btn-getstarted:focus {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-size: 14px;
  padding: 8px 26px;
  margin: 0;
  border-radius: 4px;
  transition: 0.3s;
}

.header .btn-getstarted:hover,
.header .btn-getstarted:focus:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
}

@media (max-width: 1200px) {
  .header .logo {
    order: 1;
  }

  .header .btn-getstarted {
    order: 2;
    margin: 0 15px 0 0;
    padding: 6px 20px;
  }

  .header .navmenu {
    order: 3;
  }
}

.scrolled .header {
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.1);
}

/* Index Page Header
------------------------------*/
.index-page .header {
  --background-color: rgba(255, 255, 255, 0);
  --heading-color: #ffffff;
  --nav-color: rgba(255, 255, 255, 0.5);
  --nav-hover-color: #ffffff;
}

/* Index Page Header on Scroll
------------------------------*/
.index-page.scrolled .header {
  --background-color: #ffffff;
  --heading-color: #32353a;
  --nav-color: #3a3939;
  --nav-hover-color: #e84545;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Navmenu - Desktop */
@media (min-width: 1200px) {
  .navmenu {
    padding: 0;
  }

  .navmenu ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navmenu li {
    position: relative;
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-color);
    padding: 18px 15px;
    font-size: 16px;
    font-family: var(--nav-font);
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    transition: 0.3s;
  }

  .navmenu li:last-child a {
    padding-right: 0;
  }

  .navmenu li:hover>a,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-hover-color);
  }

  .navmenu .dropdown ul {
    margin: 0;
    padding: 10px 0;
    background: var(--nav-dropdown-background-color);
    display: block;
    position: absolute;
    visibility: hidden;
    left: 14px;
    top: 130%;
    opacity: 0;
    transition: 0.3s;
    border-radius: 4px;
    z-index: 99;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu .dropdown ul li {
    min-width: 200px;
  }

  .navmenu .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: var(--nav-dropdown-color);
  }

  .navmenu .dropdown ul a i {
    font-size: 12px;
  }

  .navmenu .dropdown ul a:hover,
  .navmenu .dropdown ul .active:hover,
  .navmenu .dropdown ul li:hover>a {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navmenu .dropdown .dropdown ul {
    top: 0;
    left: -90%;
    visibility: hidden;
  }

  .navmenu .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: -100%;
    visibility: visible;
  }
}

/* Navmenu - Mobile */
@media (max-width: 1199px) {
  .mobile-nav-toggle {
    color: var(--nav-color);
    font-size: 28px;
    line-height: 0;
    margin-right: 10px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .navmenu {
    padding: 0;
    z-index: 9997;
  }

  .navmenu ul {
    display: none;
    list-style: none;
    position: absolute;
    inset: 60px 20px 20px 20px;
    padding: 10px 0;
    margin: 0;
    border-radius: 6px;
    background-color: var(--nav-mobile-background-color);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 9998;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }

  .navmenu a,
  .navmenu a:focus {
    color: var(--nav-dropdown-color);
    padding: 10px 20px;
    font-family: var(--nav-font);
    font-size: 17px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    transition: 0.3s;
  }

  .navmenu a i,
  .navmenu a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.3s;
    background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  }

  .navmenu a i:hover,
  .navmenu a:focus i:hover {
    background-color: var(--accent-color);
    color: var(--contrast-color);
  }

  .navmenu a:hover,
  .navmenu .active,
  .navmenu .active:focus {
    color: var(--nav-dropdown-hover-color);
  }

  .navmenu .active i,
  .navmenu .active:focus i {
    background-color: var(--accent-color);
    color: var(--contrast-color);
    transform: rotate(180deg);
  }

  .navmenu .dropdown ul {
    position: static;
    display: none;
    z-index: 99;
    padding: 10px 0;
    margin: 10px 20px;
    background-color: var(--nav-dropdown-background-color);
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    box-shadow: none;
    transition: all 0.5s ease-in-out;
  }

  .navmenu .dropdown ul ul {
    background-color: rgba(33, 37, 41, 0.1);
  }

  .navmenu .dropdown>.dropdown-active {
    display: block;
    background-color: rgba(33, 37, 41, 0.03);
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav-toggle {
    color: #fff;
    position: absolute;
    font-size: 32px;
    top: 15px;
    right: 15px;
    margin-right: 0;
    z-index: 9999;
  }

  .mobile-nav-active .navmenu {
    position: fixed;
    overflow: hidden;
    inset: 0;
    background: rgba(33, 37, 41, 0.8);
    transition: 0.3s;
  }

  .mobile-nav-active .navmenu>ul {
    display: block;
  }
}

/*--------------------------------------------------------------
# Global Footer
--------------------------------------------------------------*/
.footer {
  color: var(--default-color);
  background-color: var(--background-color);
  font-size: 14px;
  padding-bottom: 50px;
  position: relative;
}

.footer .footer-top {
  padding-top: 50px;
}

.footer .footer-about .logo {
  margin-bottom: 25px;
}

.footer .footer-about .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-about .logo span {
  color: var(--heading-color);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: var(--heading-font);
}

.footer .footer-about p {
  font-size: 14px;
  font-family: var(--heading-font);
}

.footer .social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-right: 10px;
  transition: 0.3s;
}

.footer .social-links a:hover {
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.footer h4 {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  padding-bottom: 12px;
}

.footer .footer-links {
  margin-bottom: 30px;
}

.footer .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-links ul i {
  padding-right: 2px;
  font-size: 12px;
  line-height: 0;
}

.footer .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-links ul a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  display: inline-block;
  line-height: 1;
}

.footer .footer-links ul a:hover {
  color: var(--accent-color);
}

.footer .footer-contact p {
  margin-bottom: 5px;
}

.footer .copyright {
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
}

.footer .copyright p {
  margin-bottom: 0;
}

.footer .credits {
  margin-top: 6px;
  font-size: 13px;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  inset: 0;
  z-index: 999999;
  overflow: hidden;
  background: var(--background-color);
  transition: all 0.6s ease-out;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid #ffffff;
  border-color: var(--accent-color) transparent var(--accent-color) transparent;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1.5s linear infinite;
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Scroll Top Button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background-color: var(--accent-color);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: var(--contrast-color);
  line-height: 0;
}

.scroll-top:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
  color: var(--contrast-color);
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Global Page Titles & Breadcrumbs
--------------------------------------------------------------*/
.page-title {
  color: var(--default-color);
  background-color: var(--background-color);
  position: relative;
}

.page-title .heading {
  padding: 80px 0;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.page-title .heading h1 {
  font-size: 38px;
  font-weight: 700;
}

.page-title nav {
  background-color: color-mix(in srgb, var(--default-color), transparent 95%);
  padding: 20px 0;
}

.page-title nav ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.page-title nav ol li+li {
  padding-left: 10px;
}

.page-title nav ol li+li::before {
  content: "/";
  display: inline-block;
  padding-right: 10px;
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

/*--------------------------------------------------------------
# Global Sections
--------------------------------------------------------------*/
section,
.section {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 60px 0;
  scroll-margin-top: 98px;
  overflow: clip;
}

@media (max-width: 1199px) {

  section,
  .section {
    scroll-margin-top: 64px;
  }
}

/*--------------------------------------------------------------
# Global Section Titles
--------------------------------------------------------------*/
.section-title {
  text-align: center;
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  position: relative;
}

.section-title h2:before,
.section-title h2:after {
  content: "";
  width: 50px;
  height: 2px;
  background: var(--accent-color);
  display: inline-block;
}

.section-title h2:before {
  margin: 0 15px 10px 0;
}

.section-title h2:after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 80px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 44px;
  font-weight: 700;
}

.hero p {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  margin: 5px 0 0 0;
  font-size: 20px;
}

.hero .sign-up-form {
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
  background: color-mix(in srgb, var(--default-color) 5%, white 90%);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.hero .sign-up-form input[type=email] {
  background-color: transparent;
  border: 0;
  padding: 4px 10px;
  width: 100%;
}

.hero .sign-up-form input[type=email]:focus-visible {
  outline: none;
}

.hero .sign-up-form input[type=submit] {
  border: 0;
  box-shadow: none;
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  padding: 8px 20px 10px 20px;
  border-radius: 7px;
  color: var(--contrast-color);
  transition: 0.3s;
}

.hero .sign-up-form input[type=submit]:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }
}

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.about .content h3 {
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  padding: 10px 20px;
  background: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
  border-radius: 7px;
  display: inline-block;
}

.about .content h2 {
  font-weight: 700;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.about .content .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.about .content .read-more:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
  padding-right: 19px;
}

.about .content .read-more:hover i {
  margin-left: 10px;
}

.about .icon-box {
  background-color: var(--surface-color);
  padding: 50px 40px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease-out 0s;
}

.about .icon-box i {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 0;
  transition: all 0.4s ease-out 0s;
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.about .icon-box h3 {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
}

.about .icon-box p {
  margin-bottom: 0;
}

.about .icon-box:hover i {
  background-color: var(--accent-color);
  color: var(--contrast-color);
}

.about .icon-boxes .col-md-6:nth-child(2) .icon-box,
.about .icon-boxes .col-md-6:nth-child(4) .icon-box {
  margin-top: -40px;
}

@media (max-width: 768px) {

  .about .icon-boxes .col-md-6:nth-child(2) .icon-box,
  .about .icon-boxes .col-md-6:nth-child(4) .icon-box {
    margin-top: 0;
  }
}

/*--------------------------------------------------------------
# Stats Section
--------------------------------------------------------------*/
.stats {
  position: relative;
  padding: 120px 0;
}

.stats img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.stats:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 40%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.stats .container {
  position: relative;
  z-index: 3;
}

.stats .stats-item {
  padding: 30px;
  width: 100%;
}

.stats .stats-item span {
  font-size: 48px;
  display: block;
  color: var(--default-color);
  font-weight: 700;
}

.stats .stats-item p {
  padding: 0;
  margin: 0;
  font-family: var(--heading-font);
  font-size: 16px;
  font-weight: 700;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/
.services .service-item {
  position: relative;
  padding-top: 40px;
}

.services .service-item:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: color-mix(in srgb, var(--default-color), transparent 90%);
}

.services .service-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  border-right: 5px solid var(--background-color);
}

.services .service-item .icon {
  width: 48px;
  height: 48px;
  position: relative;
  margin-right: 50px;
  line-height: 0;
}

.services .service-item .icon i {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 56px;
  transition: ease-in-out 0.3s;
  z-index: 2;
  position: relative;
}

.services .service-item .icon:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  background: color-mix(in srgb, var(--accent-color), transparent 70%);
  border-radius: 50px;
  z-index: 1;
  bottom: -15px;
  right: -15px;
  transition: 0.3s;
}

.services .service-item .title {
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 18px;
}

.services .service-item .title a {
  color: var(--heading-color);
}

.services .service-item .title a:hover {
  color: var(--accent-color);
}

.services .service-item .description {
  line-height: 24px;
  font-size: 14px;
}

/*--------------------------------------------------------------
# Features Section
--------------------------------------------------------------*/
.features .features-item {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
}

.features .features-item+.features-item {
  margin-top: 100px;
}

@media (max-width: 768px) {
  .features .features-item+.features-item {
    margin-top: 40px;
  }
}

.features .features-item h3 {
  font-weight: 700;
  font-size: 26px;
}

.features .features-item .btn-get-started {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  padding: 8px 30px 10px 30px;
  border-radius: 4px;
}

.features .features-item .btn-get-started:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 10%);
}

.features .features-item ul {
  list-style: none;
  padding: 0;
}

.features .features-item ul li {
  padding-bottom: 10px;
  display: flex;
  align-items: flex-start;
}

.features .features-item ul li:last-child {
  padding-bottom: 0;
}

.features .features-item ul i {
  font-size: 20px;
  padding-right: 4px;
  color: var(--accent-color);
}

.features .features-item img {
  border: 6px solid var(--surface-color);
  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
}

.features .features-item .features-img-bg {
  position: relative;
  min-height: 500px;
}

@media (max-width: 640px) {
  .features .features-item .features-img-bg {
    min-height: 300px;
  }
}

.features .features-item .features-img-bg img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.features .features-item .image-stack {
  display: grid;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
}

.features .features-item .image-stack .stack-back {
  grid-column: 4/-1;
  grid-row: 1;
  width: 100%;
  z-index: 1;
}

.features .features-item .image-stack .stack-front {
  grid-row: 1;
  grid-column: 1/span 8;
  margin-top: 20%;
  width: 100%;
  z-index: 2;
}

/*--------------------------------------------------------------
# Faq Section
--------------------------------------------------------------*/
.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.faq .content p {
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
}

.faq .faq-container .faq-item {
  background-color: var(--surface-color);
  position: relative;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.faq .faq-container .faq-item h3 .num {
  color: var(--accent-color);
  padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.faq .faq-container .faq-active .faq-content {
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

/*--------------------------------------------------------------
# Team Section
--------------------------------------------------------------*/
.team .member {
  position: relative;
}

.team .member .member-img {
  margin: 0 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 4px solid var(--background-color);
  box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .team .member .member-img {
    margin: 0 60px;
  }
}

.team .member .member-img img {
  position: relative;
  z-index: 1;
}

.team .member .member-img .social {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 20px;
  transition: 0.3s;
  visibility: hidden;
  opacity: 0;
}

.team .member .member-img .social a {
  transition: 0.3s;
  color: var(--contrast-color);
  font-size: 20px;
  margin: 0 8px;
}

.team .member .member-img .social a:hover {
  color: var(--accent-color);
}

.team .member .member-info {
  margin-top: 30px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 18px;
}

.team .member .member-info span {
  font-style: italic;
  display: block;
  font-size: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin-bottom: 10px;
}

.team .member .member-info p {
  margin-bottom: 0;
  font-size: 14px;
}

.team .member:hover .member-img .social {
  padding-bottom: 0;
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Call To Action Section
--------------------------------------------------------------*/
.call-to-action {
  padding: 80px 0;
  position: relative;
  clip-path: inset(0);
}

.call-to-action img {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.call-to-action:before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 50%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.call-to-action .container {
  position: relative;
  z-index: 3;
}

.call-to-action h3 {
  font-size: 28px;
  font-weight: 700;
  color: var(--default-color);
}

.call-to-action p {
  color: var(--default-color);
}

.call-to-action .cta-btn {
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 40px;
  border-radius: 5px;
  transition: 0.5s;
  margin: 10px;
  border: 2px solid var(--contrast-color);
  color: var(--contrast-color);
}

.call-to-action .cta-btn:hover {
  background: var(--accent-color);
  border: 2px solid var(--accent-color);
}

/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials .info h3 {
  font-weight: 700;
  font-size: 32px;
}

.testimonials .swiper {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--surface-color);
}

.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  min-height: 200px;
  position: relative;
  margin: 30px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  margin-right: 10px;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
}

.testimonials .testimonial-item h4 {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
  margin: 0;
}

.testimonials .testimonial-item .stars {
  margin: 10px 0;
}

.testimonials .testimonial-item .stars i {
  color: #ffc107;
  margin: 0 1px;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 60%);
  font-size: 26px;
  line-height: 0;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 15px auto 15px auto;
}

.testimonials .swiper-wrapper {
  height: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
  border: none;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

@media (max-width: 767px) {

  .testimonials .testimonials-carousel,
  .testimonials .testimonials-slider {
    overflow: hidden;
  }

  .testimonials .testimonial-item {
    margin: 15px;
  }
}

/*--------------------------------------------------------------
# Recent Posts Section
--------------------------------------------------------------*/
.recent-posts article {
  background: var(--surface-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.recent-posts .post-img {
  max-height: 240px;
  margin: -30px -30px 15px -30px;
  overflow: hidden;
}

.recent-posts .post-category {
  font-size: 16px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 10px;
}

.recent-posts .title {
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.recent-posts .title a {
  color: var(--heading-color);
  transition: 0.3s;
}

.recent-posts .title a:hover {
  color: var(--accent-color);
}

.recent-posts .post-author-img {
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.recent-posts .post-author {
  font-weight: 600;
  margin-bottom: 5px;
}

.recent-posts .post-date {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact .info-item {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
}

.contact .info-item i {
  font-size: 38px;
  line-height: 0;
  color: var(--accent-color);
}

.contact .info-item h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

.contact .info-item p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact .php-email-form {
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
  height: 100%;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: var(--default-color);
  background-color: color-mix(in srgb, var(--background-color), transparent 50%);
  border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--accent-color);
}

.contact .php-email-form input[type=text]::placeholder,
.contact .php-email-form input[type=email]::placeholder,
.contact .php-email-form textarea::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.contact .php-email-form button[type=submit] {
  background: var(--accent-color);
  color: var(--contrast-color);
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 4px;
}

.contact .php-email-form button[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

/*--------------------------------------------------------------
# Portfolio Details Section
--------------------------------------------------------------*/
.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .swiper-wrapper {
  height: auto;
}

.portfolio-details .swiper-button-prev,
.portfolio-details .swiper-button-next {
  width: 48px;
  height: 48px;
}

.portfolio-details .swiper-button-prev:after,
.portfolio-details .swiper-button-next:after {
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 24px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.portfolio-details .swiper-button-prev:hover:after,
.portfolio-details .swiper-button-next:hover:after {
  background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 575px) {

  .portfolio-details .swiper-button-prev,
  .portfolio-details .swiper-button-next {
    display: none;
  }
}

.portfolio-details .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .swiper-pagination .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
}

.portfolio-details .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.portfolio-details .portfolio-info h3:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--accent-color);
  left: 0;
  bottom: 0;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li {
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}

.portfolio-details .portfolio-info ul strong {
  text-transform: uppercase;
  font-weight: 400;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
}

.portfolio-details .portfolio-info .btn-visit {
  padding: 8px 40px;
  background: var(--accent-color);
  color: var(--contrast-color);
  border-radius: 50px;
  transition: 0.3s;
}

.portfolio-details .portfolio-info .btn-visit:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}

.portfolio-details .portfolio-description .testimonial-item {
  padding: 30px 30px 0 30px;
  position: relative;
  background: color-mix(in srgb, var(--default-color), transparent 97%);
  margin-bottom: 50px;
}

.portfolio-details .portfolio-description .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50px;
  border: 6px solid var(--background-color);
  float: left;
  margin: 0 10px 0 0;
}

.portfolio-details .portfolio-description .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0 5px 0;
  padding-top: 20px;
}

.portfolio-details .portfolio-description .testimonial-item h4 {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-left,
.portfolio-details .portfolio-description .testimonial-item .quote-icon-right {
  color: color-mix(in srgb, var(--accent-color), transparent 50%);
  font-size: 26px;
  line-height: 0;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.portfolio-details .portfolio-description .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
  transform: scale(-1, -1);
}

.portfolio-details .portfolio-description .testimonial-item p {
  font-style: italic;
  margin: 0 0 15px 0 0 0;
  padding: 0;
}

/*--------------------------------------------------------------
# Service Details Section
--------------------------------------------------------------*/
.service-details .service-box {
  background-color: var(--surface-color);
  padding: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
}

.service-details .service-box+.service-box {
  margin-top: 30px;
}

.service-details .service-box h4 {
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, var(--default-color), transparent 92%);
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.service-details .services-list {
  background-color: var(--surface-color);
}

.service-details .services-list a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  background-color: color-mix(in srgb, var(--default-color), transparent 96%);
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-top: 15px;
  transition: 0.3s;
}

.service-details .services-list a:first-child {
  margin-top: 0;
}

.service-details .services-list a i {
  font-size: 16px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .services-list a.active {
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.service-details .services-list a.active i {
  color: var(--contrast-color);
}

.service-details .services-list a:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.service-details .download-catalog a {
  color: var(--default-color);
  display: flex;
  align-items: center;
  padding: 10px 0;
  transition: 0.3s;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.service-details .download-catalog a:first-child {
  border-top: 0;
  padding-top: 0;
}

.service-details .download-catalog a:last-child {
  padding-bottom: 0;
}

.service-details .download-catalog a i {
  font-size: 24px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .download-catalog a:hover {
  color: var(--accent-color);
}

.service-details .help-box {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  margin-top: 30px;
  padding: 30px 15px;
}

.service-details .help-box .help-icon {
  font-size: 48px;
}

.service-details .help-box h4,
.service-details .help-box a {
  color: var(--contrast-color);
}

.service-details .services-img {
  margin-bottom: 20px;
}

.service-details h3 {
  font-size: 26px;
  font-weight: 700;
}

.service-details p {
  font-size: 15px;
}

.service-details ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.service-details ul li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.service-details ul i {
  font-size: 20px;
  margin-right: 8px;
  color: var(--accent-color);
}

/*--------------------------------------------------------------
# Starter Section Section
--------------------------------------------------------------*/
.starter-section {
  /* Add your styles here */
}

/*--------------------------------------------------------------
# Widgets
--------------------------------------------------------------*/
.widgets-container {
  background-color: var(--surface-color);
  padding: 30px;
  margin: 60px 0 30px 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.widget-title {
  color: var(--heading-color);
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 20px 0;
}

.widget-item {
  margin-bottom: 40px;
}

.widget-item:last-child {
  margin-bottom: 0;
}

.search-widget form {
  background: var(--background-color);
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 70%);
  padding: 3px 10px;
  position: relative;
  transition: 0.3s;
}

.search-widget form input[type=text] {
  border: 0;
  padding: 4px;
  border-radius: 4px;
  width: calc(100% - 40px);
  background-color: var(--background-color);
  color: var(--default-color);
}

.search-widget form input[type=text]:focus {
  outline: none;
}

.search-widget form button {
  background: var(--accent-color);
  color: var(--contrast-color);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  font-size: 16px;
  padding: 0 15px;
  margin: -1px;
  transition: 0.3s;
  border-radius: 0 4px 4px 0;
  line-height: 0;
}

.search-widget form button i {
  line-height: 0;
}

.search-widget form button:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.search-widget form:is(:focus-within) {
  border-color: var(--accent-color);
}

.categories-widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categories-widget ul li {
  padding-bottom: 10px;
}

.categories-widget ul li:last-child {
  padding-bottom: 0;
}

.categories-widget ul a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  transition: 0.3s;
}

.categories-widget ul a:hover {
  color: var(--accent-color);
}

.categories-widget ul a span {
  padding-left: 5px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 14px;
}

.recent-posts-widget .post-item {
  display: flex;
  margin-bottom: 15px;
}

.recent-posts-widget .post-item:last-child {
  margin-bottom: 0;
}

.recent-posts-widget .post-item img {
  width: 80px;
  margin-right: 15px;
}

.recent-posts-widget .post-item h4 {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
}

.recent-posts-widget .post-item h4 a {
  color: var(--default-color);
  transition: 0.3s;
}

.recent-posts-widget .post-item h4 a:hover {
  color: var(--accent-color);
}

.recent-posts-widget .post-item time {
  display: block;
  font-style: italic;
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 50%);
}

.tags-widget {
  margin-bottom: -10px;
}

.tags-widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tags-widget ul li {
  display: inline-block;
}

.tags-widget ul a {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  font-size: 14px;
  padding: 6px 14px;
  margin: 0 6px 8px 0;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 60%);
  display: inline-block;
  transition: 0.3s;
}

.tags-widget ul a:hover {
  background: var(--accent-color);
  color: var(--contrast-color);
  border: 1px solid var(--accent-color);
}

.tags-widget ul a span {
  padding-left: 5px;
  color: color-mix(in srgb, var(--default-color), transparent 60%);
  font-size: 14px;
}
```

# client\src\homepage\assets\img\apple-touch-icon.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-1.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-2.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-3.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-4.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-5.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\clients\client-6.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\cta-bg.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\favicon.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\features-light-1.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\features-light-2.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\features-light-3.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\hairbnblogo.svg

This is a file of the type: SVG Image

# client\src\homepage\assets\img\hero-bg.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\logo.png

This is a binary file of the type: Image

# client\src\homepage\assets\img\services.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\stats-bg.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\brian.jpeg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\mahlet.jpeg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\sean.jpeg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\stephanie.jpeg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-1.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-2.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-3.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-4.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-5.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\img\team\team-6.jpg

This is a binary file of the type: Image

# client\src\homepage\assets\js\main.js

```js
/**
* Template Name: Append
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
```

# client\src\homepage\forms\contact.php

```php
<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'contact@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>

```

# client\src\homepage\index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Hairbnb - Home</title>
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">
</head>

<body class="index-page">

  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <img src="assets/img/hairbnblogo.svg" alt=""> <!-- FIXME -->
        <h1 class="sitename">Hairbnb</h1><span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero" class="active">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#team">Team</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#about">Get Started</a>

    </div>
  </header>

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in">

      <div class="container">
        <div class="row">
          <div class="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Hairbnb</h2>
            <p data-aos="fade-up" data-aos-delay="200">Helping you get the haircut or stylist you want</p>
          </div>
          <div class="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <!-- FIXME: make sign up button just go down to next section -->
            <form action="forms/newsletter.php" method="post" class="php-email-form">
              <!-- <div class="sign-up-form"><input type="email" name="email"><input type="submit" value="Sign up / Log in"></div> -->
            </form>
          </div>
        </div>
      </div>

    </section><!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section light-background">

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-xl-center gy-5">

          <div class="col-xl-5 content">
            <h3>About Us</h3>
            <h2>We're like Airbnb, but for hairdressers, hair stylists, and barbers.</h2>
            <p>You deserve the haircut or style you want. Our platform lets you browse through, search, filter, and look at the work of stylists in your area, helping you understand which will be the best fit for you. Oh - and you can see availabiility and book appointments directly through the app.</p>
            <a href="#" class="read-more"><span>Browse stylists in your area</span><i class="bi bi-arrow-right"></i></a>
          </div>

          <div class="col-xl-7">
            <div class="row gy-4 icon-boxes">

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="icon-box">
                  <i class="bi bi-buildings"></i>
                  <h3>Free to use</h3>
                  <p>Hairbnb never adds hidden fees or requires a subscription to book</p>
                </div>
              </div> <!-- End Icon Box -->

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="icon-box">
                  <i class="bi bi-clipboard-pulse"></i>
                  <h3>Simple browsing</h3>
                  <p>We make it easy to search and filter for the services you want</p>
                </div>
              </div> <!-- End Icon Box -->

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="icon-box">
                  <i class="bi bi-command"></i>
                  <h3>Direct management</h3>
                  <p>Appointments, re-bookings, and cancellations are all done here, on the site</p>
                </div>
              </div> <!-- End Icon Box -->

              <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div class="icon-box">
                  <i class="bi bi-graph-up-arrow"></i>
                  <h3>Reviews</h3>
                  <p>See photos of work done in the past so you know what you'll get</p>
                </div>
              </div> <!-- End Icon Box -->

            </div>
          </div>

        </div>
      </div>

    </section><!-- /About Section -->

    <!-- Stats Section -->
    <section id="stats" class="stats section dark-background">

      <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in">

      <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="940k" data-purecounter-duration="1" class="purecounter"></span>
              <p>Salons</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" class="purecounter"></span>
              <p>Bookings Made</p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" class="purecounter"></span>
              <p>Simple App</p>
            </div>
          </div><!-- End Stats Item -->

        </div>

      </div>

    </section><!-- /Stats Section -->

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Use any of our features to find the hair service you deserve</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-briefcase"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Location Search</a></h4>
                <p class="description">See hair services near you, or search for services in a different area</p>
              </div>
            </div>
          </div>
          <!-- End Service Item -->

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-card-checklist"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Direct Booking</a></h4>
                <p class="description">Make appointments and manage them entirely through our platform</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="300">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-bar-chart"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Communication</a></h4>
                <p class="description">Running late? Need to reschedule? No more digging for phone numbers or last-minute calls</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="400">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-binoculars"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">See the service</a></h4>
                <p class="description">See previous work, the salon, and/or the area it's in, so you know what to expect</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="500">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-brightness-high"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Get Prices</a></h4>
                <p class="description">Find how much what you want is going to cost</p>
              </div>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="600">
            <div class="service-item d-flex">
              <div class="icon flex-shrink-0"><i class="bi bi-calendar4-week"></i></div>
              <div>
                <h4 class="title"><a href="services-details.html" class="stretched-link">Leave Reviews</a></h4>
                <p class="description">Read other's reviews or write your own - rate your service</p>
              </div>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>

    </section><!-- /Services Section -->

    <!-- Faq Section -->
    <section id="faq" class="faq section">

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="content px-xl-5">
              <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
              <p>
                Thinking about making an account? Have questions? Check out our FAQ - it might answer your question!
              </p>
            </div>
          </div>

          <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">

            <div class="faq-container">
              <div class="faq-item faq-active">
                <h3><span class="num">1.</span> <span>Is Hairbnb free to use? Is it more expensive to book through Hairbnb?</span></h3>
                <div class="faq-content">
                  <p>Hairbnb is completely free to use. Prices are set by stylists depending on the service, and are not priced differently on our platform.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3><span class="num">2.</span> <span>What happens if I miss my booking?</span></h3>
                <div class="faq-content">
                  <p>Don't worry! Life happens. You can always re-book or reschedule on the site directly. No need to call or text anyone.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3><span class="num">3.</span> <span>How does it work?</span></h3>
                <div class="faq-content">
                  <p>You search and filter for what you want. You make the booking, and the stylist receives it. You show up, get what you want done, and leave a review. Rinse and repeat.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3><span class="num">4.</span> <span>I can't see my stylist on Hairbnb. Why is that?</span></h3>
                <div class="faq-content">
                  <p>Some stylists don't maintain an online presence and are only using word-of-mouth or social media. Reach out to us and we will add them to the service.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

              <div class="faq-item">
                <h3><span class="num">5.</span> <span>My booking disappeared, but I wasn't notified. What happened?</span></h3>
                <div class="faq-content">
                  <p>If bookings are cancelled, then that means they were cancelled on the stylists' end. You should receive emails or texts when this occurs.</p>
                </div>
                <i class="faq-toggle bi bi-chevron-right"></i>
              </div><!-- End Faq item-->

            </div>

          </div>
        </div>

      </div>

    </section><!-- /Faq Section -->

    <!-- Team Section -->
    <section id="team" class="team section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>We are a team of 4 students at Vanderbilt University.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-5">

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src="assets/img/team/sean.jpeg" class="img-fluid" alt="">
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Sean Onamade</h4>
              <span>Developer</span>
              <p>Sean is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
            <div class="member-img">
              <img src="assets/img/team/brian.jpeg" class="img-fluid" alt="">
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Brian Shon</h4>
              <span>Developer</span>
              <p>Brian is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
            <div class="member-img">
              <img src="assets/img/team/mahlet.jpeg" class="img-fluid" alt="">
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Mahlet Derege</h4>
              <span>Developer</span>
              <p>Mahlet is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div><!-- End Team Member -->

          <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src="assets/img/team/stephanie.jpeg" class="img-fluid" alt="">
              <div class="social">
                <a href="#"><i class="bi bi-twitter-x"></i></a>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info text-center">
              <h4>Stephanie Ting</h4>
              <span>Developer</span>
              <p>Stephanie Ting is a 4th year computer science student at Vanderbilt.</p>
            </div>
          </div><!-- End Team Member -->

        </div>

      </div>

    </section><!-- /Team Section -->

    <!-- Call To Action Section -->
    <section id="call-to-action" class="call-to-action section dark-background">

      <img src="assets/img/cta-bg.jpg" alt="">

      <div class="container">
        <div class="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-xl-10">
            <div class="text-center">
              <h3>Sign up today!</h3>
              <p>Get the hair services you want and deserve by signing up today and booking appoinments with salons in your area.</p>
              <a class="cta-btn" href="#">Sign up</a>
            </div>
          </div>
        </div>
      </div>

    </section><!-- /Call To Action Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-6">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="200">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>A108 Adam Street</p>
                  <p>New York, NY 535022</p>
                </div>
              </div><!-- End Info Item -->

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                  <p>+1 6678 254445 41</p>
                </div>
              </div><!-- End Info Item -->

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div><!-- End Info Item -->

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="500">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 05:00PM</p>
                </div>
              </div><!-- End Info Item -->

            </div>

          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required="">
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required="">
                </div>

                <div class="col-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required="">
                </div>

                <div class="col-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                <div class="col-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>

  <footer id="footer" class="footer position-relative light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Hairbnb</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
```

# client\src\homepage\LandingPage.jsx

```jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css'; // Adjust the path according to your project structure
// import './assets/js/main.js';

// Import images
import favicon from './assets/img/favicon.png';
import appleTouchIcon from './assets/img/apple-touch-icon.png';
import hairbnbLogo from './assets/img/hairbnblogo.svg';
import heroBg from './assets/img/hero-bg.jpg';
import statsBg from './assets/img/stats-bg.jpg';
import seanImg from './assets/img/team/sean.jpeg';
import brianImg from './assets/img/team/brian.jpeg';
import mahletImg from './assets/img/team/mahlet.jpeg';
import stephanieImg from './assets/img/team/stephanie.jpeg';
import ctaBg from './assets/img/cta-bg.jpg';

function LandingPage() {

  // const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  // const faqData = [
  //   {
  //     question: 'Is Hairbnb free to use? Is it more expensive to book through Hairbnb?',
  //     answer: 'Hairbnb is completely free to use. Prices are set by stylists depending on the service, and are not priced differently on our platform.',
  //   },
  //   // Add other FAQ items here
  // ];
  
  // function toggleFaq(index) {
  //   setActiveFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  // }
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    new PureCounter();
  }, []);

  return (
    <div className="index-page">
      {/* <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={hairbnbLogo} alt="" /> =
            <h1 className="sitename">Hairbnb</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="index.html#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html#about">About</a>
              </li>
              <li>
                <a href="index.html#services">Services</a>
              </li>
              <li>
                <a href="index.html#team">Team</a>
              </li>
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header> */}

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img src={heroBg} alt="" /> 

          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2 data-aos="fade-up" data-aos-delay="100">
                  Hairbnb
                </h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  Helping you get the haircut or stylist you want
                </p>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
                {/* FIXME: make sign up button just go down to next section */}
                <form 
                  onSubmit={(e) => {
                    e.preventDefault(); // Prevent the default form submission
                    const email = e.target.elements.email.value;
                    localStorage.setItem('email', email); // Save the email to localStorage
                    window.location.href = '/login'; // Redirect to the login page
                  }}
                >
                  {/* <div className="sign-up-form">
                    <input type="email" name="email" required />
                    <input type="submit" value="Sign up / Log in" />
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* /Hero Section */}

        {/* About Section */}
        <section id="about" className="about section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-xl-center gy-5">
              <div className="col-xl-5 content">
                <h3>About Us</h3>
                <h2>We're like Airbnb, but for hairdressers, hair stylists, and barbers.</h2>
                <p>
                  You deserve the haircut or style you want. Our platform lets you browse through, search,
                  filter, and look at the work of stylists in your area, helping you understand which will
                  be the best fit for you. Oh - and you can see availability and book appointments directly
                  through the app.
                </p>
                <a href="#" className="read-more">
                  <span>Browse stylists in your area</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Free to use</h3>
                      <p>Hairbnb never adds hidden fees or requires a subscription to book</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse"></i>
                      <h3>Simple browsing</h3>
                      <p>We make it easy to search and filter for the services you want</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon-box">
                      <i className="bi bi-command"></i>
                      <h3>Direct management</h3>
                      <p>Appointments, re-bookings, and cancellations are all done here, on the site</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon-box">
                      <i className="bi bi-graph-up-arrow"></i>
                      <h3>Reviews</h3>
                      <p>See photos of work done in the past so you know what you'll get</p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

        {/* Stats Section */}
        <section id="stats" className="stats section dark-background">
          <img src={statsBg} alt="" data-aos="fade-in" />

          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="940k"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Salons</p>
                </div>
              </div>
              {/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="100"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Bookings Made</p>
                </div>
              </div>
              {/* End Stats Item */}

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>Simple App</p>
                </div>
              </div>
              {/* End Stats Item */}
            </div>
          </div>
        </section>
        {/* /Stats Section */}

        {/* Services Section */}
        <section id="services" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Use any of our features to find the hair service you deserve</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Location Search
                      </a>
                    </h4>
                    <p className="description">
                      See hair services near you, or search for services in a different area
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-card-checklist"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Direct Booking
                      </a>
                    </h4>
                    <p className="description">
                      Make appointments and manage them entirely through our platform
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Communication
                      </a>
                    </h4>
                    <p className="description">
                      Running late? Need to reschedule? No more digging for phone numbers or last-minute
                      calls
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        See the service
                      </a>
                    </h4>
                    <p className="description">
                      See previous work, the salon, and/or the area it's in, so you know what to expect
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-brightness-high"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Get Prices
                      </a>
                    </h4>
                    <p className="description">Find how much what you want is going to cost</p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a href="services-details.html" className="stretched-link">
                        Leave Reviews
                      </a>
                    </h4>
                    <p className="description">
                      Read other's reviews or write your own - rate your service
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* /Services Section */}

        {/* Faq Section */}
        <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="content px-xl-5">
                  <h3>
                    <span>Frequently Asked </span>
                    <strong>Questions</strong>
                  </h3>
                  <p>
                    Thinking about making an account? Have questions? Check out our FAQ - it might answer
                    your question!
                  </p>
                </div>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <div className="faq-container">
                  <div className="faq-item">
                    <h3>
                      <span className="num">1.</span>{' '}
                      <span>
                        Is Hairbnb free to use? Is it more expensive to book through Hairbnb?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Hairbnb is completely free to use. Prices are set by stylists depending on the
                        service, and are not priced differently on our platform.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">2.</span>{' '}
                      <span>What happens if I miss my booking?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Don't worry! Life happens. You can always re-book or reschedule on the site
                        directly. No need to call or text anyone.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">3.</span> <span>How does it work?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        You search and filter for what you want. You make the booking, and the stylist
                        receives it. You show up, get what you want done, and leave a review. Rinse and
                        repeat.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">4.</span>{' '}
                      <span>I can't see my stylist on Hairbnb. Why is that?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Some stylists don't maintain an online presence and are only using word-of-mouth
                        or social media. Reach out to us and we will add them to the service.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}

                  <div className="faq-item">
                    <h3>
                      <span className="num">5.</span>{' '}
                      <span>My booking disappeared, but I wasn't notified. What happened?</span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        If bookings are cancelled, then that means they were cancelled on the stylists'
                        end. You should receive emails or texts when this occurs.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  {/* End Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq Section */}

        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>We are a team of 4 students at Vanderbilt University.</p>
          </div>
          {/* End Section Title */}

          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src={seanImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Sean Onamade</h4>
                  <span>Developer</span>
                  <p>Sean is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src={brianImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Brian Shon</h4>
                  <span>Developer</span>
                  <p>Brian is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src={mahletImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Mahlet Derege</h4>
                  <span>Developer</span>
                  <p>Mahlet is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}

              <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src={stephanieImg} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>Stephanie Ting</h4>
                  <span>Developer</span>
                  <p>Stephanie is a 4th year computer science student at Vanderbilt.</p>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}

        {/* Call To Action Section */}
        <section id="call-to-action" className="call-to-action section dark-background">
          <img src={ctaBg} alt="" />

          <div className="container">
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Sign up today!</h3>
                  <p>
                    Get the hair services you want and deserve by signing up today and booking appointments
                    with salons in your area.
                  </p>
                  <a className="cta-btn" href="#">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Call To Action Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          {/* End Section Title */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Hairbnb</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna
                derita valies darta donna mare fermentum iaculis eu non diam phasellus.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p>United States</p>
              <p className="mt-4">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      {/* <div id="preloader"></div> */}

    </div>
  );
}

export default LandingPage;
```

# client\src\homepage\starter-page.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Starter Page - Append Bootstrap Template</title>
  <meta name="description" content="">
  <meta name="keywords" content="">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Append
  * Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
  * Updated: Aug 07 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body class="starter-page-page">

  <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <h1 class="sitename">Append</h1><span>.</span>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="index.html#hero">Home</a></li>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="index.html#portfolio">Portfolio</a></li>
          <li><a href="index.html#pricing">Pricing</a></li>
          <li><a href="index.html#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <a class="btn-getstarted" href="index.html#about">Get Started</a>

    </div>
  </header>

  <main class="main">

    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>Starter Page</h1>
              <p class="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Starter Page</li>
          </ol>
        </div>
      </nav>
    </div><!-- End Page Title -->

    <!-- Starter Section Section -->
    <section id="starter-section" class="starter-section section">

      <div class="container" data-aos="fade-up">
        <p>Use this page as a starter for your own custom pages.</p>
      </div>

    </section><!-- /Starter Section Section -->

  </main>

  <footer id="footer" class="footer position-relative light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">Append</span>
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Graphic Design</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <p class="mt-4"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
          <p><strong>Email:</strong> <span>info@example.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="sitename">Append</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>

  </footer>

  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
```

# client\src\index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# client\src\login\Login.css

```css
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
}

.login-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 1rem;
    text-align: left;
}

.form-label {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
    display: block;
}

.form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.login-button {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #4a90e2;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.login-button:hover {
    background-color: #357ab8;
}

.error-message {
    color: red;
    font-size: 0.9rem;
    margin-top: 0.5rem;
}
```

# client\src\login\Login.jsx

```jsx
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
```

# client\src\main.jsx

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import Login from "./login/Login";
import LandingPage from "./homepage/LandingPage"; // Import the LandingPage component
import "./index.css";
import StylistPage from "./components/StylingPage"
import ProfilePage from "./components/ProfilePage";

const router = createBrowserRouter([ // create a router with these routes
  {
    path: "/", // "/" sets up the home route and renders the App component with the RecordList as a child
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
      {
        path: "/ProfilePage",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/", // "/" sets up the home route and renders the App component with the RecordList as a child
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    path: "/edit/:id", // edit route to render App w/ Record as a child. the :id part is a parameter
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },
  {
    path: "/create", // creation route
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
  {
    path: "/landing",
    element: <App />,
    children: [
      {
        path: "/landing",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/StylistPage",
    element: <App />,
    children: [
      {
        index: true,
        element: <StylistPage />,
      },
    ],
  },
  {
    path: "/stylist/:id",
    element: <App />,
    children: [
      {
        index: true,
        element: <StylistPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render( // renders the app
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
```

# client\tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# client\test\api.test.js

```js
// api.test.js
import axios from 'axios';
import { googleAuth } from './api';

// Mock axios
jest.mock('axios');

describe('API Calls', () => {

  // Test the googleAuth API call
  it('fetches Google Auth data successfully', async () => {
    const mockData = { data: { success: true, token: 'mockToken' } };
    axios.get.mockResolvedValueOnce(mockData);

    const result = await googleAuth('mockAuthCode');
    expect(result.data).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledWith('/auth/google?code=mockAuthCode');
  });

  // Test API call failure
  it('handles API call failure', async () => {
    axios.get.mockRejectedValueOnce(new Error('API call failed'));

    await expect(googleAuth('mockAuthCode')).rejects.toThrow('API call failed');
  });
});

```

# client\test\app.test.js

```js
// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import axios from 'axios';
import App from './App';

// Mock axios
jest.mock('axios');

describe('App Component', () => {
  
  // Test if the App component renders without crashing
  it('renders App component correctly', () => {
    render(<App />);
    const titleElement = screen.getByText(/Welcome to My App/i); // Adjust this to match your app's text
    expect(titleElement).toBeInTheDocument();
  });

  // Test an API call (Google Auth example)
  it('fetches Google Auth data when button is clicked', async () => {
    const mockData = { data: { success: true, token: 'mockToken' } };
    axios.get.mockResolvedValueOnce(mockData);

    render(<App />);

    const googleAuthButton = screen.getByRole('button', { name: /Login with Google/i });
    fireEvent.click(googleAuthButton);

    // Assuming that clicking the button triggers the API and shows a success message
    const successMessage = await screen.findByText(/Login successful!/i);
    expect(successMessage).toBeInTheDocument();

    // Check if the API call was made
    expect(axios.get).toHaveBeenCalledWith('/auth/google?code=mockAuthCode');
  });
});

```

# client\test\google.login.test.js

```js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import GoogleLogin from './GoogleLogin';

describe('GoogleLogin Component', () => {
  it('renders Google login button', () => {
    render(<GoogleLogin />);
    const loginButton = screen.getByRole('button', { name: /Login with Google/i });
    expect(loginButton).toBeInTheDocument();
  });

  it('calls the login function when button is clicked', () => {
    const mockLoginFunction = jest.fn();
    render(<GoogleLogin onClick={mockLoginFunction} />);
    const loginButton = screen.getByRole('button', { name: /Login with Google/i });
    fireEvent.click(loginButton);
    expect(mockLoginFunction).toHaveBeenCalledTimes(1);
  });
});

```

# client\test\main.test.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

```

# client\test\other_tests.js

```js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';

describe('Header Component', () => {
    it('renders the header with logo and navigation', () => {
      render(<Header />);
      const logo = screen.getByAltText(/Company Logo/i); // Adjust based on the alt text of the logo
      expect(logo).toBeInTheDocument();
  
      const navLink = screen.getByRole('link', { name: /Home/i }); // Adjust based on your actual links
      expect(navLink).toBeInTheDocument();
    });
  });

describe('About Component', () => {
  it('renders the about information', () => {
    render(<About />);
    const aboutText = screen.getByText(/About Us/i); // Adjust this to match the actual text
    expect(aboutText).toBeInTheDocument();
  });
});

describe('Contact Component', () => {
    it('renders contact form', () => {
      render(<Contact />);
      const contactForm = screen.getByRole('form');
      expect(contactForm).toBeInTheDocument();
    });
  
    it('submits the form with entered data', () => {
      render(<Contact />);
      const nameInput = screen.getByLabelText(/Name/i);
      const submitButton = screen.getByRole('button', { name: /Submit/i });
      
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.click(submitButton);
  
      // Test form submission logic
    });
  });

  describe('Footer Component', () => {
    it('renders footer content', () => {
      render(<Footer />);
      const footerText = screen.getByText(/© 2024 Company Name/i); // Adjust the text
      expect(footerText).toBeInTheDocument();
    });
  });

  describe('HeroSection Component', () => {
    it('renders hero section with heading and call-to-action', () => {
      render(<HeroSection />);
      const heading = screen.getByRole('heading', { name: /Welcome to Our Service/i }); // Adjust the text
      expect(heading).toBeInTheDocument();
  
      const callToAction = screen.getByRole('button', { name: /Get Started/i }); // Adjust based on button text
      expect(callToAction).toBeInTheDocument();
    });
  });
```

# client\test\RecordList.test.js

```js
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RecordList from "./RecordList";
import { MemoryRouter } from "react-router-dom";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          _id: "1",
          name: "John Doe",
          personalStatement: "Experienced stylist.",
          level: "Stylist",
          email: "john@example.com",
          stylistHairstylesOffered: "Curly, Straight",
          yearsExperience: 5,
        },
        {
          _id: "2",
          name: "Jane Smith",
          personalStatement: "Master stylist.",
          level: "Senior Stylist",
          email: "jane@example.com",
          stylistHairstylesOffered: "Wavy",
          yearsExperience: 10,
        },
      ]),
  })
);

describe("RecordList Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("should display a list of stylists", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Check for stylist records
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Experienced stylist.")).toBeInTheDocument();
    expect(screen.getByText("Curly, Straight")).toBeInTheDocument();
  });

  test("should filter stylist list based on search query", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Search for a stylist by name
    fireEvent.change(screen.getByPlaceholderText("Search for stylists..."), {
      target: { value: "Jane" },
    });

    // Wait for filtering to occur
    await waitFor(() => screen.getByText("Jane Smith"));
    
    // Verify that John Doe is not visible after search
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("should display error message when missing required fields", async () => {
    render(<Record />, { wrapper: MemoryRouter });
    
    // Simulate form submission with missing name
    fireEvent.change(screen.getByLabelText("Email:"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Level:"), { target: { value: "Stylist" } });
    fireEvent.click(screen.getByText("Update Record"));
    
    // Verify error message is shown
    expect(await screen.findByText("Please fill out all required fields.")).toBeInTheDocument();
  });

  test("should delete a stylist record", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Click delete button
    const deleteButton = screen.getByText("Delete John Doe");
    fireEvent.click(deleteButton);

    // Confirm deletion
    await waitFor(() => expect(screen.queryByText("John Doe")).not.toBeInTheDocument());
  });
});
```

# client\vite.config.js

```js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@react-oauth/google'],
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // Make sure to import 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // !!!
      react: path.resolve(__dirname, 'node_modules/react'), // needed the resolve alias! there were 2 versions of react at once
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom') // the two versions prevent hooks like useState from working
      // this tells the Vite to only get React from this one spot
    },
  },
  optimizeDeps: {
    include: ['@react-oauth/google'],
  },
})

```

# mern\server\.gitignore

```
.vercel

node_modules
```

# mern\server\app.js

```js
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

const router = require('./routes/routes');
const AppError = require('./utils/appError');
const errorController = require('./controllers/errorController');

const app = express();

dotenv.config({ path: './config.env' }); // <- connecting the enviroment variables
// MIDLEWARES ->>
app.enable('trust proxy');

console.log('REMOTE: ', process.env.REMOTE);

app.use(cors({ credentials: true, origin: process.env.REMOTE })); // <- CORS configuration, in case if you wanted to implemented authorization
app.options(process.env.REMOTE, cors());

console.log((`ENV = ${process.env.NODE_ENV}`));
app.use(morgan('dev')); // <- Logs res status code and time taken

const limiter = rateLimit({	// <- Limits the number of api calls that can be made per IP address
	max: 1000, // max number of times per windowMS
	windowMs: 60 * 60 * 1000,
	message:
        '!!! Too many requests from this IP, Please try again in 1 hour !!!',
});

app.use('/api/v1', limiter);

app.use((req, res, next) => {	// <- Serves req time and cookies
	
	req.requestTime = new Date().toISOString();
	console.log(req.requestTime);
	if (req.cookies) console.log(req.cookies);
	next();
});

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

app.use(express.json({ limit: '100mb' })); // <- Parses Json data
app.use(express.urlencoded({ extended: true, limit: '100mb' })); // <- Parses URLencoded data

app.use(mongoSanitize()); // <- Data Sanitization aganist NoSQL query Injection.
app.use(xss()); // <- Data Sanitization against xss

app.use(compression());

app.use('/api/v1/', router); // <- Calling the router

app.all('*', (req, res, next) => {	// <- Middleware to handle Non-existing Routes
	next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
});

app.use(errorController); // <- Error Handling Middleware

module.exports = app;
```

# mern\server\controllers\authController.js

```js
const axios = require('axios');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const oauth2Client = require('../utils/oauth2client');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('../models/userModel');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIMEOUT,
    });
};
// Create and send Cookie ->
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);

    console.log(process.env.JWT_COOKIE_EXPIRES_IN);
    const cookieOptions = {
        expires: new Date(Date.now() + +process.env.JWT_COOKIE_EXPIRES_IN),
        httpOnly: true,
        path: '/',
        // sameSite: "none",
        secure: false,
    };
    if (process.env.NODE_ENV === 'production') {
        cookieOptions.secure = true;
        cookieOptions.sameSite = 'none';
    }

    user.password = undefined;

    res.cookie('jwt', token, cookieOptions);

    console.log(user);

    res.status(statusCode).json({
        message: 'success',
        token,
        data: {
            user,
        },
    });
};
/* GET Google Authentication API. */
exports.googleAuth = catchAsync(async (req, res, next) => {
    const code = req.query.code;
    console.log("USER CREDENTIAL -> ", code);

    const googleRes = await oauth2Client.oauth2Client.getToken(code);
    
    oauth2Client.oauth2Client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
	);
	
    let user = await User.findOne({ email: userRes.data.email });
   
    if (!user) {
        console.log('New User found');
        user = await User.create({
            name: userRes.data.name,
            email: userRes.data.email,
            image: userRes.data.picture,
        });
    }

    createSendToken(user, 201, res);
});
```

# mern\server\db\connection.js

```js
import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
// const username = encodeURIComponent("stephaniejting");
// const password = encodeURIComponent("12167002337");

// const uri = "mongodb+srv://stephaniejting:12167002337@HairBnB.66d0c02073f6c33cb91e5cd4.mongodb.net/employees?retryWrites=true&w=majorityPORT=5050"
const uri = "mongodb+srv://stephaniejting:12167002337@hairbnb.rmuyh.mongodb.net/" // Connection URIs encode all of the information required to connect to a given database within a single string.
const client = new MongoClient(uri, { // mongoClient instance
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees"); // selects a hypothetical "employees" database

export default db;
```

# mern\server\middleware\auth.js

```js
// middleware/auth.js
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  // Get token from the request header
  const token = req.header('Authorization')?.split(' ')[1];

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload to request object
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

export default auth;
```

# mern\server\models\User.js

```js
// User.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    // Other fields as necessary
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
```

# mern\server\package.json

```json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node --env-file=config.env server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "type": "module",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "engines": {
    "node": "20.17.0"
  },
  "dependencies": {
    "all": "^0.0.0",
    "axios": "^1.7.7",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "googleapis": "^144.0.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoose": "^8.8.1",
    "nodemailer": "^6.9.16",
    "to": "^0.2.9",
    "validator": "^13.12.0"
  }
}

```

# mern\server\Procfile

```
web: node server.js
```

# mern\server\routes\authRoutes.js

```js
import express from 'express';
import User from '../models/User.js';

const router = express.Router(); // Initialize the router

// routes/authRoutes.js
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  console.log("received data:", req.body);
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, password, level });
    await user.save();


    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully' });  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 
```

# mern\server\routes\login.js

```js
// login.js
import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    // Simulate successful login by returning a hardcoded user object
    const hardcodedUser = {
        id: '12345', // Example user ID
        email: 'sim@gmail.com',
        password: 'sim123456',
        name: 'Hardcoded User'
    };

    res.status(200).json({
        message: 'Login successful',
    });
});

export default router;
```

# mern\server\routes\record.js

```js
import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// IMPORTANT -- SCROLL TO BOTTOM FOR POSSIBLE DIFFERENT TYPES OF RECORDS
// THIS IS IMPORTANT BECAUSE WE DON'T NEED AN EMPLOYEE DATABASE; RATHER, DATABASES OF STYLISTS AND CLIENTS

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records"); // from the records collection
  let results = await collection.find({}).toArray(); // finds and returns all records
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  try {
    let newDocument = { // alter these!
      name: req.body.name,
      personalStatement: req.body.personalStatement,
      level: req.body.level,
      email: req.body.email,
      password: req.body.password,
      preferredService: req.body.preferredService,
      hairType: req.body.hairType,
      stylistHairstylesOffered: req.body.stylistHairstylesOffered,
      stylistCertification: req.body.stylistCertification,
      yearsExperience: req.body.yearsExperience,
      stylistAvailabilities: req.body.stylistAvailabilities,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        personalStatement: req.body.personalStatement,
        level: req.body.level,
        email: req.body.email,
        password: req.body.password,
        preferredService: req.body.preferredService,
        hairType: req.body.hairType,
        stylistHairstylesOffered: req.body.stylistHairstylesOffered,
        stylistCertification: req.body.stylistCertification,
        yearsExperience: req.body.yearsExperience,
        stylistAvailabilities: req.body.stylistAvailabilities,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

export default router;
```

# mern\server\routes\userRoutes.js

```js
// register.js or as a function within your userRoutes.js
import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create the new user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name
            }
        });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
```

# mern\server\server.js

```js
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import records from './routes/record.js';
import sendEmail from './utils/emailNotif.js';
import authRoutes from './routes/authRoutes.js';
import login from './routes/login.js'; 

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB using environment variable for the connection string
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define your routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use("/record", records); // Record routes
app.use("/login", login); // Login routes

// Email route
app.post("/api/sendmail", async (req, res) => {
  const { email, bookingTime, stylistName } = req.body;
  try {
    const emailSubject = `Appointment Confirmation with ${stylistName}`;
    const emailMessage = `
      <h2>Appointment Confirmation</h2>
      <p>Dear Customer,</p>
      <p>Your appointment with ${stylistName} has been confirmed for ${bookingTime}.</p>
      <p>We look forward to seeing you then!</p>
    `;
    const emailSender = process.env.EMAIL_SENDER; // Use environment variable for sender email
    const replySend = process.env.EMAIL_REPLY_PASSWORD; // Use environment variable for email reply password
    const emailRecipient = email; // Use provided email in the request body

    await sendEmail(emailSubject, emailMessage, emailRecipient, emailSender, replySend);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

# mern\server\utils\emailNotif.js

```js
import nodemailer from "nodemailer";

const sendEmail = async (emailSubject, emailMessage, emailReciepient, emailSender, replySend) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'hairbnbco@gmail.com',
            pass: 'uemn ijvl iloi kvfq',
        },
        tls: {
            rejectUnauthorized: false, //helps with errors 
        }
    })//object that communicates with the email server 

    const options = {
        from: emailSender,
        to: emailReciepient,
        replyTo: replySend,
        subject: emailSubject,
        html: emailMessage,
    }

    //sends email with content
    transporter.sendMail(options, function(err, info){
        if (err) {
            console.log("Error", err)
        }
        else {
            console.log("success", info)
        }
    }) 
}

export default sendEmail;
```

# mern\server\utils\oauth2client.js

```js

const { google } = require('googleapis');

/**
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

exports.oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    'postmessage'
);
```

# package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-oauth/google": "^0.12.1",
    "@srexi/purecounterjs": "^1.5.0",
    "aos": "^2.3.4",
    "axios": "^1.7.7",
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "bootstrap-icons": "^1.11.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "firebase": "^11.0.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoose": "^8.8.1",
    "nodemailer": "^6.9.16",
    "react": "^18.2.0",
    "react-datetime-picker": "^6.0.1",
    "react-dom": "^18.2.0",
    "react-router-hash-link": "^2.4.3"
  },
  "devDependencies": {
    "vite": "^5.4.9"
  }
}

```

# README.md

```md
[[[<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HairBnB</h3>

  <p align="center">
    A web app connecting customers with independent hairstylists 
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  \`\`\`sh
  npm install npm@latest -g
  \`\`\`

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   \`\`\`sh
   git clone https://github.com/github_username/repo_name.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Enter your API in `config.js`
   \`\`\`js
   const API_KEY = 'ENTER YOUR API';
   \`\`\`
5. Change git remote url to avoid accidental pushes to base project
   \`\`\`sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   \`\`\`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/github_username/repo_name/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=github_username/repo_name" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com ](https://github.com/othneildrew/Best-README-Template/blob/main/BLANK_README.md 

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->






<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mderege/hairbnb">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HairBnB</h3>

  <p align="center">
    A web app connecting customers with independent hair stylists!
    <br />
    <a href="https://github.com/mderege/hairbnb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mderege/hairbnb">View Demo</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

First day of school coming up? Picture Day? It can be hard to find independent hair stylists who you can trust to work with your hair. With HairBnB, independent hair stylists can showcase their work, prices, and areas of expertise. Clients can look over reviews and clearly display their hair types, allowing a match in needs and services. This platform not only allows users to look at photos of hairstylist's work, but also allows them to chat with them before booking to make sure there is a sense of trust. If you're interested in finding a centralized place for all your hair needs, check us out!

<!--Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` →

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![HTML][HTML-shield]][HTML-url]
* [![CSS][CSS-shield]][CSS-url]
* [![JavaScript][JavaScript-shield]][JavaScript-url]
* [![Tailwind]
* Mongo DB
* Express
* Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
 mkdir mern && cd mern
  \`\`\`

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   \`\`\`sh
   git clone https://github.com/mderege/hairbnb.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Enter your API in `config.js`
   \`\`\`js
   const API_KEY = 'ENTER YOUR API';
   \`\`\`
5. Change git remote url to avoid accidental pushes to base project
   \`\`\`sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   \`\`\`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this app to create profiles and book appointments with local independent hairstylists!
- As a client, tailor your bio with details on your hair type, the hairstyle you’re looking for, your location, and pictures of your hair
- As a hairstylist, build out your brand by adding the hair types you work with, hairstyles you provide, reviews of past gigs, pictures of past work, and costs for your services!
- Book/cancel appointments using our calendar integration!

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/mderege/hairbnb/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/mderege/hairbnb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=github_username/repo_name" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Mahlet Derege - mahlet.derege@vanderbilt.edu
Sean Onamade - sean.d.onamade@vanderbilt.edu
Brian Shon - brian.w.shon@vanderbilt.edu
Stephanie Ting - stephanie.j.ting@vanderbilt.edu

Project Link: [https://github.com/mderege/hairbnb](https://github.com/mderege/hairbnb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/mderege/hairbnb/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/mderege/hairbnb/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/mderege/hairbnb/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/mderege/hairbnb/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/mderege/hairbnb/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

)
](https://github.com/othneildrew/Best-README-Template/blob/main/BLANK_README.md 

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->






<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mderege/hairbnb">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HairBnB</h3>

  <p align="center">
    A web app connecting customers with independent hair stylists!
    <br />
    <a href="https://github.com/mderege/hairbnb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mderege/hairbnb">View Demo</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

First day of school coming up? Picture Day? It can be hard to find independent hair stylists who you can trust to work with your hair. With HairBnB, independent hair stylists can showcase their work, prices, and areas of expertise. Clients can look over reviews and clearly display their hair types, allowing a match in needs and services. This platform not only allows users to look at photos of hairstylist's work, but also allows them to chat with them before booking to make sure there is a sense of trust. If you're interested in finding a centralized place for all your hair needs, check us out!

<!--Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` →

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![HTML][HTML-shield]][HTML-url]
* [![CSS][CSS-shield]][CSS-url]
* [![JavaScript][JavaScript-shield]][JavaScript-url]
* [![Tailwind]
* Mongo DB
* Express
* Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Start by creating an empty directory mern
*mkdir mern && cd mern*

Next, create a folder for the back end and name it server. Then, we will initialize the package.json file using npm init.
* mkdir server && cd server*
*npm init -y*

In order to use 
ECMAScript Modules, the officially supported standard format to package JavaScript code for reuse, we’ll add a line to the package.json file.
* "type": "module",*
We will also install the dependencies.
*npm install mongodb express cors*


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   \`\`\`sh
   git clone https://github.com/mderege/hairbnb.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Enter your API in `config.js`
   \`\`\`js
   const API_KEY = 'ENTER YOUR API';
   \`\`\`
5. Change git remote url to avoid accidental pushes to base project
   \`\`\`sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   \`\`\`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this app to create profiles and book appointments with local independent hairstylists!
- As a client, tailor your bio with details on your hair type, the hairstyle you’re looking for, your location, and pictures of your hair
- As a hairstylist, build out your brand by adding the hair types you work with, hairstyles you provide, reviews of past gigs, pictures of past work, and costs for your services!
- Book/cancel appointments using our calendar integration!

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Signup and login functionality
    - [ ] Choose between stylist and customer profiles
- [ ] Customizable, browsable, searchable profiles
- [ ] Book appointments with our calendar integration

See the [open issues](https://github.com/mderege/hairbnb/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Mahlet Derege - mahlet.derege@vanderbilt.edu
Sean Onamade - sean.d.onamade@vanderbilt.edu
Brian Shon - brian.w.shon@vanderbilt.edu
Stephanie Ting - stephanie.j.ting@vanderbilt.edu

Project Link: [https://github.com/mderege/hairbnb](https://github.com/mderege/hairbnb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/mderege/hairbnb/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/mderege/hairbnb/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/mderege/hairbnb/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/mderege/hairbnb/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/mderege/hairbnb/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

)
](https://github.com/othneildrew/Best-README-Template/blob/main/BLANK_README.md 

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->






<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mderege/hairbnb">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">HairBnB</h3>

  <p align="center">
    A web app connecting customers with independent hair stylists!
    <br />
    <a href="https://github.com/mderege/hairbnb"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/mderege/hairbnb">View Demo</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/mderege/hairbnb/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

First day of school coming up? Picture Day? It can be hard to find independent hair stylists who you can trust to work with your hair. With HairBnB, independent hair stylists can showcase their work, prices, and areas of expertise. Clients can look over reviews and clearly display their hair types, allowing a match in needs and services. This platform not only allows users to look at photos of hairstylist's work, but also allows them to chat with them before booking to make sure there is a sense of trust. If you're interested in finding a centralized place for all your hair needs, check us out!

<!--Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` →

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![HTML][HTML-shield]][HTML-url]
* [![CSS][CSS-shield]][CSS-url]
* [![JavaScript][JavaScript-shield]][JavaScript-url]
* [![Tailwind]
* Mongo DB
* Express
* Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Start by creating an empty directory mern
*mkdir mern && cd mern*

Next, create a folder for the back end and name it server. Then, we will initialize the package.json file using npm init.
* mkdir server && cd server*
*npm init -y*

In order to use 
ECMAScript Modules, the officially supported standard format to package JavaScript code for reuse, we’ll add a line to the package.json file.
* "type": "module",*
We will also install the dependencies.
*npm install mongodb express cors*


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   \`\`\`sh
   git clone https://github.com/mderege/hairbnb.git
   \`\`\`
3. Install NPM packages
   \`\`\`sh
   npm install
   \`\`\`
4. Enter your API in `config.js`
   \`\`\`js
   const API_KEY = 'ENTER YOUR API';
   \`\`\`
5. Change git remote url to avoid accidental pushes to base project
   \`\`\`sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   \`\`\`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this app to create profiles and book appointments with local independent hairstylists!
- As a client, tailor your bio with details on your hair type, the hairstyle you’re looking for, your location, and pictures of your hair
- As a hairstylist, build out your brand by adding the hair types you work with, hairstyles you provide, reviews of past gigs, pictures of past work, and costs for your services!
- Book/cancel appointments using our calendar integration!

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Signup and login functionality
    - [ ] Choose between stylist and customer profiles
- [ ] Customizable, browsable, searchable profiles
- [ ] Book appointments with our calendar integration

See the [open issues](https://github.com/mderege/hairbnb/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Mahlet Derege - mahlet.derege@vanderbilt.edu
Sean Onamade - sean.d.onamade@vanderbilt.edu
Brian Shon - brian.w.shon@vanderbilt.edu
Stephanie Ting - stephanie.j.ting@vanderbilt.edu

Project Link: [https://github.com/mderege/hairbnb](https://github.com/mderege/hairbnb)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/mderege/hairbnb/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/mderege/hairbnb/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/mderege/hairbnb/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/mderege/hairbnb/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/mderege/hairbnb/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

)

```

