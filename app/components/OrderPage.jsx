"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

import img_1 from "@/images/non_voice.png";
import img_2 from "@/images/voice.png";

const products = [
  {
    id: "non_voice",
    name: "Non Voice GPS x 1",
    price: 3500,
    oldPrice: 3500,
    img: img_1,
    description: "রেগুলার প্রাইস -৪০০০ ৳, স্পেশাল অফার ৩৫০০ ৳",
  },
  {
    id: "voice",
    name: "Voice GPS x 1",
    price: 4000,
    oldPrice: 4000,
    img: img_2,
    description: "ভয়েসসহ ডিভাইস, প্রাইস ~৪৫০০~ ৳, অফার ৪০০০ ৳",
  },
];

const OrderPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    postcode: "",
    shipping: "",
  });

  const handleOrder = async () => {
    const { name, phone, address } = formData;
    if (!name || !phone || !address) {
      toast.error("দয়া করে সব তথ্য পূরণ করুন!");
      return;
    }

    try {
      const res = await fetch("/api/sendOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          address: formData.address + ", " + formData.shipping,
          product: selectedProduct,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("অর্ডার সফলভাবে গ্রহণ করা হয়েছে!");
        setFormData({
          name: "",
          address: "",
          phone: "",
          postcode: "",
          shipping: "",
        });
      } else {
        toast.error("অর্ডার পাঠানো যায়নি। দয়া করে আবার চেষ্টা করুন।");
      }
    } catch (err) {
      console.error(err);
      toast.error("কিছু ভুল হয়েছে।");
    }
  };

  return (
    <section
      id="order"
      className="w-full min-h-screen bg-[#f8f8f8] flex justify-center items-center p-2"
    >
      <div className="w-full max-w-6xl bg-white rounded-xl p-6 shadow-md">
        <h1 className="text-xl md:text-2xl text-center font-bold text-red-600 mb-2">
          অর্ডার করতে নিচের ফর্মটি সম্পূর্ণ পূরণ করুন
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-bold text-lg">আপনার পছন্দের প্রোডাক্ট</h2>
            <div className="flex flex-col md:flex-row gap-4">
              {products.map((product) => (
                <label
                  key={product.id}
                  className={`border w-full p-4 rounded-lg cursor-pointer ${
                    selectedProduct.id === product.id
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="product"
                    value={product.id}
                    checked={selectedProduct.id === product.id}
                    onChange={() => setSelectedProduct(product)}
                    className="mb-2"
                  />
                  <div className="flex flex-col items-center">
                    <img
                      src={product.img.src}
                      alt={product.name}
                      className="h-[140px] w-[140px]"
                    />
                    <h3 className="font-semibold mt-2 text-center">
                      {product.name}
                    </h3>
                    <p className="text-sm text-center mt-1 text-gray-600">
                      {product.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Billing details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="border p-2 rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="আপনার পুরো ঠিকানা লিখুন"
                  className="border p-2 rounded-md"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন"
                  className="border p-2 rounded-md"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="আপনার বিডি পোস্ট কোড (optional)"
                  className="border p-2 rounded-md"
                  value={formData.postcode}
                  onChange={(e) =>
                    setFormData({ ...formData, postcode: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Shipping Address</h2>
              <input
                type="text"
                placeholder="ডেলিভারির ঠিকানা লিখুন"
                className="border w-full p-2 rounded-md"
                value={formData.shipping}
                onChange={(e) =>
                  setFormData({ ...formData, shipping: e.target.value })
                }
              />
            </div>
          </div>

          <div className="border p-4 rounded-md shadow-sm bg-gray-50">
            <h2 className="font-bold text-lg mb-4 text-center">Your order</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{selectedProduct.name}</span>
                <span>৳ {selectedProduct.price.toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>৳ {selectedProduct.price.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 text-center">
              অর্ডার করার জন্য নিচের বাটনে ক্লিক করুন
            </div>
            <button
              onClick={handleOrder}
              className="cursor-pointer w-full bg-red-500 text-white font-bold py-3 mt-3 rounded-md hover:bg-red-600 transition-all"
            >
              অর্ডার সম্পন্ন করুন - ৳ {selectedProduct.price.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
