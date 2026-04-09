import React from 'react'
import homeImg from "../assets/home.jpg";
import kurtiImg from "../assets/kurti1.jpeg"

const Home = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-pink-600 leading-tight">
            Pink Petal Closet
          </h1>
          <p className=" font-heading mt-4 text-lg text-pink-400">
            A brand made with love,just for girls who adore soft aesthetics, comfy fits and a little extra charm in every outfit. Each piece is thouughtfully handmade with love designed to make you feel confident, beautiful and uniquely you.
          </p>
          <button className=" font-heading mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        <img
          src={homeImg}
          alt="kurti"
          className="w-full md:w-96 mt-8 md:mt-0 rounded-2xl shadow-lg mr-12 h-[500px]"
        />
      </div>

      {/* FEATURED SECTION */}
      <div className="px-6 md:px-16 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 text-center font-heading">
          Featured Collection 
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 ">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={kurtiImg}
                alt="kurti"
                className="rounded-lg  w-full h-96 object-contain"
              />
              <h3 className="mt-3 text-lg font-medium font-heading">Handmade Kurti</h3>
              <p className="text-pink-500 font-heading">₹999</p>
              <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 font-heading">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
 );
};

      export default Home;
