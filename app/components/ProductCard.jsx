"use client";
import Image from "next/image";
import OrderNowButton from "./OrderNowButton";

const ProductCard = ({ image, name, price_1, price_2, price_3 }) => {
  return (
    <div className="lg:w-[400px] w-full gap-3  bg-white shadow-lg border-1 border-amber-600 rounded-2xl overflow-hidden flex flex-col items-center p-3 hover:shadow-2xl transition-all duration-300">
      <div className="h-[250px] w-[250px] relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="rounded-xl lg:p-4 p-10 h-16 w-16 "
        />
      </div>

      <div className="w-full p-2 rounded-md bg-orange-600 uppercase text-white text-xl font-bold flex items-center justify-center">
        {name}
      </div>

      <p className="font-bold">
        রেগুলার প্রাইস-<del className="text-red-500">{price_1}</del>-টাকা
      </p>
      <p className="text-orange-600 font-bold text-xl text-center">
        স্পেশাল অফার প্রাইস-<strong className="text-red-500">{price_2}</strong>
        -টাকা
      </p>
      <div className="h-[30px] w-3/4 rounded-md border-2 bg-orange-600 text-white border-amber-600 flex items-center justify-center">
        মাসিক বিল মাত্র {price_3} টাকা
      </div>

      <div className="mt-4 w-full flex justify-center">
        <OrderNowButton />
      </div>
    </div>
  );
};

export default ProductCard;
