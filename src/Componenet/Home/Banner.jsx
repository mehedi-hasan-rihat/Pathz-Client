import React, { useRef } from "react";
import { useMotionValue, useTransform, motion } from "motion/react";
export default function Banner() {
 
  return (
    <div className="">
      <div
        className="bg-banner-img relative h-[560px] xl:h-[780px] bg-cover bg-center  grid place-items-center text-center my-2"
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
          <h2 className="text-6xl xl:text-7xl px-5 font-bold leading-tight xl:leading-tight text-white xl:mb-7">
            Exploring One Step at a Time
          </h2>
          <p className="text-xl xl:text-2xl  font-medium mt-3 nunito-font max-w-xl xl:max-w-3xl text-white mx-auto">
            Join Pathz in uncovering hidden gems and unforgettable destinations.
            Experience the world with inspiring stories
          </p>
        </motion.div>
        <div className="bg-banner-bottom absolute bottom-0 h-14 lg:h-16 w-full"></div>
      </div>
    </div>
  );
}
