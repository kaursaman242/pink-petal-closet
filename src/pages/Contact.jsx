import React from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="text-gray-500 mt-3">
          We'd love to hear from you. Reach out anytime
        </p>
      </div>

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <FaInstagram className="text-pink-500" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Instagram</h3>
              <p className="text-gray-500 text-sm">
                Follow us for updates & designs
              </p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917657827262"   
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <Phone className="text-green-500" size={28} />
            <div>
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p className="text-gray-500 text-sm">
                Chat with us instantly
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:kaursaman242@gmail.com"
            className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition"
          >
            <Mail className="text-blue-500" size={28} />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-500 text-sm">
                We reply within 24 hours
              </p>
            </div>
          </a>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Send us a message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Your information is safe with us.
          </p>

        </div>
      </div>

      {/* MAP SECTION */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid md:grid-cols-2 gap-6">

        {/* Address */}
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <MapPin className="text-pink-500" /> Our Location
          </h3>
          <p className="text-gray-600">
            Nirmal Ashram Street, <br />
            Khadur Sahib, Punjab, India
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-500 text-white px-5 py-2 rounded-lg w-fit hover:bg-pink-600 transition"
          >
            Get Directions
          </a>
        </div>

        {/* Google Map */}
        <div className="w-full h-[300px] rounded-xl overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.447573044521!2d75.08741128015835!3d31.424817448644152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a2c50cf92eab1%3A0x724d4991b04af69a!2sKhadur%20Sahib%2C%20Punjab%20143117!5e0!3m2!1sen!2sin!4v1776756738933!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
};

export default Contact;