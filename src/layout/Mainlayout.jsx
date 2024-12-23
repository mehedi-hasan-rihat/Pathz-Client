import React from "react";
import HomePage from "../pages/HomePage";
import Navbar from "../Componenet/Home/Navbar";
import Footer from "../Componenet/Home/Footer";
import { Outlet } from "react-router-dom";
import { motion, useSpring, useScroll } from "motion/react";

export default function Mainlayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        style={{
          scaleX,
          position:"fixed",
          top:0,
          left: 0,
          right: 0,
          height:4,
          originX: 0,
          zIndex : 100,
          backgroundColor: "#60A5FA",
        }}
      />

     <Navbar />
      <div className="min-h-[calc(100vh-380px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
