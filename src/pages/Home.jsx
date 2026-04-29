import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import shortkurti from "/homeShortKurti .webp";
import kurti1 from "/kurti-1.webp";
import longkurti from "/long-kurti1.webp";
import longkurti2 from "/long-kurti2.webp";
import cordset from "/cord-set4.webp";
import cordset2 from "/cord-set3.webp";
import gift from "/hoopgift.webp";
import gift2 from "/hoopgift-2.webp";
import video from "/bg-video.MP4";

const Home = () => {

  const products = [
    {
      name: "Short Kurti",
      link: "/short-kurtis",
      Image: [shortkurti, kurti1],
    },
    {
      name: "Long Kurti",
      link: "/long-kurtis",
      Image: [longkurti, longkurti2],
    },
    {
      name: "Co-ord Sets",
      link: "/coord-sets",
      Image: [cordset, cordset2],
    },
    {
      name: "Gifts",
      link: "/gifts",
      Image: [gift, gift2],
    },
  ];

  const trendingProducts = [
    {
      name: "Trendy Short Kurti",
      price: "Rs. 4,499",
      image: kurti1,
    },
    {
      name: "Trendy Long Kurti",
      price: "Rs. 3,499",
      image: longkurti,
    },
    {
      name: "Trendy Co-ord Set",
      price: "Rs. 2,199",
      image: cordset,
    },
    {
      name: "Wedding Hoop",
      price: "Rs. 5,999",
      image: gift,
    },
    {
      name: "Co-ord set",
      price: "Rs. 2,799",
      image: cordset2,
    },
  ];
  const [active, setActive] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % trendingProducts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [trendingProducts.length]);

  return (
    <div className="bg-pink-100 min-h-screen font-heading m-0 p-0 ">

      {/* HERO SECTION */}
      <div className="relative w-full h-[90vh] overflow-hidden aspect-[3af'w[]0/4]">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-screen object-cover "
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
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
      <div className="px-6 md:px-16 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 text-center">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 ">

          {products.map((item) => (
            <Link to={item.link} key={item.name}>
              <div className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">

                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden rounded-t-xl group">
                  {item.Image.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={item.name}
                      className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 
                      ${index === 0
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
            </Link>
          ))}

        </div>
      </div>


      {/* TRENDING CAROUSEL */}
      <div className=" bg-pink-100  ">

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-600 mb-10">
          Trending Collection
        </h2>

        <div className="relative flex justify-center items-center h-[550px]">

          {trendingProducts.map((item, index) => {
            let position =
              (index - active + trendingProducts.length) %
              trendingProducts.length;

            if (position > 2) position -= trendingProducts.length;

            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`absolute transition-all duration-500 cursor-pointer 
          ${position === 0
                    ? "z-30 scale-125"
                    : position === -1
                      ? "z-20 -translate-x-44 scale-100 "
                      : position === 1
                        ? "z-20 translate-x-44 scale-100"
                        : position === -2
                          ? "z-10 -translate-x-80 scale-75 "
                          : position === 2
                            ? "z-10 translate-x-80 scale-75"
                            : "opacity-0 pointer-events-auto"
                  }`}
              >
                <div className="bg-white rounded-2xl shadow-xl  w-[260px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-80 w-full object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">{item.price}</p>

                    <button className="mt-3 w-full border rounded-full py-2 hover:bg-pink-600 hover:text-white transition">
                      Shop now
                    </button>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Short kurti */}
      <div className="flex gap-10 px-4 m-20 py-6 h-[450px] shadow-lg border border-pink-200 rounded-2xl ">
        <div className="w-[120%]">
          <img src={kurti1}
            alt="kurti"
            className="w-full object-cover h-96  "
          />
        </div>

        <div className=" justify-items-center content-center ">
          <h1 className="m-8 pb-18 text-4xl font-heading font-bold">Short Kurtis</h1>
          <p className="text-center text-gray-600 text-xl px-8">Not just everyday wear-our short kurtis are designed to add a spark to your routine style.Created for those who love to keep things simple yet expressive, each piece blends comfort with a hint of creativity that makes it stand out effortlessly.From subtle hand-painted details to finely crafted embroidery, every kurti carries a distinct vibe that feels fresh, artistic, and uniquely yours. Easy to wear, easy to style, and made to move with you-these short kurtis are perfect for days when you want to feel confident, comfortable, and a little different from the rest.</p>
           <Link to="/short-kurtis"> <button className="mt-8 mx-72 w-36 border border-pink-500 rounded-full py-2 hover:bg-pink-600 hover:text-white transition">
            View More
          </button>
          </Link>
        </div>

      </div>


      {/* long kurti */}
      <div className="flex gap-20 px-4 m-20 py-8 h-[450px] shadow-lg border border-pink-200 rounded-2xl mb-0   ">

        <div className="  justify-items-center  w-[70%] content-center ">
          <h1 className="m-8 pb-18 text-4xl font-heading font-bold ">Long Kurtis</h1>
          <p className="text-center text-gray-600 text-xl px-8">Made with soft, breathable fabrics, our kurtis are designed to keep you comfortable while enhancing your confidence throughout the day. Whether you’re heading out for a casual outing or a special occasion, these handcrafted pieces add a unique charm to your look.Every design is created with care, passion, and attention to detail—so you don’t just wear fashion, you wear something meaningful. Explore our collection and discover styles that are as unique and beautiful as you are.</p>
          <Link to="/long-kurtis" ><button className="mt-8 mx-72 w-36 border border-pink-500 rounded-full py-2 hover:bg-pink-600 hover:text-white transition">
            View More
          </button>
          </Link>
        </div>

        <div >
          <img src={longkurti}
            alt="kurti"
            className="w-96 object-cover h-96 pl-4 pr-0 float-right  "
          />
        </div>

      </div>


      {/* co-ord sets */}
      <div className="flex gap-10 px-4 m-20 py-8 h-[450px] shadow-lg border border-pink-200 rounded-2xl  ">
        <div className="w-[90%]">
          <img src={cordset}
            alt="kurti"
            className="w-full object-cover h-96  "
          />
        </div>

        <div className="justify-items-center content-center">
          <h1 className="m-8 pb-18 text-4xl font-heading font-bold">Co-ord Sets</h1>
          <p className="text-center text-gray-600 text-xl px-8">Our co-ord sets are all about easy fashion and everyday confidence. Designed for the modern woman, these perfectly matched pieces offer a chic, coordinated look without any effort. From relaxed fits to trendy cuts, each outfit is made to keep you comfortable while staying on top of fashion trends. Dress it up with accessories or keep it simple—either way, you’ll always look effortlessly put together. </p>
           <Link to="/coord-sets"> <button className="mt-8 mx-72 w-36 border border-pink-500 rounded-full py-2 hover:bg-pink-600 hover:text-white transition">
            View More
          </button>
          </Link>
        </div>

      </div>

      {/* gifts */}
      <div className="flex gap-20 px-4 m-20 py-8 h-[450px] shadow-lg border border-pink-200 rounded-2xl mb-0   ">

        <div className="  justify-items-center  w-[70%] content-center ">
          <h1 className="m-8 pb-18 text-4xl font-heading font-bold ">Gifts</h1>
          <p className="text-center text-gray-600 text-xl px-8">Discover the beauty of handmade artistry with our thoughtfully crafted hoop gifts. Each piece is carefully designed and stitched by hand, turning simple threads into meaningful expressions of love and creativity. Whether it’s a personalized name, a special date, or a delicate design, every hoop is unique and made to celebrate your most cherished moments. Perfect for gifting or decorating your space, these handcrafted hoops bring warmth, charm, and a personal touch that no mass-produced item can ever match. </p>
          <Link to="/gifts" ><button className="mt-8 mx-72 w-36 border border-pink-500 rounded-full py-2 hover:bg-pink-600 hover:text-white transition">
            View More
          </button>
          </Link>
        </div>

        <div >
          <img src={gift2}
            alt="kurti"
            className="w-96 object-cover h-96 pl-4 pr-0 float-right  "
          />
        </div>

      </div>

    </div>
  )
}

export default Home;