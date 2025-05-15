import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import image1 from "/photos/228.jpeg";
import image2 from "/photos/229.jpeg";
import image3 from "/photos/226.jpeg";
import image4 from "/photos/227.jpeg";

// ✅ Replace with a valid .mp4 file for video background
import transgenicVideo from "/photos/229.jpeg"; // Make sure you have this file

const TransgenicGreenhouse = () => {
  const navigate = useNavigate();

  const Gallery = [image1, image2, image3, image4];

  return (
    <div className="relative w-full">
      {/* Video Background Section */}
      <div className="relative w-full h-100">
       <img 
  src={image2} 
  alt="Transgenic Greenhouse" 
  className="absolute w-full h-full object-cover" 
/>
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            TRANSGENIC GREENHOUSE
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl text-center font-bold text-green-800 underline mb-6">
          Transgenic Greenhouse
        </h2>
        <p className="text-green-800 text-xl text-center font-medium max-w-3xl mx-auto mb-6">
          The primary goal of creating transgenic plants is to enhance agricultural productivity and sustainability. We offer BSL-1 and BSL-2 lab setup.
        </p>

        <h3 className="text-3xl font-bold text-green-800 mt-6">Working</h3>
        <p className="text-black text-xl my-4">
          Genetic material from another species is introduced using techniques of{" "}
          <span className="font-bold">genetic engineering</span>. This process allows for the insertion of specific genes that confer desired traits.
        </p>

        <h3 className="text-3xl font-bold pt-2 text-green-800">Features</h3>
        <ol className="list-decimal text-xl text-black my-4 pl-5">
          <li>Improved quality</li>
          <li>Resistance to pests</li>
          <li>Resistance to diseases</li>
          <li>Resistance to environmental stresses such as drought or extreme temperatures</li>
        </ol>

        <h3 className="text-3xl font-bold text-green-800 mt-6">Our Approach</h3>
        <ul className="list-disc text-xl text-black my-4 pl-5">
          <li>
            <span className="font-bold">Use of supplemental lighting:</span> In a greenhouse environment allows rapid generation cycling through single seed descent (SSD) and potential for adaptation to large-scale crop improvement programs.
          </li>
          <li>
            <span className="font-bold">High-throughput screens (LED):</span> Supplemental lighting is also outlined.
          </li>
          <li>
            <span className="font-bold">Automated control system:</span> To establish desired temperature and humidity as per crop requirements.
          </li>
          <li>
            <span className="font-bold">Durability:</span> Using 8mm polycarbonate to increase the shelf life of the structure.
          </li>
          <li>
            <span className="font-bold">Customized:</span> As per clients' requirements.
          </li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl text-center text-green-800 font-bold mb-6 underline">
          SERVICES WE OFFER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Gallery.map((image, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransgenicGreenhouse;
