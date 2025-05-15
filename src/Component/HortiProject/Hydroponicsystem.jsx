import React from "react";

// Importing images
import img1 from  "/photos/WhatsApp Image 2025-03-17 at 12.11.10 PM (1).jpeg";
import img2 from "/photos/156.jpeg";
import img3 from "/photos/244.jpeg";
import img4 from "/photos/250.jpeg";

// Importing video
import hydroVideo from "/photos/vecteezy_hydroponic-vegetables-growing-inside-a-greenhouse-fresh_22274518-DOhn404q.mov";

const imageGallery = [img1, img2, img3, img4];

const Hydroponicsystem = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative p-3 w-full h-106">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={hydroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 text-5xl bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-800 font-bold">HYDROPONIC SYSTEM</h1>
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

export default Hydroponicsystem;




