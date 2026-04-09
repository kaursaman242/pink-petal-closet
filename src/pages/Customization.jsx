import React, { useState } from "react";

const Customization = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    alert("Customization request submitted ");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl text-pink-500 font-semibold">
        Customization 
      </h1>

      <p className="mt-2 text-gray-600">
        Want your own design? Tell us 
      </p>

      {/* NAME */}
      <input
        className="w-full border p-2 mt-4 rounded"
        placeholder="Your Name"
      />

      {/* DESIGN IDEA */}
      <input
        className="w-full border p-2 mt-3 rounded"
        placeholder="Design Idea"
      />

      {/* DESCRIPTION */}
      <textarea
        className="w-full border p-2 mt-3 rounded"
        placeholder="Describe your customization"
      ></textarea>

      {/* IMAGE UPLOAD */}
      <div className="mt-3">
        <label className="block text-gray-600 mb-1">
          Upload Reference Image 
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>

      {/* PREVIEW IMAGE */}
      {image && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">Preview:</p>
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="mt-2 rounded-lg h-40 object-cover"
          />
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <button
        onClick={handleSubmit}
        className="bg-pink-500 text-white px-4 py-2 mt-5 rounded w-full hover:bg-pink-600"
      >
        Submit Request 
      </button>
    </div>
  );
};

export default Customization;