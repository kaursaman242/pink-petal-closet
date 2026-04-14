import React from "react";
import longkurti1 from "/longKurti-1.webp"
import longkurti2 from "/longKurti-2.webp"
import longKurti3 from "/longKurti-3.webp"
import longkurti4 from "/longKurti-4.webp"
import longkurti5 from "/longKurti-5.webp"
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
    <div className="p-6">
      <h1 className="text-3xl text-pink-500 text-center mb-6">
        Long Kurtis
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.name} className="shadow rounded-xl p-4">
            <img
              src={item.Image}
              alt={item.name}
              className="rounded-lg h-96 w-full object-contain"
            />
            <h3 className="mt-3 font-semibold">Elegant Long Kurti</h3>
            <p className="text-pink-500">₹1499</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongKurtis;