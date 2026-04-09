import { useState } from "react";

const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Floral Short Kurti",
      price: 999,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 2,
      name: "Elegant Long Kurti",
      price: 1499,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    },
    {
      id: 3,
      name: "Co-ord Set",
      price: 1999,
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Added to cart 💖");
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition duration-300"
        >
          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>

            <p className="text-pink-500 font-bold mt-1">
              ₹{item.price}
            </p>

            {/* BUTTON */}
            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition transform hover:scale-105"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;