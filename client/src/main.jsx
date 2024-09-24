import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import "./index.css";

const router = createBrowserRouter([ // create a router with these routes
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
]);

ReactDOM.createRoot(document.getElementById("root")).render( // renders the app
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);