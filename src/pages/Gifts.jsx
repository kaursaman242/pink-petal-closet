import React from 'react'

const Gifts = () => {

  const giftsData = [
    {
      name: "Hoops",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
    },
    {
      name: "Keychain",
      image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93"
    },
    {
      name: "Gift Set",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db"
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {giftsData.map((item) => (
        <div key={item.name} className="shadow p-4">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-96 object-cover"
          />
          <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
          <p>Perfect for gifting</p>
        </div>
      ))}
    </div>
  );
};

export default Gifts;