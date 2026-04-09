const CoordSets = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-pink-500 text-center mb-6">
        Co-ord Sets 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1,2,3].map((item) => (
          <div key={item} className="shadow rounded-xl p-4">
            <img
              src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
              className="rounded-lg h-64 w-full object-cover"
            />
            <h3 className="mt-3 font-semibold">Stylish Co-ord Set</h3>
            <p className="text-pink-500">₹1999</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoordSets;