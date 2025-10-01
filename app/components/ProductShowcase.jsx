import ProductCard from "./ProductCard";
import img_1 from "@/images/non_voice.png";
import img_2 from "@/images/voice.png";

const ProductShowcase = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 ">
      <div className="mt-4 lg:text-4xl text-xl lg:w-[80%] w-[95%] text-center font-extrabold rounded-md p-6 text-white bg-gradient-to-r from-gray-500 via-red-300 to-green-800 shadow-lg">
        ডিভাইসের দাম
      </div>
      <ProductCard
        image={img_1}
        name="Non Voice"
        price_1={"৪০০০"}
        price_2={"৩৫০০"}
        price_3={"200"}
      />
      <ProductCard
        image={img_2}
        name="Voice"
        price_1={"৪৫০০"}
        price_2={"৪০০০"}
        price_3={"৩০০"}
      />
    </div>
  );
};

export default ProductShowcase;
