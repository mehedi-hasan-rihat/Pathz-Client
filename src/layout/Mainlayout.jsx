import React from "react";
import HomePage from "../pages/HomePage";
import Navbar from "../Componenet/Home/Navbar";
import Footer from "../Componenet/Home/Footer";
import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-380px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
