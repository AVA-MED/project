import React from "react";

// Import images
import img400 from "/photos/400.jpeg";
import img401 from "/photos/401.jpeg";
import img403 from "/photos/403.jpeg";
import img405 from "/photos/405.jpeg";
import img406 from "/photos/406.jpeg";
import img407 from "/photos/407.jpeg";

import img422 from "/photos/422.jpeg";

const image = [
  img400,
  img401,
  img403,
  img405,
  img406,
  img407,
 
  img422,
];

const Gallery = () => {
  return (
    <div className="relative w-full">
      <h2 className="text-3xl text-center text-green-800 font-bold mt-6 underline">GALLERY</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {image.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={`Additional Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
