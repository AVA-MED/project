import React from "react";

// Import images
import img319 from "/photos/319.jpeg";
import img325 from "/photos/325.jpeg";
import img326 from "/photos/326.jpeg";
import img331 from "/photos/331.jpeg";

const imageGallery = [img319, img325, img326, img331];

const RainoutShetler = () => {
  return (
    <div className="relative w-full">
      {/* Header Background Image */}
      <div className="relative w-full h-96">
        <img 
          src={img331} 
          alt="Green Agriculture Farm To Table" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold underline">Rainout Shelter</h1>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl md:text-4xl text-center text-green-800 font-bold mb-6 underline">
          SERVICES WE OFFER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageGallery.map((image, index) => (
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

export default RainoutShetler;
