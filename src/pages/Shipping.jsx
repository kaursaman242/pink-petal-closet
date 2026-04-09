import React from "react";

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Shipping Information 🚚
      </h1>

      <div className="space-y-6 text-gray-700 leading-7">
        <p>
          We aim to deliver your orders as quickly and safely as possible.
        </p>

        <div className="p-5 shadow rounded-xl">
          <h3 className="font-semibold text-lg">📦 Processing Time</h3>
          <p>Orders are processed within 1–3 working days.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="font-semibold text-lg">🚛 Delivery Time</h3>
          <p>Delivery usually takes 5–7 business days across India.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="font-semibold text-lg">💰 Shipping Charges</h3>
          <p>Shipping charges may vary based on location and order value.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="font-semibold text-lg">📍 Tracking</h3>
          <p>You will receive tracking details once your order is shipped.</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;