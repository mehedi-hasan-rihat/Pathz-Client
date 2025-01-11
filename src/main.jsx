import React from "react";
import ReactDOM from "react-dom/client";
import "react-photo-view/dist/react-photo-view.css";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { PhotoProvider } from "react-photo-view";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        {" "}
        <AuthProvider>
          <PhotoProvider>
            <RouterProvider router={router} />
            <ToastContainer />
            <Toaster />
            <Tooltip id="my-tooltip" className="z-50" />
          </PhotoProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
