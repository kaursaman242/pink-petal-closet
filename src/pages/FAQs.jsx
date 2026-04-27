import React from "react";

const FAQs = () => {
  const faqs = [
    {
      q: "How can I place an order?",
      a: "You can place an order directly through our website or contact us via Instagram or WhatsApp."
    },
    {
      q: "How long does delivery take?",
      a: "Orders are usually delivered within 5–7 working days depending on your location."
    },
    {
      q: "Do you offer customization?",
      a: "Yes! We offer customized designs. Contact us with your idea and we’ll make it for you."
    },
    {
      q: "What payment methods are available?",
      a: "We accept UPI, bank transfer, and Cash on Delivery (if available)."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 font-heading">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        FAQs 
      </h1>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index} className="p-5 shadow rounded-xl bg-white">
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;