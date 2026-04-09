import React from "react";
import longkurti1 from "../assets/longKurti-1.jpg"
import longkurti2 from "../assets/longKurti-2.jpg"
import longKurti3 from "../assets/longKurti-3.jpg"
import longkurti4 from "../assets/longKurti-4.jpg"
import longkurti5 from "../assets/longKurti-5.jpg"
import longkurti6 from "../assets/longKurti-6.jpg"

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