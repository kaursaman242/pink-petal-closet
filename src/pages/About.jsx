import React from "react";
import aboutImg2 from "/kurti-1.webp";

const About = () => {
  return (
    <div className="bg-pink-100 min-h-screen">

      {/*  HERO */}
      <div className="relative h-[70vh] flex items-center justify-center text-center bg-pink-300">
        <div className="absolute inset-0  backdrop-blur-sm"></div>

        <div className="relative z-10 text-pink-600 px-6 ">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">
            About Pink Petal 
          </h1>
          <p className="text-lg mb-6">
            Wear Elegance, Feel Special 
          </p>
          <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition ">
            Explore Collection
          </button>
        </div>
      </div>

       {/* OUR STORY
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Hi, I’m Samandeep Kaur. Me and my sisters started Pink Petal Closet
          with a dream to create something special for girls who love elegance
          and uniqueness. This brand is not just clothing, it's a feeling 
        </p>
      </div> */}

      {/*  IMAGE + TEXT */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center pb-20  h-[450px] m-20">
        
        <img
          src={aboutImg2}
          alt="design"
          className="rounded-2xl shadow-xl  h-96"
        />

        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Why We Started
          </h2>
          <p className="text-gray-800 leading-relaxed">
            As a girl, I always wanted to wear something unique, comfortable,
            and aesthetic. That’s why I started this brand for girls who think
            like me. Every outfit is designed with love and care to make you
            feel confident and special.
          </p>
        </div>
      </div>

      {/*  GLASS CARDS */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Handmade with Love ",
            "Custom Designs ",
            "Premium Fabric ",
            "Unique Style ",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center"
            >
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/*  FOUNDER */}
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-pink-600 mb-6">
            Meet the Founder
          </h2>
          <p className="text-gray-800 italic">
            “This brand is not just about outfits, it's about emotions. Every
            piece is created to make you feel confident, beautiful, and special
            in your own way.”
          </p>
          <h3 className="mt-4 font-semibold text-pink-500">
            – Samandeep Kaur
          </h3>
        </div>
      </div>

      {/*  CTA */}
      <div className="text-center py-16 " >
        <p className="p-11">You can also customize your outfits according to you just tell us your ideas.</p>
      
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-110 transition shadow-lg">
          Customize Your Outfit 
        </button>
      </div>
    </div>
  );
};

export default About;