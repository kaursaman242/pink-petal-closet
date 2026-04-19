import React from "react";
import { Link } from "react-router-dom";
import bgImg from "/bgImgabout1.webp"
import aboutImg2 from "/kurti-1.webp";

const About = () => {
  return (
    <div className="bg-pink-100 min-h-screen font-heading">

      {/*  HERO */}
      <div className="relative h-[70vh] flex  items-center text-center mb-6">
        <div className="absolute h-96  backdrop-blur-sm">
          <img src={bgImg} alt="about image" />
        </div>

        <div className="relative z-10 text-pink-600 p-10   ">
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
      <div className="flex  px-4 mx-20 py-8 h-[450px] shadow-lg border border-pink-200 rounded-2xl mt-40 ">
        <div className="w-1/2">
          <img src={aboutImg2}
            alt="kurti"
            className="w-96 object-cover h-96  "
          />
        </div>

        <div className="text-lg px-10  justify-items-center items-center w-1/2 ">
          <h1 className="mt-2 mb-6  text-3xl font-heading font-bold text-pink-600">Why We Started</h1>
          <p className="text-[14px] text-gray-700" >Pink Petal Closet was created with a simple idea — to bring together style, comfort, and individuality for every girl. We noticed that many outfits in the market either lacked uniqueness or didn’t feel truly comfortable to wear. That inspired us to build a brand where every piece reflects elegance, softness, and confidence. While many brands offer printed kurtis, we focus on creating hand-embroidered and hand-painted designs that are completely handmade and truly one of a kind. At Pink Petal Closet, we focus on creating designs that feel personal and special, whether it’s a casual day out or a meaningful occasion. Our goal is to make every girl feel beautiful, confident, and effortlessly stylish in what she wears.</p>

        </div>

      </div>

      {/*  GLASS CARDS */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          {[
            {
              title: "Handmade with Love",
              desc: "Each piece is carefully handcrafted with attention to detail, bringing a personal touch that makes every outfit truly special and unique."
            },
            {
              title: "Custom Designs",
              desc: "We create designs based on your preferences, allowing you to express your personal style with outfits made just for you."
            },
            {
              title: "Premium Fabric",
              desc: "Our outfits are made from high-quality fabrics that ensure comfort, durability, and a luxurious feel every time you wear them."
            },
            {
              title: "Unique Style",
              desc: "We focus on hand-painted and hand-embroidered designs that stand out, giving you a look that is different from the crowd."
            }
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
            >

              {/* Heading */}
              <h3 className="text-lg font-bold text-pink-600 mb-2">
                {item.title}
              </h3>

              {/* Paragraph */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/*  FOUNDER */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8">

            {/* IMAGE */}
            <div className="w-40 h-40 flex-shrink-0">
              <img
                src="/founder.jpg"  // replace with your image
                alt="Founder"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>

            {/* TEXT */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-pink-600 mb-3">
                Meet the Founder
              </h2>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Pink Petal Closet was founded by Samandeep Kaur with a passion for
                creating unique and meaningful fashion. What started as a simple idea
                turned into a brand that celebrates individuality, creativity, and
                handmade artistry. She believes that clothing should not only look
                beautiful but also tell a story and make every girl feel confident.
              </p>

              <p className="text-gray-600 italic text-sm">
                “This brand is not just about outfits, it's about emotions. Every piece
                is created to make you feel confident, beautiful, and special in your
                own way.”
              </p>

              <h3 className="mt-4 font-semibold text-black">
                – Samandeep Kaur
              </h3>
            </div>

          </div>
        </div>

        {/*  CTA */}
        <div className="text-center px-4 mx-20 py-8  shadow-lg border border-pink-200 rounded-2xl  ">
          <h1 className="text-3xl text-pink-600 font-bold">Customs</h1>
          <p className="p-11 text-gray-700">At Pink Petal Closet, we believe your outfit should reflect your personality and style. That’s why we offer customization services where you can bring your ideas to life. Whether it’s choosing specific colors, patterns, or adding personal touches like hand embroidery or hand painting, we create outfits exactly the way you envision them. Our goal is to make every piece unique and meaningful, so you don’t just wear fashion — you wear something made especially for you.</p>

          <Link to="/customization"><button className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-110 transition shadow-lg">
            Customize Your Outfit
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default About;