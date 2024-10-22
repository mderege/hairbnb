// // /* eslint-disable import/no-anonymous-default-export */
// // import React from "react";
// // import { useGoogleLogin } from "@react-oauth/google";
// // import { googleAuth } from "../api";
// // import '../login/Login.css'; // Import the CSS file for styling

// // export default (props) => {
// // 	const responseGoogle = async (authResult) => {
// // 		try {
// // 			if (authResult["code"]) {
// // 				console.log(authResult.code);
// // 				const result = await googleAuth(authResult.code);
// // 				props.setUser (result.data.data.user);
// // 				alert("Successfully logged in");
// // 			} else {
// // 				console.log(authResult);
// // 				throw new Error(authResult);
// // 			}
// // 		} catch (e) {
// // 			console.log(e);
// // 		}
// // 	};

// // 	const googleLogin = useGoogleLogin({
// // 		onSuccess: responseGoogle,
// // 		onError: responseGoogle,
// // 		flow: "auth-code",
// // 	});

// // 	return (
// // 		<div className="login-container">
// // 			<h1>Welcome Back!</h1>
// // 			<p>Please sign in to continue.</p>
// // 			<button className="google-login-button" onClick={googleLogin}>
// // 				Sign in with Google
// // 			</button>
// // 		</div>
// // 	);
// // };
// /* eslint-disable import/no-anonymous-default-export */
// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../api";
// import '../login/Login.css'; // Import the CSS file for styling

// export default (props) => {
//   const handleSuccess = async (authResult) => {
//     try {
//       if (authResult["code"]) {
//         console.log(authResult.code); // Log the auth code
//         const result = await googleAuth(authResult.code); // Send code to the backend
//         props.setUser(result.data.data.user); // Set the user
//         alert("Successfully logged in"); // Show success alert
//       }
//     } catch (e) {
//       console.error("Login success but failed to retrieve user data", e); // Log any backend errors
//     }
//   };

//   const handleError = (error) => {
//     console.error("Google login error:", error);
//     alert("Login failed. Please try again."); // Show error alert
//   };

//   const googleLogin = useGoogleLogin({
//     onSuccess: handleSuccess,
//     onError: handleError,
//     flow: "auth-code",
//   });

//   return (
//     <div className="login-container">
//       <h1>Welcome Back!</h1>
//       <p>Please sign in to continue.</p>
//       <button className="google-login-button" onClick={googleLogin}>
//         Sign in with Google
//       </button>
//     </div>
//   );
// };
// import React from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import { googleAuth } from "../api";
// import '../login/Login.css'; // Import the CSS file for styling

// export default (props) => {
//     const responseGoogle = async (authResult) => {
//         try {
//             if (authResult["code"]) {
//                 const result = await googleAuth(authResult.code);
//                 props.setUser(result.data.data.user); // Set the user state
//                 alert("Successfully logged in");
//             } else {
//                 console.log(authResult);
//                 throw new Error(authResult);
//             }
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const googleLogin = useGoogleLogin({
//         onSuccess: responseGoogle,
//         onError: responseGoogle,
//         flow: "auth-code",
//     });

//     return (
//         <div className="login-container">
//             <h1>Welcome Back!</h1>
//             <p>Please sign in to continue.</p>
//             <button className="google-login-button" onClick={googleLogin}>
//                 Sign in with Google
//             </button>
//         </div>
//     );
// };

import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import '../login/Login.css'; // Import the CSS file for styling

const GoogleLoginComponent = (props) => {
    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                const result = await googleAuth(authResult.code);
                props.setUser(result.data.data.user); // Set user state
                alert("Successfully logged in");
            } else {
                console.log(authResult);
                throw new Error(authResult);
            }
        } catch (e) {
            console.error("Error during login:", e);
            // Regardless of the error, we still want to navigate
        } finally {
            // Ensure navigation occurs after the login attempt
            props.onSubmit(); // Call the navigation function immediately
        }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: "auth-code",
    });

    const handleClick = () => {
        googleLogin(); // Attempt to log in
        // Note: No need to call props.onSubmit here, it's handled in responseGoogle
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