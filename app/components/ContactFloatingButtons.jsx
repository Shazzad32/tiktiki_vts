"use client";

import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactFloatingButtons = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/8801409962099"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      <a
        href="https://m.me/sultanvts"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-blue-600 shadow-lg text-white flex items-center justify-center hover:scale-105 transition-transform"
      >
        <FacebookRoundedIcon className="w-7 h-7" />
      </a>
    </div>
  );
};

export default ContactFloatingButtons;
