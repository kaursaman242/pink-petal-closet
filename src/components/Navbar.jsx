import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Heart, Search } from "lucide-react"
import logo from "../assets/logoo1.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = [
        { name: "About", path: "/about" },
        { name: "Short Kurtis", path: "/short-kurtis" },
        { name: "Long Kurtis", path: "/long-kurtis" },
        { name: "Co-ord Sets", path: "/coord-sets" },
        { name: "Gifts", path: "/gifts" },
        { name: "Customization", path: "/customization" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <nav className="bg-pink-50 shadow font-heading px-4 sticky top-0 z-10">
            <div className="flex  items-center ">

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>


                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center text-black text-xl">
                    <Link to="/" className=" w-60 h-26"><img src={logo} alt="Home" /></Link>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative group hover:text-pink-600"
                        >
                            {item.name}
                            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-600 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                    ))}

                    <div className='flex gap-6 pl-64 '>
                        <input type="text"
                            placeholder='Search'
                            className='w-full h-12 p-2 border border-black rounded-md text-sm focus:outline-pink-400'
                        />
                        <Link to="/wishlist" className="text-black text-center pt-2"><Heart /></Link>
                        <Link to="/cart" className="text-black text-center pt-2"><ShoppingCart /></Link>

                    </div>


                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/gifts">Gifts</Link>
                    <Link to="/customization">Customization</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/cart">Cart</Link>
                </div>)}
        </nav>
    )

}


export default Navbar;
