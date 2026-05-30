import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, BadgePercent, Flower } from "lucide-react"
import whiteKurti3 from "/white-kurti3.webp"
import butterYellowKurti1 from "/butter-yellow-kurti1.webp"
import kurti2 from "/kurti-4.webp"
import kurti3 from "/kurti-5.webp"
import kurti4 from "/kurti-6.webp"

const ShortKurtis = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "White Hand Painted Short Kurti",
      price: 699,
      inStock: true,
      images: whiteKurti3
    },
    {
      id: 2,
      name: "Elegant Butter Yellow Hand Painted Kurt",
      price: 899,
      inStock: false,
      images: butterYellowKurti1
    },
    {
      id: 3,
      name: "Designer Kurti",
      price: 1099,
      inStock: true,
      images: kurti2
    },
    {
      id: 4,
      name: "Casual Kurti",
      price: 799,
      inStock: true,
      images: kurti3
    },
    {
      id: 5,
      name: "Party Wear Kurti",
      price: 1299,
      inStock: false,
      images: kurti4
    }
  ];

  const [availability, setAvailability] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1500)

  const filteredProducts = products.filter((item) => {
    const matchAvailability =
      availability === "all" ||
      (availability === "in" && item.inStock) ||
      (availability === "out" && !item.inStock);

    const matchPrice = item.price <= maxPrice;
    return matchAvailability && matchPrice;
  });

  return (
    <div className="bg-pink-50 min-h-screen font-heading">

      {/* TITLE */}
      <div className="px-8 pt-6  justify-center text-center">
        <h1 className="text-3xl font-semibold text-gray-800 ">Short Kurtis</h1>
        <p className="text-gray-500 text-sm mt-1">
          Find your perfect style
        </p>
      </div>

      <div className="flex gap-6 px-8 mt-6">

        {/* SIDEBAR */}
        <div className="w-1/6 space-y-4">

          {/* FILTER CARD */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h3 className="text-pink-500 font-semibold mb-4">Filters </h3>

            {/* Availability */}
            <div className="mb-5">
              <h4 className="font-medium mb-2">Availability</h4>

              <label className="block text-sm mb-1 ">
                <input type="radio" name="stock" onChange={() => setAvailability("all")} defaultChecked className="mr-2 accent-pink-500" />
                All Products
              </label>

              <label className="block text-sm mb-1">
                <input type="radio" name="stock" onChange={() => setAvailability("in")} className="mr-2 accent-pink-500" />
                In Stock
              </label>

              <label className="block text-sm">
                <input type="radio" name="stock" onChange={() => setAvailability("out")} className="mr-2 accent-pink-500" />
                Out of Stock
              </label>
            </div>

            {/* PRICE */}
            <div>
              <h4 className="font-medium mb-2">Price</h4>

              <input
                type="range"
                min="0"
                max="1500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-pink-500"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>₹0</span>
                <span>₹{maxPrice}</span>
              </div>
            </div>
          </div>

          {/* OFFER CARD */}
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="text-pink-500 font-semibold flex gap-2"><BadgePercent strokeWidth={1} /> Special Offers</h4>
            <p className="text-sm text-gray-500 mt-1">
              Grab exciting deals on trending styles!
            </p>
            <button className="mt-3 text-sm text-pink-500 font-medium border border-pink-500 p-2 rounded-full">
              Shop Now →
            </button>
          </div>

          {/* NEW ARRIVALS */}
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h4 className="text-pink-500 font-semibold flex gap-2"><Flower strokeWidth={1} /> New Arrivals</h4>
            <p className="text-sm text-gray-500 mt-1">
              Check out our latest handpicked collection.
            </p>
            <button className="mt-3 text-sm text-pink-500 font-medium border border-pink-500 p-2 rounded-full">
              Explore Now →
            </button>
          </div>

          {/* DECOR CARD */}
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center text-pink-400 text-sm">
            Handcrafted with love, just for you 💖
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="w-3/4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((item, index) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer group"
              >

                {/* IMAGE */}
                <div className="relative flex justify-center pt-4">
                  <div
                    className="
                    relative
                    overflow-hidden
                    w-[220px]
                    h-[300px]
                    transition-all
                    duration-700
                    ease-in-out
                    rounded-[45%_55%_50%_50%/30%_30%_70%_70%]
                    group-hover:rounded-[60%_40%_35%_65%/50%_70%_30%_50%]
                  "
                  >
                    <img
                      src={item.images}
                      alt={item.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* BADGES */}
                    <span className="absolute top-1 left-2 bg-pink-500 text-white text-xs p-1 rounded-full">
                      {index === 0 ? "NEW" : index === 1 ? "BESTSELLER" : index === 2 ? "TRENDING" : ""}
                    </span>

                    {/* HEART */}
                    <span className="absolute top-3 right-3 text-white text-xl">
                      <Heart />
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    <h3 className="text-sm font-medium text-gray-700">
                      {item.name}
                    </h3>

                    <p className="text-pink-500 font-semibold">
                      ₹{item.price}
                    </p>

                    {/* STOCK */}
                    <p className={`text-xs mt-1 ${item.inStock ? "text-green-600 bg-green-100  rounded-full p-1 w-20" : "text-red-500 bg-red-100 rounded-full p-1 w-24"}`}>
                      ● {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>

                    {/* BUTTON */}
                    <button
                      className={`mt-3 w-full py-2 rounded-full text-sm border transition
                  ${item.inStock
                          ? "border-pink-400 text-pink-500 bg-pink-100 hover:bg-pink-500 hover:text-white"
                          : "border-pink-400 text-pink-500 cursor-pointer"
                        }`}
                      disabled={!item.inStock}
                    >
                      {item.inStock ? "Add to Cart" : "Notify Me"}
                    </button>

                  </div>
                  </div>
                </div>
            ))}

          </div>  


        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600 px-8 py-8 mt-10">
          <div>💖 Handcrafted <br /> Made with love & care</div>
          <div>🌿 Unique Designs <br /> Each piece is one of a kind</div>
          <div>🛡 Quality Assured <br /> Premium fabrics & finish</div>
          <div>🚚 Easy Returns <br /> Hassle-free returns</div>
        </div>
      </div>
    </div>
</div>
  );
};

export default ShortKurtis;