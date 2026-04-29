import React, { useState } from "react";
import customeImg from "/customization.webp"

const Customization = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert("Customization request submitted");
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-6 font-heading">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:block">
          <img
            src={customeImg}
            alt="fashion"
            className="h-full w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-pink-500">
            Customization
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Have a unique clothing design in mind? Share your idea and we’ll bring it to life.
          </p>

          {/* NAME */}
          <input
            className="w-full border border-gray-300 p-3 mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Your Name"
          />

          {/* DESIGN IDEA */}
          <input
            className="w-full border border-gray-300 p-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink=300"
            placeholder="Design Idea"
          />

          {/* DESCRIPTION */}
          <textarea
            className="w-full border border-gray-300 p-3 mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            rows="4"
            placeholder="Describe your customization"
          ></textarea>

          {/* FILE UPLOAD */}
          <div className="mt-4">
            <label className="block text-sm text-gray-600 mb-1">
              Upload Reference Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm border border-gray-300 rounded-lg p-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-pink-300 file:text-white file:rounded file:cursor-pointer hover:file:bg-pink-500"
            />
          </div>

          {/* PREVIEW */}
          {image && (
            <div className="mt-4">
              <p className="text-xs text-gray-500">Preview:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="mt-2 rounded-lg h-32 object-cover border"
              />
            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition duration-300"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customization;