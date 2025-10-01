"use client";
import React from "react";
import { installationData } from "@/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const InstallProcess = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Title Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-4 lg:text-4xl text-xl lg:w-[80%] w-[95%] text-center font-extrabold rounded-md p-6 text-white bg-gradient-to-r from-gray-500 via-red-300 to-green-800 shadow-lg"
      >
        ইনস্টল প্রসেস
      </motion.div>

      {/* Installation Steps with Stagger Animation */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 lg:w-[80%] w-[95%] mt-4"
      >
        {installationData.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.2)",
            }}
            className="flex w-full items-start p-4 rounded-xl bg-white border border-orange-200"
          >
            {/* Bouncing arrow */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 mt-1 text-xl"
            >
              👉
            </motion.div>
            <div className="text-justify">
              <strong className="text-green-500">{item.title}</strong>{" "}
              {item.content}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InstallProcess;
