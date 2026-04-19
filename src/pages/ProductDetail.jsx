import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react"

import kurti from "/kurti-1.webp";
import kurti1 from "/kurti-3.webp";
import kurti2 from "/kurti-4.webp";
import kurti3 from "/kurti-5.webp";
import kurti4 from "/kurti-6.webp";

const products = [

    {
        id: 1,
        name: "Floral Short Kurti",
        price: "₹999",
        description: "Beautiful hand-painted floral kurti",
        images: [kurti, kurti1, kurti2]
    },
    {
        id: 2,
        name: "Elegant Kurti",
        price: "₹899",
        description: "Comfortable daily wear kurti",
        images: [kurti1, kurti2, kurti3]
    },
    {
        id: 3,
        name: "Designer Kurti",
        price: "₹1099",
        description: "Premium design for special occasions",
        images: [kurti2, kurti3, kurti4]
    },
    {
        id: 4,
        name: "Casual Kurti",
        price: "₹799",
        description: "Simple and stylish look",
        images: [kurti3, kurti4, kurti]
    },
    {
        id: 5,
        name: "Party Wear Kurti",
        price: "₹1299",
        description: "Perfect for parties",
        images: [kurti4, kurti, kurti1]
    }
];

const ProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!product) return <h2>Product not found</h2>;

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const relatedProducts = products.filter(
        (item) => item.id !== product.id
    );

    return (
        <div className="p-10 bg-pink-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

                {/* IMAGE SECTION */}
                <div className="relative">

                    {/* Main Image */}
                    <img
                        src={product.images[currentIndex]}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />

                    {/* Left Arrow */}
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-md hover:bg-pink-500 hover:text-white transition"
                    >
                        <ChevronLeft />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 -translate-y-1/2  w-10 h-10 flex items-center justify-center  rounded-full bg-white/80 backdrop-blur-md shadow-md  hover:bg-pink-500 hover:text-white transition"
                    >
                        <ChevronRight />

                    </button>
                    {/* Thumbnails */}
                    <div className="flex gap-3 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${currentIndex === index
                                    ? "border-pink-500"
                                    : "border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* DETAILS */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-pink-500 text-2xl mb-4">{product.price}</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2">Select Size:</h4>
                        <div className="flex gap-3">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className="border px-4 py-1 rounded hover:bg-pink-500 hover:text-white"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                            Add to Cart
                        </button>

                        <button className="border border-pink-500 text-pink-500 px-6 py-2 rounded-lg hover:bg-pink-500 hover:text-white">
                            Buy Now
                        </button>
                    </div>

                    
                </div>

            </div>

            {/* RELATED PRODUCTS */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Related Products
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {relatedProducts.map((item) => (
      <div
        key={item.id}
        onClick={() => navigate(`/product/${item.id}`)}
        className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          src={item.images[0]}
          className="w-full h-52 object-cover"
        />

        <div className="p-3">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="text-pink-500">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
    );
};

export default ProductDetail;