"use client";
import React from "react";
import { motion } from "framer-motion";
import GraphemeSplitter from "grapheme-splitter";
import logo from "@/images/tiktiki-logo-final.jpg";
import Image from "next/image";

const HeaderPage = () => {
  const text = "টিকটিকি যেখানে,নিরাপত্তা সেখানেই";

  const splitter = new GraphemeSplitter();
  const chars = splitter.splitGraphemes(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={70}
        className="object-contain"
      />
      <motion.div
        className="lg:text-4xl text-2xl font-extrabold text-center p-4 lg:w-[80%] w-[95%]"
        // variants={container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -5, 0, 5, 0] }} // উপরে নিচে যাবে
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05, // stagger effect
            }}
            className={
              char === ""
                ? "inline-block w-2"
                : "inline-block " +
                  ("SULTAN  TRACKER".includes(char)
                    ? "text-white"
                    : "text-[#f5f4f3]")
            }
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <div className="lg:w-[80%] full  shadow-md text-[16px]  text-white rounded-b-md lg:text-2xl sm:text-xl font-extrabold p-4 text-center flex flex-col items-center justify-center">
        <h1>
          <strong className="text-green-500">
            টিকটিকি ট্র্যাকার – আপনার গাড়ির পাহারাদার
          </strong>
        </h1>
      </div>
    </div>
  );
};

export default HeaderPage;
