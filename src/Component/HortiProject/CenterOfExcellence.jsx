import React from "react";

// Importing images
import img1 from "/photos/WhatsApp Image 2025-03-17 at 12.02.46 PM (8).jpeg";
import img2 from "/photos/WhatsApp Image 2025-03-17 at 11.54.29 AM (4).jpeg";
import img3 from "/photos/WhatsApp Image 2025-03-17 at 12.07.26 PM (5).jpeg";
import img4 from "/photos/251.jpeg";

// ✅ Correct video import (must be a video file)
import introVideo from "/photos/251.jpeg"; // Make sure this file exists

const imageGallery = [img1, img2, img3, img4];

const CenterOfExcellence = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-100">
         <img src={introVideo} alt="Background" className="absolute w-full h-full object-cover" />
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-green-700 text-3xl font-bold text-center">
            CENTER OF EXCELLENCE
          </h1>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-green-800 font-bold my-6 underline">
          SERVICES WE OFFER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
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

export default CenterOfExcellence;
