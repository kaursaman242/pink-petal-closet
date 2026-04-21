import React from "react";
import { useNavigate } from "react-router-dom";
import kurti from "/kurti-1.webp"
import kurti1 from "/kurti-3.webp"
import kurti2 from "/kurti-4.webp"
import kurti3 from "/kurti-5.webp"
import kurti4 from "/kurti-6.webp"

const ShortKurtis = () => {
  const navigate = useNavigate();
 const products = [
  {
    id: 1,
    name: "Floral Short Kurti",
    price: "₹999",
    description: "Beautiful hand-painted floral kurti",
    images: kurti
  },
  {
    id: 2,
    name: "Elegant Kurti",
    price: "₹899",
    description: "Comfortable daily wear kurti",
    images: kurti1
  },
  {
    id: 3,
    name: "Designer Kurti",
    price: "₹1099",
    description: "Premium design for special occasions",
    images: kurti2
  },
  {
    id: 4,
    name: "Casual Kurti",
    price: "₹799",
    description: "Simple and stylish look",
    images: kurti3
  },
  {
    id: 5,
    name: "Party Wear Kurti",
    price: "₹1299",
    description: "Perfect for parties and functions",
    images: kurti4
  }
];

  return (
    <div className="p-6 bg-pink-50 min-h-screen font-heading">
  <h1 className="text-3xl text-pink-500 text-center mb-10 font-semibold">
    Short Kurtis
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
   {products.map((item) => (
  <div
    key={item.id}
    onClick={() => navigate(`/product/${item.id}`)}
    className="bg-white cursor-pointer rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
  >
    <img
      src={item.images}
      alt={item.name}
      className="w-full h-80 object-cover"
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

export default ShortKurtis;