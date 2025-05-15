import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import imgHero from "/photos/WhatsApp Image 2025-03-17 at 1.07.57 PM (3).jpeg";
import img127 from "/photos/127.jpeg";
import img136 from "/photos/136.jpeg";

// Gallery images
const additionalImages = [imgHero, img127, img136];

const NaturallyVentilatedPolyhouse = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-190">
        <img 
          src={imgHero} 
          alt="Green Agriculture Farm To Table" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            NATURALLY VENTILATED POLYHOUSE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-green-800 text-center max-w-2xl mx-auto mb-8">
          <span className="font-bold text-4xl underline">
            Naturally Ventilated Polyhouse
          </span>
        </p>

        <p className="text-green-800 my-4">
          <span className="font-bold text-3xl">
            We have gained expertise in offering a quality approved range of naturally ventilated greenhouses.
          </span>
        </p>

        <p className="text-black text-xl my-4">
          <span className="font-bold text-3xl text-green-800">Features</span>
          <ul className="list-disc ml-6">
            <li>Well ventilated</li>
            <li>Properly covered</li>
            <li>Aerodynamic shape along all periphery to resist wind velocity</li>
          </ul>
        </p>

        <h3 className="text-3xl font-bold text-green-800">Our Approach</h3>
        <ol className="list-decimal text-xl list-inside text-black my-4">
          <li>Maximum ventilation</li>
          <li>Manual chain roll-up unit</li>
          <li>Motorized roll-up system</li>
        </ol>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto">
        <div className="col-span-full pt-3 text-center mb-6">
          <h2 className="text-3xl text-green-800 font-bold underline">
            SERVICES WE OFFER
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalImages.map((image, index) => (
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

export default NaturallyVentilatedPolyhouse;
