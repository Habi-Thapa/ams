import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Attandance, Employee, Page404 } from "./pages";
import "./index.css";
import AppContextProvider from "./context/AppContextProvider/index.jsx";
import AuthRoute from "./auth/AuthRoute/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    errorElement: <Page404 />,
    children: [
      {
        path: "employee/",
        element: <Employee />,
      },
      {
        path: "attandance/",
        element: <Attandance />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
