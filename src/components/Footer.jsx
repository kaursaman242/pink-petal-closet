import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-700 pt-10 pb-5 mt-16 border-t font-heading">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600">
            Pink Petal Closet
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Discover trendy outfits, curated gifts, and timeless styles made
            just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
            <li><Link to="/gifts" className="hover:text-pink-500">Gifts</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>

          {/* <div className="flex gap-4 mb-4">
            <Instagram className="cursor-pointer hover:text-pink-500" />
            <Twitter className="cursor-pointer hover:text-pink-500" />
          </div> */}

          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border rounded-md text-sm focus:outline-pink-400"
            />
            <button className="mt-2 w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              Subscribe
            </button>
          </div>
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