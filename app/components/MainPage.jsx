import React from "react";
import HeaderPage from "./HeaderPage";
import MainVideoPage from "./MainVideoPage";
import OrderPage from "./OrderPage";
import Facilities from "./Facilities";
import WhyBuy from "./WhyBuy";
import Review from "./Review";
import SliderPage from "./SliderPage";
import ProductShowcase from "./ProductShowcase";
import InstallProcess from "./InstallProcess";
import img from "@/images/tiktiki.png";
import img_1 from "@/images/image_01.png";
import img_2 from "@/images/image_02.png";
import img_3 from "@/images/image_03.png";
import img_4 from "@/images/image_04.png";
import img_5 from "@/images/image_05.png";
import AppFeacher from "./AppFeacher";
const MainPage = () => {
  const reviewImages = [img_1, img_2, img_3, img_4, img_5];
  return (
    <div>
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${img.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75 z-0" />
        <div className="relative z-10">
          <HeaderPage />
          {/* <MainVideoPage videoSource="/videos/intro_video_2.mp4" /> */}
          <div className="flex w-full h-auto items-center justify-center">
            <div className="flex w-[80%] h-auto">
              <SliderPage images={reviewImages} />
            </div>
          </div>
        </div>
      </div>
      <Facilities />
      <ProductShowcase />
      <WhyBuy />
      <InstallProcess />
      <Review />
      <AppFeacher />
      <OrderPage />
    </div>
  );
};

export default MainPage;
