import React from "react";
import longkurti1 from "/long-kurti1.webp"
import longkurti2 from "/long-kurti2.webp"
import longKurti3 from "/long-kurti3.webp"
import longkurti4 from "/long-kurti4.webp"
import longkurti5 from "/long-kurti5.webp"
import longkurti6 from "/longKurti-6.webp"

const LongKurtis = () => {
  const products =[
    {
      name:"longKurti1",
      Image:longkurti1
    },
    {
      name:"longKurti2",
      Image:longkurti2
    },
    {
      name:"longKurti3",
      Image:longKurti3
    },
    {
      name:"longKurti4",
      Image:longkurti4
    },
    {
      name:"longKurti5",
      Image:longkurti5
    },
    {
      name:"longKurti6",
      Image:longkurti6
    }
  ]
  return (
   <div className="p-6 bg-pink-50 min-h-screen">
  <h1 className="text-3xl text-pink-500 text-center mb-10">
    Short Kurtis
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
    {products.map((item) => (
      <div key={item.name} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">

        <img
          src={item.Image}
          alt={item.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold">Floral Short Kurti</h3>
          <p className="text-pink-500">₹999</p>
        </div>

      </div>
    ))}
  </div>
</div>
  );
};

export default LongKurtis;