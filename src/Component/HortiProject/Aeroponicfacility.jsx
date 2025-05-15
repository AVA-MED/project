import React from "react";

// Import images
import img1 from "/photos/aeroponics system copy.jpg";
import img2 from "/photos/WhatsApp Image 2025-03-17 at 12.49.51 PM (14).jpeg";
import img3 from "/photos/WhatsApp Image 2025-03-17 at 12.46.50 PM (2).jpeg";
import img4 from "/photos/WhatsApp Image 2025-03-17 at 12.49.51 PM (10).jpeg";
import backgroundImage from "/photos/Blue Red Illustration Futuristic Technology Flyer (3264 x 2448 px) (3264 x 2448 px) (3264 x 2448 px) (Billboard (Square)).png";

// Update Gallery array with imported images
const Gallery = [img1, img2, img3, img4];

const Aeroponicfacility = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative p-3 w-full h-106">
        <img
          src={backgroundImage} // Use imported background image
          alt="Green lush foliage, moss, and fern"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 text-5xl bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-800 font-bold">AEROPONIC FACILITY</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <h2 className="text-3xl text-center text-green-800 font-bold mb-14 pt-14 underline">SERVICES WE OFFER</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Gallery.map((image, index) => (
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

export default Aeroponicfacility;
