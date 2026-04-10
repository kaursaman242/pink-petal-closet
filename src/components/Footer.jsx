import { Link } from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-black pt-10  mt-16 border-t font-heading py-12 ">
      <div className=" max-w-7xl mx-auto  px-6 grid md:grid-cols-6 gap-10  ">

     
        {/* Social + Newsletter */}
        <div className="pr-10 md:col-span-2">
          <h3 className="font-semibold text-3xl mb-3">Subscribe to our emails</h3>
          <p className="pb-4 text-gray-400">Be the first to know about new collections and exclusive offers.</p>

          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-12 p-2 border border-black rounded-md text-sm focus:outline-pink-400"
            />
            <button className="mt-2 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 whitespace-nowrap text-center">Quick Links</h3>
          <ul className="space-y-3 text-lg text-center">
            <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
            <li><Link to="/gifts" className="hover:text-pink-600">Gifts</Link></li>
            <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
          </ul>
        </div>

        {/* Our Collection */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 whitespace-nowrap text-center">Our Collection</h3>
          <ul className="space-y-3 text-lg text-center">
            <li><Link to="/faqs" className="hover:text-pink-600">Short Kurtis</Link></li>
            <li><Link to="/shipping" className="hover:text-pink-600">Long Kurtis</Link></li>
            <li><Link to="/returns" className="hover:text-pink-600">Co-ord Sets</Link></li>
            <li><Link to="/privacy" className="hover:text-pink-600">Gifts</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 text-center">Support</h3>
          <ul className="space-y-3 text-lg text-center">
            <li><Link to="/faqs" className="hover:text-pink-600">FAQs</Link></li>
            <li><Link to="/shipping" className="hover:text-pink-600">Shipping</Link></li>
            <li><Link to="/returns" className="hover:text-pink-600">Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* icons */}
        <div>
          <h3 className="font-semibold text-2xl mb-3 text-center">Stay Connected</h3>
          <ul className="space-y-3 text-2xl items-center flex flex-col">
            <li><FaInstagram className="cursor-pointer hover:text-pink-600" /></li>
            <li><FaTwitter className="cursor-pointer hover:text-pink-600" /></li>
            <li><FaFacebook className="cursor-pointer hover:text-pink-600" /></li>
          </ul>
        </div>


      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t pt-4">
        © 2026 Pink Petal Closet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;