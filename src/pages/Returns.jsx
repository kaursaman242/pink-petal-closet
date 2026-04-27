import React from "react";
import {Pin, Hourglass, BadgeIndianRupee, Ban } from "lucide-react"

const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-heading">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Returns & Refunds 
      </h1>

      <div className="space-y-6 text-gray-700 leading-7">

        <div className="p-5 shadow rounded-xl">
          <h3 className=" flex gap-4 font-semibold text-lg"><Pin /> Return Policy</h3>
          <p>
            We accept returns only in case of damaged or incorrect products.
          </p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><Hourglass /> Return Time</h3>
          <p>
            You must request a return within 48 hours of receiving the product.
          </p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><BadgeIndianRupee /> Refund Process</h3>
          <p>
            Refunds are processed within 5–7 working days after approval.
          </p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><Ban /> Non-returnable Items</h3>
          <p>
            Customized or personalized products cannot be returned.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Returns;