import React from "react";
import { motion } from "motion/react";
export default function Banner() {
 
  return (
    <div className="">
      <div
        className="bg-banner-img relative h-[540px] md:h-[520px] xl:h-[700px] bg-cover bg-center grid place-items-center text-center"
      >
        <motion.div
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0 }}
       transition={{
         duration: 0.4,
         scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
       }}
          drag
          dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
          className="max-w-2xl xl:max-w-4xl"
        >
          <h2 className="title-font text-3xl md:text-5xl lg:text-6xl xl:text-7xl px-5 font-bold  text-white/90 xl:mb-7">
            Exploring One Step at a Time
          </h2>
          <p className="sm:text-lg lg:text-xl xl:text-2xl font-medium px-5 sm:px-1  nunito-font max-w-xl xl:max-w-3xl text-white/80 mx-auto">
            Join Pathz in uncovering hidden gems and unforgettable destinations.
            Experience the world with inspiring stories
          </p>
        </motion.div>
        <div className="bg-banner-bottom absolute bottom-0 h-14 lg:h-16 w-full"></div>
      </div>
    </div>
  );
}
