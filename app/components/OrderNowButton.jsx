"use client";
import { motion } from "framer-motion";
export default function OrderNowButton() {
  const colors = ["#FF5733", "#8f0606", "#3357FF", "#FF33A8", "#FFA533"];
  const handleClick = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      animate={{
        backgroundColor: colors,
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      onClick={handleClick}
      className="cursor-pointer w-full  font-bold py-3 px-12 mt-3 rounded-md transition-all bg-gradient-to-r text-white"
    >
      এখনি অর্ডার করুন
    </motion.button>
  );
}
