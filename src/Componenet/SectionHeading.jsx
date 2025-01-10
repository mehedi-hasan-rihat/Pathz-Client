import React from "react";
import { motion } from "motion/react";
export default function SectionHeading({ Heading, subHeading }) {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.6, bounce: 0.4 },
        }}
        className=" mx-auto text-center container"
      >
        <div className=" flex items-center text-center gap-16">
          <span className="border-t-2 bg-green-800 border-gray-200 flex-1"></span>
          <span className="text-xl sm:text-3xl lg:text-5xl font-bold">
            {Heading}
          </span>
          <span className="border-t-2 flex-1 border-gray-200"></span>
        </div>
        <p className="mt-5 text-gray-700 text-xl">
          {" "}
{subHeading}        </p>
      </motion.div>
    </div>
  );
}
