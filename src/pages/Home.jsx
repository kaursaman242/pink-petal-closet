import React from "react";
import shortkurti from "/homeShortKurti .webp";
import kurti1 from "/kurti-1.webp";
import longkurti from "/longKurti-1.webp";
import longkurti2 from "/longKurti-2.webp";
import cordset from "/cord-set4.webp";
import cordset2 from "/cord-set3.webp"
import gift from "/hoopgift.webp";
import gift2 from "/hoopgift-2.webp"
import video from "/suitvideo.mp4";

const Home = () => {
  const products = [
    {
      name: "Short Kurti",
      Image: [shortkurti, kurti1],
    },
    {
      name: "Long Kurti",
      Image: [longkurti, longkurti2],
    },
    {
      name: "Co-ord Set",
      Image: [cordset,cordset2],
    },
    {
      name: "Gifts",
      Image: [gift,gift2],
    },
  ];

  return (
    <div className="bg-pink-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="relative w-full h-[80vh] overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-screen object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white">
            Pink Petal Closet
          </h1>

          <p className="mt-4 text-lg text-pink-100 max-w-xl">
            A brand made with love, just for girls who adore soft aesthetics,
            comfy fits and a little extra charm in every outfit.
          </p>

          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div className="px-6 md:px-16 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 text-center">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">

          {products.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              {/* IMAGE BOX */}
              <div className="relative h-80 overflow-hidden rounded-t-xl group">

                {item.Image.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={item.name}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 
                    ${
                      index === 0
                        ? "opacity-100 group-hover:opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                ))}
              </div>

              {/* TEXT */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-pink-600">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
{/* short kurti */}
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;