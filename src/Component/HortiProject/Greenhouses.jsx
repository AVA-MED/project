import React from "react";

// Import images
import img1 from "/photos/232.jpeg";
import img2 from "/photos/312.jpeg";
import img3 from "/photos/300.jpeg";
import img4 from "/photos/144.jpeg";

// Import video
import videoSrc from "/photos/Untitled design (6).mp4";

// Update imageGallery array with imported images
const imageGallery = [img1, img2, img3, img4];

const Greenhouses = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-96">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-700 text-5xl font-bold">GREEN HOUSE</h1>
        </div>
      </div>
      
      {/* DWR KARNAL Section */}
      <h2 className="text-2xl text-center text-green-800 font-bold mt-6 underline">
        SERVICES WE OFFER
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
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
  );
};

export default Greenhouses;
