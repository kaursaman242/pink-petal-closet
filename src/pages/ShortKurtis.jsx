import React from "react";
import kurti from "../assets/kurti-1.jpg"
import kurti1 from "../assets/kurti-3.jpg"
import kurti2 from "../assets/kurti-4.png"
import kurti3 from "../assets/kurti-5.jpg"
import kurti4 from "../assets/kurti-6.jpg"

const ShortKurtis = () => {
  const products = [
    {
      name:"shortkurti",
      Image:kurti
    },
    {
      name:"shortkurti1",
      Image:kurti1
    },
    {
      name:"shortkurti2",
      Image:kurti2
    },
    {
      name:"shortkurti3",
      Image:kurti3
    },
    {
      name:"shortkurti4",
      Image:kurti4
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl text-pink-500 text-center mb-6">
        Short Kurtis 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((item) => (
          <div key={item.name} className="shadow rounded-xl p-4">
            <img
              src={item.Image}
              alt={item.name}
              className="rounded-lg h-96 w-96 object-contain "
            />
            <h3 className="mt-3 font-semibold">Floral Short Kurti</h3>
            <p className="text-pink-500">₹999</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortKurtis;