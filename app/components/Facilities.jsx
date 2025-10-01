"use client";
import React from "react";
import { gpsFeatures } from "@/data";
import { motion } from "framer-motion";
import mainimage from "@/images/main_page.png";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Facilities = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      <div className="w-[95%] lg:w-[80%] h-[90%] flex justify-center items-center flex-col mt-4">
        <Image
          src={mainimage}
          alt="ing"
          className="w-full rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="lg:text-4xl text-xl w-full rounded-md mt-4 mb-6 text-center font-extrabold p-4 text-white bg-gradient-to-r from-green-400 to-gray-700 shadow-xl"
        >
          বিশেষ সুবিধাসমূহ
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 w-full"
        >
          {gpsFeatures.map((itemData, index) => (
            <motion.div
              variants={item}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              key={index}
              className="flex w-full items-start p-4 rounded-xl bg-white border border-orange-200"
            >
              <div className="text-justify">
                <strong className="text-orange-600">{itemData.title}:</strong>{" "}
                {itemData.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Facilities;
