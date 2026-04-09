import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-500">
        Contact Us 
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE - CONTACT LINKS */}
        <div className="space-y-6">
          
          <a href="https://instagram.com" target="_blank"
            className="flex items-center gap-4 p-4 shadow rounded-lg hover:bg-pink-50">
            <FaInstagram className="text-2xl text-pink-500" />
            <span>Instagram</span>
          </a>

          <a href="https://wa.me/919999999999" target="_blank"
            className="flex items-center gap-4 p-4 shadow rounded-lg hover:bg-green-50">
            <FaWhatsapp className="text-2xl text-green-500" />
            <span>WhatsApp</span>
          </a>

          <a href="mailto:yourmail@gmail.com"
            className="flex items-center gap-4 p-4 shadow rounded-lg hover:bg-gray-50">
            <FaEnvelope className="text-2xl text-gray-600" />
            <span>Email Us</span>
          </a>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="space-y-4 shadow p-6 rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded h-32"
          />
          <button className="bg-pink-500 text-white px-6 py-2 rounded w-full hover:bg-pink-600">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;