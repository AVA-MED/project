import React from "react";
 

export default function Product() {
  return (
    <div className="flex flex-col items-start justify-center bg-blue-200 text-center p-6">
      <h1 className="bg-white min-w-full border text-3xl md:text-5xl font-bold text-black transition duration-300 ease-in-out transform hover:scale-105 hover:focus: animate-pulseColor">
        Welcome to Rajdeep Agri. Products Pvt. Ltd.
        <p className="bg-white text-lg md:text-xl font-medium text-black mt-4 transition duration-300 ease-in-out transform hover:scale-105 hover:text-green-500 animate-pulseColor">
          <span className="font-bold bg-white text-black hover:text-green-500"></span>   PIONEER IN GREEN HOUSE
        </p>
      </h1>
    </div>
  );
}
