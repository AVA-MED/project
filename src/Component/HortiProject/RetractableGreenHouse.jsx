import React from "react";

// Import images
import img1 from "/photos/WhatsApp Image 2025-03-17 at 1.12.56 PM (1).jpeg";
import img2 from "/photos/WhatsApp Image 2025-03-17 at 1.12.56 PM (2).jpeg";
import img3 from "/photos/WhatsApp Image 2025-03-17 at 1.12.56 PM.jpeg";

// Import background image instead of video
import bgImage from "/photos/WhatsApp Image 2025-03-17 at 1.12.56 PM.jpeg"; 
// Use an image version here (convert your video to a still image or choose an appropriate image)

const imageGallery = [img1, img2, img3];

const RetractableGreenHouse = () => {
  return (
    <div className="relative w-full">
      {/* Image Background */}
      <div className="relative p-3 w-full h-106">
        <img
          src={bgImage}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-green-800 text-5xl font-bold">RETRACTABLE GREENHOUSE</h1>
        </div>
      </div>

      {/* Retractable Greenhouse Section */}
      <h2 className="text-4xl text-center pt-5 text-green-800 font-bold mb-4"></h2>

      <div className="container mx-auto pb-11">
        <h2 className="text-3xl text-center text-green-800 font-bold mb-4">
          RETRACTABLE GREENHOUSE , GIGNOW HARYANA
        </h2>
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

export default RetractableGreenHouse;
