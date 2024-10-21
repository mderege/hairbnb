/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import '../../Login/Login.css'; // Import the CSS file for styling

export default (props) => {
	const responseGoogle = async (authResult) => {
		try {
			if (authResult["code"]) {
				console.log(authResult.code);
				const result = await googleAuth(authResult.code);
				props.setUser (result.data.data.user);
				alert("Successfully logged in");
			} else {
				console.log(authResult);
				throw new Error(authResult);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<div className="login-container">
			<h1>Welcome Back!</h1>
			<p>Please sign in to continue.</p>
			<button className="google-login-button" onClick={googleLogin}>
				Sign in with Google
			</button>
		</div>
	);
};