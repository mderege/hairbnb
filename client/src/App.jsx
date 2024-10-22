// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <div className="w-full p-6">
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// };
// export default App

import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLogin from "./components/GoogleLogin";

function App() {
	const [user, setUser] = useState();

	return (
		<GoogleOAuthProvider clientId="989487628694-ku7po9jejcpcqk5d8itqrrb0s22vlac0.apps.googleusercontent.com">
			<div className="App">
				<GoogleLogin setUser={setUser}></GoogleLogin>
				{user && user.name}
				{user && user.email}
			</div>
		</GoogleOAuthProvider>
	);
}

export default App;