import React, { useState } from "react";

// Import images for gallery
import img1 from "/photos/371.jpeg";
import img2 from "/photos/372.jpeg";





// Import map image
import indiaMap from "/photos/map india.png";

// Image gallery array
const imageGallery = [img1, img2  ];

const Nepal = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-xl text-center text-green-800 font-bold">
        GREENHOUSE MANUFACTURER IN NEPAL
      </h2>
      <h2 className="text-xl text-center text-green-800 font-semibold">
        Nepal is a small, landlocked country with a diverse geography and climate.
      </h2>

      <div className="md:flex md:items-center mt-6">
        {/* Text Content */}
        <div className="max-w-5xl text-green-800 text-center">
          <p className="text-black pt-2 text-xl font-semibold">
            Greenhouse technology is rapidly gaining popularity in Nepal as a means of addressing the country's food security and climate change challenges.
          </p>
          <p className="text-black text-xl">
            The adoption of this technology is transforming the way farming is done in Nepal and has the potential to revolutionize the country's agricultural sector.
          </p>

          {/* Our Solution Section */}
          <div className="max-w-5xl pb-10 text-green-800 text-center mx-auto">
            <h2 className="text-3xl text-green-800 font-bold mt-6">Our Solution</h2>
            <p className="mt-4 text-black text-xl">
              <span className="font-bold">Climate-smart Agriculture (CSA):</span> Enhancement of agricultural productivity and incomes
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Significant economic benefits:</span> Farmers who adopt the technology can grow high-value crops that fetch a premium price in the market.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Climate-Resilient Crop Varieties:</span> Controlled greenhouse environment, demonstrating resilience to temperature fluctuations, drought, and other adverse conditions.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Innovative Greenhouse Designs:</span> Advanced technologies like hydroponics and aeroponics, these designs aim to make greenhouse agriculture accessible to farmers across the country.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Renewable energy sources:</span> Such as solar panels, further enhances sustainability and reduces dependency on conventional energy.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Efficient Resource Management:</span> Focusing on efficient water management techniques within greenhouses. Implementing drip irrigation systems, rainwater harvesting, and water recycling methods not only conserve this precious resource but also reduce the environmental impact of agriculture.
            </p>
          </div>
        </div>

        {/* Map Image */}
        <div className="md:w-1/2 pb-14">
          <img
            src={indiaMap}
            alt="Map of India"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="text-center">
        <h2 className="text-xl text-green-800 font-bold mb-4">SERVICES WE OFFER</h2>

        {/* Mobile Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="bg-green-800 text-white px-4 py-2 rounded-lg"
          >
            {showGallery ? "Hide Gallery" : "Show Gallery"}
          </button>
        </div>

        {/* Gallery */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-300 ${
            showGallery ? "block" : "hidden md:grid"
          }`}
        >
          {imageGallery.map((image, index) => (
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
    </div>
  );
};

export default Nepal;
