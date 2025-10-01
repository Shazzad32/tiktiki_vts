"use client";
import React from "react";
import { dealerDetails } from "@/data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const DealerDetails = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Title Pulse Animation */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="lg:text-4xl mt-4 text-xl lg:w-[80%] w-[95%] text-center font-extrabold rounded-md p-6 text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-lg"
      >
        ডিলারশিপ আগ্রহী দের জন্য সুবিধা
      </motion.div>

      {/* Dealer Details with Stagger Animation */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 p-4 lg:w-[80%] w-[95%] mt-4"
      >
        {dealerDetails.map((itemData, index) => (
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            key={index}
            className="flex w-full items-start p-4 rounded-xl bg-white border border-orange-200"
          >
            {/* Animated Icon */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 mt-1 text-xl"
            >
              👉
            </motion.div>
            <div className="text-justify">
              <strong className="text-orange-600">{itemData.title}:</strong>{" "}
              {itemData.description}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DealerDetails;
