import React, { useCallback } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import 'client/src/login/Login.css'; // Import the CSS file for styling

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
