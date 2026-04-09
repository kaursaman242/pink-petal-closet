import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gifts from "./pages/Gifts";
import Customization from "./pages/Customization";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ShortKurtis from "./pages/ShortKurtis";
import LongKurtis from "./pages/LongKurtis";
import CoordSets from "./pages/CoordSets";
import FAQs from "./pages/FAQs";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/short-kurtis" element={<ShortKurtis />} />
        <Route path="/long-kurtis" element={<LongKurtis />} />
        <Route path="/coord-sets" element={<CoordSets />} />
        <Route path="/FAQs" element={<FAQs/>} />
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/returns" element={<Returns/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;