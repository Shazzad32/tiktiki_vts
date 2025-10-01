// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import Image from "next/image";

// const SliderPage = ({ images }) => {
//   return (
//     // <div className="w-full flex items-center justify-center">
//     <div className="lg:w-[80%] w-full h-full p-2">
//       <Swiper
//         modules={[Autoplay]}
//         slidesPerView={3}
//         spaceBetween={20}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//       >
//         {images.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="rounded-lg overflow-hidden shadow-md border-2 border-amber-700">
//               <Image
//                 src={img}
//                 alt={`image-${index}`}
//                 width={300}
//                 height={200}
//                 className="w-full h-auto"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//     // </div>
//   );
// };

// export default SliderPage;
// SliderPage.jsx
// SliderPage.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const SliderPage = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div className="w-[100%] h-[90%] sm:h-[300px] md:h-[350px] lg:h-[490px] rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            <Image
              src={img}
              alt={`image-${index}`}
              className="w-full h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderPage;
