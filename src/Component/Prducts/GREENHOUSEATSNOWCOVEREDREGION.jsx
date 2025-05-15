import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import image1 from '/photos/WhatsApp Image 2025-03-17 at 1.22.07 PM (2).jpeg';
import image2 from '/photos/190.jpeg';
import image3 from '/photos/242.jpeg';
import image4 from '/photos/WhatsApp Image 2025-03-17 at 1.22.07 PM (12).jpeg';

const imageGallery = [image1, image2, image3, image4];

const GREENHOUSEATSNOWCOVEREDREGION = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <div className="relative w-full h-100">
        <img
          src={image3}
          alt="Green Agriculture Farm To Table"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-800 text-4xl font-bold">GREEN HOUSE AT HILLY AREA</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-green-800 text-center max-w-2xl mx-auto mb-8">
          <span className="font-bold text-4xl underline">GREEN HOUSE AT HILLY AREA</span>
        </p>
        <ul className="text-green-800 font-bold text-xl list-disc list-inside">
          <li>In northern Himalayan Regions, during the winter months temperature goes below 0°C, making plant growth a challenge.</li>
          <li>Rajdeep pioneers in greenhouses provide solutions by artificially creating controlled climatic conditions for plant growth.</li>
        </ul>
        <h3 className="text-3xl pt-2 font-bold text-green-800">Features</h3>
        <ol className="list-decimal list-inside text-xl text-black my-2">
          <li>Maintaining optimal growing conditions through automated climate control systems.</li>
          <li>Enabling year-round crop production even in harsh weather conditions.</li>
        </ol>
        <h3 className="text-3xl font-bold text-green-800">Our Approach</h3>
        <ul className="list-disc list-inside text-black text-xl my-4">
          <li><span className="font-bold">Durable Structure</span></li>
          <li><span className="font-bold">Efficient Heating System</span></li>
          <li><span className="font-bold">Customised Solutions</span></li>
          <li><span className="font-bold">Solar-Based Solution for Energy Efficiency</span></li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto ">
        <div className="col-span-full text-center mb-6">
          <h2 className="text-3xl pt-3 text-green-800 font-bold underline">SERVICES WE OFFER</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

export default GREENHOUSEATSNOWCOVEREDREGION;



