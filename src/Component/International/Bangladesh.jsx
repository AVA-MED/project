import React, { useState } from "react";

// Import images
import img1 from "/photos/142.jpeg";
import img2 from "/photos/143.jpeg";
import img3 from "/photos/144.jpeg";
import img4 from "/photos/145.jpeg";

import mapIndia from "/photos/map india.png"; // ✅ Import the map image

const DUPONTHYDERABADSection = [img1, img2, img3, img4];

const Bangladesh = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-xl text-center text-green-800 font-bold">
        GREENHOUSE MANUFACTURER IN BANGLADESH
      </h2>
      <h2 className="text-xl text-center text-green-800 font-semibold">
        Bangladesh, the eighth most populous nation worldwide, is home to 169.4 million people in
        an expanse spanning 148,460 square kilometres (57,321 sq miles, 14.85 million Hectares).
        Within this context, agriculture takes centre stage, being a crucial source of livelihood,
        employment, and GDP contribution.
      </h2>

      {/* Our Solution Section */}
      <div className="md:flex md:items-center md:gap-10">
        <div>
          <section className="max-w-5xl text-green-800 text-center mx-auto">
            <h2 className="text-3xl text-center items-center inline-block text-green-800 font-bold">
              Our Solution
            </h2>
            <p className="mt-4 text-black text-xl">
              <span className="font-bold">Climate-smart Agriculture (CSA):</span> Enhancement of
              agricultural productivity and incomes
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Significant economic benefits.</span> Farmers who adopt
              the technology can grow high-value crops that fetch a premium price in the market.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Climate-Resilient Crop Varieties:</span> Controlled
              greenhouse environment, demonstrating resilience to temperature fluctuations, drought,
              and other adverse conditions.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Innovative Greenhouse Designs:</span> Advanced
              technologies like hydroponics and aeroponics, these designs aim to make greenhouse
              agriculture accessible to farmers across the country.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Renewable energy sources:</span> Such as solar panels,
              further enhances sustainability and reduces dependency on conventional energy.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Efficient Resource Management:</span> Focusing on
              efficient water management techniques within greenhouses.
            </p>
          </section>
        </div>
        <div className="md:w-1/2">
          <img
            src={mapIndia} // ✅ Use imported image here
            alt="India Map"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Services Section */}
      <h2 className="text-2xl text-center text-green-800 font-bold mb-4 underline">
        SERVICES WE OFFER
      </h2>

      {/* Toggle Button for Mobile */}
      <div className="md:hidden text-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-700 text-white px-4 py-2 rounded-full"
        >
          {isOpen ? "Hide Services" : "Show Services"}
        </button>
      </div>

      {/* Services Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500 ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
        } overflow-hidden`}
      >
        {DUPONTHYDERABADSection.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bangladesh;
