import React, { useState } from "react";

// Import images for the gallery
import img1 from "/photos/361.jpeg";
import img2 from "/photos/362.jpeg";
import img3 from "/photos/363.jpeg";
import img4 from "/photos/364.jpeg";


// Import map image
import ghanaMap from "/photos/ghana map.jpg";

// Update imageGallery array with imported images
const imageGallery = [img1, img2, img3, img4];

const ImageGallery = ({ showGallery }) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 transition-all duration-300 ${
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
  );
};

const GhanaAfrica = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-2xl text-center text-green-800 font-bold">
        GREENHOUSE MANUFACTURER IN GHANA AFRICA
      </h2>
      <h2 className="text-xl text-center text-green-800 font-semibold">
        African horticulture is increasingly portable, and horticultural
        greenhouses have played a significant role in boosting yields, resource
        productivity, and income by optimizing crop production environments,
        preventing pests and crop exposition to undesired climatic conditions
        during critical periods.
      </h2>

      <div className="md:flex md:items-center md:gap-10 mt-6">
        <div>
          <div className="max-w-5xl text-green-800 text-center">
            <p className="text-black pt-6 font-bold text-xl">
              Horticulture is helping small-scale farmers shift from subsistence
              to sustainable and profitable farming by boosting their
              productivity, reducing post-harvest losses, introducing them to
              new market networks, and job provision.
            </p>

            <p className="text-left mt-6">
              <span className="font-bold text-green-800 text-center text-3xl">
                Our Solution
              </span>
            </p>

            <p className="mt-4 text-black text-xl">
              <span className="font-bold">Controlled environment for crops:</span>{" "}
              We provide an ideal growing environment for crops that are
              suitable for the local climate, resulting in better quality,
              higher yields, and reduced use of pesticides and herbicides.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Significant economic benefits:</span>{" "}
              Farmers who adopt the technology can grow high-value crops that
              fetch a premium price in the market.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Climate-Resilient Crop Varieties:</span>{" "}
              Controlled greenhouse environment, demonstrating resilience to
              temperature fluctuations, drought, and other adverse conditions.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Innovative Greenhouse Designs:</span>{" "}
              Advanced technologies like hydroponics and aeroponics aim to make
              greenhouse agriculture accessible to farmers across the country.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Renewable energy sources:</span> Using
              solar panels further enhances sustainability and reduces dependency
              on conventional energy.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Efficient Resource Management:</span>{" "}
              Focusing on efficient water management techniques within
              greenhouses. Implementing drip irrigation systems, rainwater
              harvesting, and water recycling methods not only conserve this
              precious resource but also reduce the environmental impact of
              agriculture.
            </p>
          </div>
        </div>

        {/* Right Side: Map Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={ghanaMap}
            alt="Ghana Map"
            className="w-full pb-8 rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* POLYHOUSE AT GHANA */}
      <h2 className="text-xl text-center text-green-800 font-bold mt-6 underline">
        POLYHOUSE AT GHANA
      </h2>

      {/* Mobile Toggle Button */}
      <div className="md:hidden text-center mt-4">
        <button
          onClick={() => setShowGallery(!showGallery)}
          className="bg-green-800 text-white px-4 py-2 rounded-lg"
        >
          {showGallery ? "Hide Gallery" : "Show Gallery"}
        </button>
      </div>

      {/* Image Gallery */}
      <ImageGallery showGallery={showGallery} />
    </div>
  );
};

export default GhanaAfrica;
