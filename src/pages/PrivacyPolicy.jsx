import React from "react";
import {FileUser, LockKeyhole, ShieldEllipsis, Phone} from "lucide-react"

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 font-heading">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Privacy Policy 
      </h1>

      <div className="space-y-6 text-gray-700 leading-7">

        <p>
          We respect your privacy and are committed to protecting your personal information.
        </p>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><FileUser /> Information We Collect</h3>
          <p>Name, email, phone number, and shipping address.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><LockKeyhole /> How We Use It</h3>
          <p>To process orders, improve services, and communicate with you.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><ShieldEllipsis /> Security</h3>
          <p>Your data is safe and we do not share it with third parties.</p>
        </div>

        <div className="p-5 shadow rounded-xl">
          <h3 className="flex gap-4 font-semibold text-lg"><Phone /> Contact</h3>
          <p>If you have questions, contact us via email or social media.</p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;