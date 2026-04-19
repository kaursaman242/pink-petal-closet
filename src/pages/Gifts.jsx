import React from "react";
import { useNavigate } from "react-router-dom";

import gift1 from "/weddinghoop-1.webp";
import gift2 from "/anniversaryhoop-1.webp";
import gift3 from "/birthdayhoop-1.webp";
import gift4 from "/weddinghoop-2.webp";
import gift5 from "/birthdayhoop-2.webp";
import gift6 from "/anniversaryhoop-2.webp";
import gift7 from "/anniversaryhoop-4.webp";


const Gifts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 201,
      name: "Wedding Hoop",
      price: "₹1499",
      images: [gift1]
    },
    {
      id: 202,
      name: "Anniversary Hoop",
      price: "₹1399",
      images: [gift2]
    },
    {
      id: 203,
      name: "Birthday Hoop",
      price: "₹1699",
      images: [gift3]
    },
    {
      id: 204,
      name: "Wedding Hoop",
      price: "₹1199",
      images: [gift4]
    },
    {
      id: 205,
      name: "Birthday Hoop",
      price: "₹1799",
      images: [gift5]
    },
    {
      id: 206,
      name: "Anniversary Hoop",
      price: "₹1599",
      images: [gift6]
    },
    {
      id: 207,
      name: "Anniversary Hoop",
      price: "₹1599",
      images: [gift7]
    }
  ];

  return (
    <div className="p-6 bg-pink-50 min-h-screen font-heading">

      {/* TITLE */}
      <h1 className="text-3xl text-pink-500 text-center mb-10 font-semibold">
        Co-ord Sets
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="bg-white cursor-pointer rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden"
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-full h-80 object-cover transition duration-300 hover:scale-105"
            />

            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-pink-500">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gifts;