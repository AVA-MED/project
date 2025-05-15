import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import image1 from '/photos/225.jpeg';
import image2 from '/photos/WhatsApp Image 2025-03-17 at 1.45.14 PM (1).jpeg';
import image3 from '/photos/350.jpeg';
import image4 from '/photos/346.jpeg';

const imageGallery = [image1, image2, image3, image4];

export default function MistChambers() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-96">
        <img
          src={image3} 
          alt="Green Agriculture Farm To Table"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">MIST CHAMBER</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl text-green-800 font-bold text-center mb-6 underline">Mist Chamber</h2>
        <p className="text-emerald-800 text-center max-w-3xl font-bold text-xl mx-auto mb-8">
          ‘’Rajdeep” remains a pioneer establishment in India for Construction of Mist chambers for propagation of better quality plants
        </p>
        <h3 className="text-3xl font-bold text-green-800">Working:</h3>
        <p className="text-black text-xl my-4">
          The intermittent water misting is done using a high-pressure pump, pipeline system, and a timer switch. The mist nozzles are connected to the main pipelines for misting the plant material growing inside the growth chambers or structures. The frequency of misting depends upon ambient temperature and type of plant material being propagated.
        </p>
        <h3 className="text-3xl font-bold text-green-800">Application:</h3>
        <li className="text-black text-xl">To create high humidity</li>
        <li className="text-black text-xl">Droplet-free presence of water for propagating delicate soft wood cuttings, vegetable crops, root plants and shrubs, etc.</li>
        <h3 className="text-3xl font-bold text-green-800">Our Approach</h3>
        <ul className="list-disc list-inside text-xl text-black my-4">
          <li><span className="font-bold text-xl">Better plant growth:</span> by Faster rooting of cuttings.</li>
          <li><span className="font-bold text-xl">Create optimum Microclimate:</span> for better root initiation and development.</li>
          <li><span className="font-bold text-xl">Tailored structure:</span> as per clients' requirements.</li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto">
        <div className="col-span-full text-center mb-6">
          <h2 className="text-3xl text-green-900 font-bold underline">
            SERVICES WE OFFER 
          </h2>
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
}


