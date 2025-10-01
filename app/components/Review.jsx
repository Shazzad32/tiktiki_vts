"use client";
import { Card } from "@mui/material";
import React from "react";

const videos = [
  "/videos/review_1.mp4",
  "/videos/review_2.mp4",
  "/videos/review_3.mp4",
];
import img_1 from "@/images/review_01.png";
import img_2 from "@/images/review_02.png";
import img_3 from "@/images/review_03.png";

import SliderPage from "./SliderPage";

const Review = () => {
  const reviewImages = [img_1, img_2, img_3];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="lg:text-4xl text-xl lg:w-[80%] w-[95%] rounded-md mt-6 mb-2 text-center font-extrabold p-6 text-white bg-gradient-to-r from-green-500 via-orange-300 to-gray-800">
        কাস্টমার রিভিউ
      </div>
      <div className="h-auto lg:w-[80%] w-full bg-white flex flex-col lg:flex-row gap-4 justify-center items-center p-4 rounded-lg shadow">
        {/* {videos.map((url, index) => (
          <Card
            key={index}
            className="w-full lg:w-1/3 h-[200px] lg:h-[300px] bg-sky-100 flex items-center justify-center border-1 border-amber-700"
          >
            <iframe
              className="w-full h-full"
              src={url}
              title={`External Video ${index}`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Card>
        ))} */}
        <SliderPage images={reviewImages} />
      </div>

      <div className="p-2 bg-black rounded-md lg:w-[80%] w-[95%] mb-4 flex flex-col items-center">
        <h1 className="p-4 lg:text-3xl text-xl font-extrabold text-white text-center">
          সেবা পেতে আজই যোগাযোগ করুন
        </h1>
        <div className="p-3 mb-2 w-[80%] lg:w-[60%] bg-orange-400 text-white text-2xl font-extrabold flex items-center justify-center rounded-md">
          01409-962099
        </div>
      </div>
    </div>
  );
};

export default Review;
