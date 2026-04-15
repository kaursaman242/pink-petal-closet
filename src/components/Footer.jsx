import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white px-10 py-16 ">
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-10 ">


        {/* Social + Newsletter */}
       <div>
      <h2 className="text-2xl font-semibold mb-4">Subscribe to our emails</h2>
      <p className="text-sm mb-4">
        Be the first to know about new collections and exclusive offers.
      </p>

      <input
        type="email"
        placeholder="Your email"
        className="w-full px-4 py-3 rounded-full bg-white/80 text-black focus:outline-none"
      />

      <button className="mt-4 w-full bg-white text-pink-600 font-semibold py-3 rounded-full hover:bg-pink-100 transition">
        Subscribe
      </button>
    </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 whitespace-nowrap text-center">Quick Links</h3>
          <div className="items-start pl-8 text-left ml-20 mr-6">
            <ul className="space-y-3 text-lg ">
              <li><Link to="/" className="hover:text-pink-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-200">About</Link></li>
              <li><Link to="/gifts" className="hover:text-pink-200">Gifts</Link></li>
              <li><Link to="/contact" className="hover:text-pink-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Our Collection */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 whitespace-nowrap text-center">Our Collection</h3>
          <div className="items-start pl-6 text-left ml-16 mr-4">
            <ul className="space-y-3 text-lg ">
              <li><Link to="/short-kurtis" className="hover:text-pink-200">Short Kurtis</Link></li>
              <li><Link to="/long-kurtis" className="hover:text-pink-200">Long Kurtis</Link></li>
              <li><Link to="/coord-sets" className="hover:text-pink-200">Co-ord Sets</Link></li>
              <li><Link to="/gifts" className="hover:text-pink-200">Gifts</Link></li>
            </ul>
          </div>

        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 text-center">Support</h3>
          <div className="items-start pl-11 text-left ml-16 mr-2">
            <ul className="space-y-3 text-lg ">
              <li><Link to="/faqs" className="hover:text-pink-200">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-pink-200">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-pink-200">Returns</Link></li>
              <li><Link to="/privacy" className="hover:text-pink-200">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* icons */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 text-center">Stay Connected</h3>
          <div className="items-start pl-2 text-left ml-4 mr-4">
            <ul className="space-y-3 text-2xl items-center flex flex-col">
            <li><FaInstagram className="cursor-pointer hover:text-pink-200" /></li>
            <li><FaTwitter className="cursor-pointer hover:text-pink-200" /></li>
            <li><FaFacebook className="cursor-pointer hover:text-pink-200" /></li>
          </ul>
          </div>
          
        </div>


      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white mt-8 border-t pt-4">
        © 2026 Pink Petal Closet. All rights reserved.
      </div>
    </footer >
  );
};

export default Footer;