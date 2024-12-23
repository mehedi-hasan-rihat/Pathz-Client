import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from 'react-toastify'
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
      <Toaster/>
      <Tooltip id="my-tooltip" className="z-50" />

    </AuthProvider>
  </React.StrictMode>
);
