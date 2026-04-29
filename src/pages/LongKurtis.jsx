import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import longkurti1 from "/long-kurti1.webp";
import longkurti2 from "/long-kurti2.webp";
import longkurti3 from "/long-kurti3.webp";
import longkurti4 from "/long-kurti4.webp";
import longkurti5 from "/long-kurti5.webp";
import longkurti6 from "/longKurti-6.webp";

const LongKurtis = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 101,
      name: "Elegant Long Kurti",
      price: 1299,
      inStock:"true",
      images: [longkurti1, longkurti2, longkurti3]
    },
    {
      id: 102,
      name: "Designer Long Kurti",
      price: 1499,
      inStock:"true",
      images: [longkurti2, longkurti3, longkurti4]
    },
    {
      id: 103,
      name: "Floral Long Kurti",
      price: 1199,
      inStock:"true",
      images: [longkurti3, longkurti4, longkurti5]
    },
    {
      id: 104,
      name: "Casual Long Kurti",
      price: 999,
      inStock:"true",
      images: [longkurti4, longkurti5, longkurti6]
    },
    {
      id: 105,
      name: "Party Wear Long Kurti",
      price: 1599,
      inStock:"true",
      images: [longkurti5, longkurti6, longkurti1]
    },
    {
      id: 106,
      name: "Classic Long Kurti",
      price: 1399,
      inStock:"true",
      images: [longkurti6, longkurti1, longkurti2]
    }
  ];

  const [availability, setAvailability] = useState("all")
  const [maxPrice, setMaxPrice] = useState(1500)

  const availableProducts = products.filter(()=>{
    if( availability === "in") return items.inStock;
    if (availability === "out") return !items.inStock;
    return "true"
  })

  return (
    <div className="p-6 bg-pink-50 min-h-screen font-heading">
      
      {/* TITLE */}
      <h1 className="text-3xl text-pink-500 text-center mb-10 font-semibold">
        Long Kurtis
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden"
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-80 object-cover transition duration-300 hover:scale-105"
            />

            <div className="p-4">
              <h3 className="text-sm">{item.name}</h3>
              <p className="text-pink-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LongKurtis;