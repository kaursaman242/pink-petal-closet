import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import {ShoppingCart,Heart,Search} from "lucide-react"
import logo from "../assets/logoo1.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <Link to="/" className="hover:text-pink-600 w-60 h-26"><img src={logo} alt="Home" /></Link>
                    <Link to="/about" className="hover:text-pink-600">About</Link>
                    <Link to="/short-kurtis" className="hover:text-pink-600">Short Kurtis</Link>
                    <Link to="/long-kurtis" className="hover:text-pink-600">Long Kurtis</Link>
                    <Link to="/coord-sets" className="hover:text-pink-600">Co-ord Sets</Link>
                    <Link to="/gifts" className="hover:text-pink-600">Gifts</Link>
                    <Link to="/customization" className="hover:text-pink-600">Customization</Link>
                    <Link to="/contact" className="hover:text-pink-600">Contact</Link>

                    <div className='flex gap-6 pl-40'>
                        <input type="text"
                        placeholder='Search'
                        className='border border-black p-1'
                        />
                        <Link to="/wishlist" className="text-black"><Heart/></Link>
                        <Link to="/cart" className="text-black"><ShoppingCart /></Link>
   
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
