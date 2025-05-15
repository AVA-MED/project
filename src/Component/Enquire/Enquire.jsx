import React from "react";

const Enquire= () => {
  return (
    <div className="relative w-full">
    {/* Video Background */}
    <div className="relative w-full h-78">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/photos/vecteezy_drops-of-rain-with-green-tree-nature-background-romantic_10876623.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
       
      </div>
    </div>
      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold text-center pb-7 text-green-700">Our Enquiry Form</h3>
        <form className="bg-gray-100 p-6  font-Semibold text-2xl rounded-lg shadow-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
            <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          </div>
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          <input type="text" placeholder="Contact Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          <input type="text" placeholder="Company Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          <input type="text" placeholder="Reference" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" rows="4"></textarea>
          <div className="text-center">
            <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquire;
