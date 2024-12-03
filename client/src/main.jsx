// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from "./App";
// import Record from "./components/Record";
// import RecordList from "./components/RecordList";
// import Login from "./login/Login";
// import LandingPage from "./homepage/LandingPage"; // Import the LandingPage component
// import "./index.css";
// import StylistPage from "./components/StylingPage"
// import ProfilePage from "./components/ProfilePage";

// const router = createBrowserRouter([ // create a router with these routes
//   {
//     path: "/", // "/" sets up the home route and renders the App component with the RecordList as a child
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <RecordList />,
//       },
//       {
//         path: "/ProfilePage",
//         element: <ProfilePage />,
//       },
//     ],
//   },
//   {
//     path: "/", // "/" sets up the home route and renders the App component with the RecordList as a child
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <RecordList />,
//       },
//     ],
//   },
//   {
//     path: "/edit/:id", // edit route to render App w/ Record as a child. the :id part is a parameter
//     element: <App />,
//     children: [
//       {
//         path: "/edit/:id",
//         element: <Record />,
//       },
//     ],
//   },
//   {
//     path: "/create", // creation route
//     element: <App />,
//     children: [
//       {
//         path: "/create",
//         element: <Record />,
//       },
//     ],
//   },
//   {
//     path: "/landing",
//     element: <App />,
//     children: [
//       {
//         path: "/landing",
//         element: <LandingPage />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: "/StylistPage",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <StylistPage />,
//       },
//     ],
//   },
//   {
//     path: "/stylist/:id",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <StylistPage />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render( // renders the app
//   // <React.StrictMode>
//     <RouterProvider router={router} />
//   // </React.StrictMode>
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import ClientDashboard from "./components/ClientDashboard";
import RecordList from "./components/RecordList";
import Login from "./components/GoogleLogin"; // Updated path for Login
import Register from "./components/Register"; // Import the Register component
import LandingPage from "./homepage/LandingPage";
import StylistPage from "./components/StylingPage";
import ProfilePage from "./components/ProfilePage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
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
      {
        path: "/client-dashboard",
        element: <ClientDashboard />,
      },
      {
        path: "/edit/:id",
        element: <Record />,
      },
      {
        path: "/create",
        element: <Record />,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />, // Login route
      },
      {
        path: "/register",
        element: <Register />, // Register route
      },
      {
        path: "/stylist/:id",
        element: <StylistPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
