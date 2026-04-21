import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

// 🔹 SHORT KURTI IMAGES
import kurti from "/kurti-1.webp";
import kurti1 from "/kurti-3.webp";
import kurti2 from "/kurti-4.webp";
import kurti3 from "/kurti-5.webp";
import kurti4 from "/kurti-6.webp";

// 🔹 LONG KURTI IMAGES
import longkurti1 from "/long-kurti1.webp";
import longkurti2 from "/long-kurti2.webp";
import longkurti3 from "/long-kurti3.webp";
import longkurti4 from "/long-kurti4.webp";
import longkurti5 from "/long-kurti5.webp";
import longkurti6 from "/longKurti-6.webp";

// 🔹 CO-ORD SET IMAGES
import cordSet1 from "/cord-set1.webp";
import cordSet2 from "/cord-set2.webp";
import cordSet3 from "/cord-set3.webp";
import cordSet4 from "/cord-set4.webp";
import cordSet5 from "/cord-set5.webp";
import cordSet6 from "/cord-set6.webp";

// 🔹 GIFT IMAGES
import gift1 from "/weddinghoop-1.webp";
import gift2 from "/anniversaryhoop-1.webp";
import gift3 from "/birthdayhoop-1.webp";
import gift4 from "/weddinghoop-2.webp";
import gift5 from "/birthdayhoop-2.webp";
import gift6 from "/anniversaryhoop-2.webp";
import gift7 from "/anniversaryhoop-4.webp";

const products = [
    // SHORT
    {
        id: 1,
        name: "Floral Short Kurti",
        price: "₹999",
        description: "Beautiful hand-painted floral kurti",
        images: [kurti],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 2,
        name: "Elegant Kurti",
        price: "₹899",
        description: "Comfortable daily wear kurti",
        images: [kurti1],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 3,
        name: "Designer Kurti",
        price: "₹1099",
        description: "Premium design for special occasions",
        images: [kurti2],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 4,
        name: "Casual Kurti",
        price: "₹799",
        description: "Simple and stylish look",
        images: [kurti3],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 5,
        name: "Party Wear Kurti",
        price: "₹1299",
        description: "Perfect for parties and functions",
        images: [kurti4],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },

    // LONG
    {
        id: 101,
        name: "Elegant Long Kurti",
        price: "₹1299",
        images: [longkurti1, longkurti2, longkurti3],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 102,
        name: "Designer Long Kurti",
        price: "₹1499",
        images: [longkurti2, longkurti3, longkurti4],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 103,
        name: "Floral Long Kurti",
        price: "₹1199",
        images: [longkurti3, longkurti4, longkurti5],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 104,
        name: "Casual Long Kurti",
        price: "₹999",
        images: [longkurti4, longkurti5, longkurti6],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 105,
        name: "Party Wear Long Kurti",
        price: "₹1599",
        images: [longkurti5, longkurti6, longkurti1],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 106,
        name: "Classic Long Kurti",
        price: "₹1399",
        images: [longkurti6, longkurti1, longkurti2],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },

    // CO-ORD
    {
        id: 201,
        name: "Floral Co-ord Set",
        price: "₹1499",
        images: [cordSet1, cordSet2, cordSet3],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 202,
        name: "Elegant Co-ord Set",
        price: "₹1399",
        images: [cordSet2, cordSet3, cordSet4],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 203,
        name: "Designer Co-ord Set",
        price: "₹1699",
        images: [cordSet3, cordSet4, cordSet5],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 204,
        name: "Casual Co-ord Set",
        price: "₹1199",
        images: [cordSet4, cordSet5, cordSet6],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 205,
        name: "Party Wear Co-ord Set",
        price: "₹1799",
        images: [cordSet5, cordSet6, cordSet1],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 206,
        name: "Classic Co-ord Set",
        price: "₹1599",
        images: [cordSet6, cordSet1, cordSet2],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },

    // GIFTS
    {
        id: 301,
        name: "Wedding Hoop",
        price: "₹1499",
        images: [gift1],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 302,
        name: "Anniversary Hoop",
        price: "₹1399",
        images: [gift2],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 303,
        name: "Birthday Hoop",
        price: "₹1699",
        images: [gift3],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 304,
        name: "Wedding Hoop",
        price: "₹1199",
        images: [gift4],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 305,
        name: "Birthday Hoop",
        price: "₹1799",
        images: [gift5],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 306,
        name: "Anniversary Hoop",
        price: "₹1599",
        images: [gift6],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    },
    {
        id: 307,
        name: "Anniversary Hoop",
        price: "₹1599",
        images: [gift7],
        about: "Beautiful hand embroidered short kurti",
        fabric: "Cotton",
        color: "Black",
        sleeves:"Full Sleeves",
        fit: "Regular"
    }
];


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQty = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQty = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((item) => item.id === Number(id));
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!product) return <h2 className="text-center mt-10">Product not found</h2>;

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const relatedProducts = products.filter((item) => item.id !== product.id);

    return (
        <div className="p-6 md:p-10 bg-pink-50 min-h-screen">

            {/* MAIN SECTION */}
            <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10">

                {/* IMAGE SECTION */}
                <div className="relative">
                    <img
                        src={product.images[currentIndex]}
                        className="w-full h-[400px] object-cover rounded-xl transition duration-300"
                    />

                    {/* LEFT ARROW */}
                    <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow hover:bg-pink-500 hover:text-white transition"
                    >
                        <ChevronLeft />
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow hover:bg-pink-500 hover:text-white transition"
                    >
                        <ChevronRight />
                    </button>

                    {/* THUMBNAILS */}
                    <div className="flex gap-3 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-20 h-20 object-cover rounded cursor-pointer border ${currentIndex === index
                                    ? "border-pink-500"
                                    : "border-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* DETAILS */}
                <div>

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

                    {/* PRICE */}
                    <div className="flex items-center gap-3 mb-4">
                        <p className="text-pink-600 text-2xl font-semibold">
                            {product.price}
                        </p>

                    </div>

                    {/* DESCRIPTION (PRO STYLE) */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Prettiest design kurti perfect for every occasion. A stylish blend of tradition and modern fashion.
                        <br /><br />
                        <span className="font-semibold">Fabric:</span> Cotton
                        <span className="font-semibold"> | Color:</span> Printed
                        <span className="font-semibold"> | Sleeves:</span> Full Sleeves
                        <span className="font-semibold"> | Fit:</span> Regular
                        <span className="font-semibold"> | Occasion:</span> Casual, College, Outings
                    </p>

                    {/* SIZE */}
                    <div className="mb-6">
                        <h4 className="font-semibold mb-2">Select Size:</h4>
                        <div className="flex gap-3">
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <button
                                    key={size}
                                    className="border px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* QUANTITY + CART */}
                    <div className="flex items-center gap-4 mb-5">


                        {/* Quantity */}
                        <div className="flex items-center border rounded-md ">

                            <button
                                onClick={decreaseQty}
                                className="px-3 py-1 text-lg hover:bg-gray-100"
                            >
                                −
                            </button>

                            <span className="px-4">{quantity}</span>

                            <button
                                onClick={increaseQty}
                                className="px-3 py-1 text-lg hover:bg-gray-100"
                            >
                                +
                            </button>

                        </div>

                        {/* Add to Cart */}
                        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 w-full">
                            Add to Cart
                        </button>

                    </div>

                    {/* BUY NOW */}
                    <button className="w-full border py-2 rounded-md mb-5 hover:bg-gray-100">
                        Buy It Now
                    </button>

                    {/* WHATSAPP */}
                    <button
                        onClick={() => {
                            const phone = "91XXXXXXXXXX";
                            const message = `Hi, I want to order:
                               ${product.name}
                                Price: ${product.price}
                                
                                Also I want customization:`;

                            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                            window.open(url, "_blank");
                        }}
                        className="w-full flex justify-center items-center gap-2 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Order on WhatsApp
                    </button>

                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-16 max-w-6xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Related Products
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => navigate(`/product/${item.id}`)}
                                className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition overflow-hidden"
                            >
                                <img
                                    src={item.images[0]}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-3">
                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                    <p className="text-pink-500">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;