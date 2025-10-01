// AppFeacher.jsx
import React from "react";

import img_1 from "@/images/app/login.jpg";
import img_2 from "@/images/app/home_page.jpg";
import img_3 from "@/images/app/info.jpg";
import img_4 from "@/images/app/live_traking.jpg";
import img_5 from "@/images/app/details.jpg";
import img_6 from "@/images/app/dayli_report.jpg";
import img_7 from "@/images/app/speed_report.jpg";
import img_8 from "@/images/app/image.jpg";
import SliderPage from "./SliderPage";

const AppFeacher = () => {
  const appPages = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

  return (
    <div className="w-full h-[300px] lg:h-[550px]  flex items-center justify-center">
      <div className="w-[80%] flex items-center justify-center flex-col">
        <h1 className="uppercase text-2xl font-bold mb-4 text-orange-500">
          আমাদের অ্যাপ
        </h1>
        <SliderPage className="border-none" images={appPages} />
      </div>
    </div>
  );
};

export default AppFeacher;
