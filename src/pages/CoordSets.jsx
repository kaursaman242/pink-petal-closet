import React from "react";
import { useNavigate } from "react-router-dom";

import cordSet1 from "/cord-set1.webp";
import cordSet2 from "/cord-set2.webp";
import cordSet3 from "/cord-set3.webp";
import cordSet4 from "/cord-set4.webp";
import cordSet5 from "/cord-set5.webp";
import cordSet6 from "/cord-set6.webp";

const CoordSets = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 201,
      name: "Floral Co-ord Set",
      price: "₹1499",
      images: [cordSet1, cordSet2, cordSet3]
    },
    {
      id: 202,
      name: "Elegant Co-ord Set",
      price: "₹1399",
      images: [cordSet2, cordSet3, cordSet4]
    },
    {
      id: 203,
      name: "Designer Co-ord Set",
      price: "₹1699",
      images: [cordSet3, cordSet4, cordSet5]
    },
    {
      id: 204,
      name: "Casual Co-ord Set",
      price: "₹1199",
      images: [cordSet4, cordSet5, cordSet6]
    },
    {
      id: 205,
      name: "Party Wear Co-ord Set",
      price: "₹1799",
      images: [cordSet5, cordSet6, cordSet1]
    },
    {
      id: 206,
      name: "Classic Co-ord Set",
      price: "₹1599",
      images: [cordSet6, cordSet1, cordSet2]
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

export default CoordSets;