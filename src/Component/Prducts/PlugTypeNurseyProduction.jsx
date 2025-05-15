import React from "react";
// Import images
import image1 from '/photos/111.jpeg';
import image2 from '/photos/423.jpeg';
import image3 from '/photos/424.jpeg';
import image4 from '/photos/113.jpeg';
import bgImage from '/photos/425.jpeg';

const imageGallery = [image1, image2, image3, image4];

const PlugTypeNurseyProduction = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-96">
        <img
          src={bgImage} 
          alt="Green Agriculture Farm To Table"
          className="absolute w-full h-120 object-cover"
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Plug Type Nursery Production</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-green-800 font-bold text-4xl text-center max-w-2xl mx-auto mb-8 underline">
          Plug Type Nursery Production
        </p>
        <p className="text-green-800 font-bold text-xl my-4">
          <span className="font-bold text-green-800">Plug Type Nursery</span>, in which new saplings are raised and
          nourished until they are ready for sale or transplanting at a permanent place in a field.
        </p>
        <h3 className="text-3xl font-bold text-green-800">Application:</h3>
        <ul className="list-disc list-inside text-xl text-black my-4">
          <li>
            <span className="font-bold text-xl">High Plant density:</span> It is possible to grow and maintain a large
            number of plants per unit area.
          </li>
          <li>
            <span className="font-bold text-xl">Increase germination percentage:</span> When seeds are sown in seedbeds,
            their germination percentage increases and the vigour of the seedlings also improves.
          </li>
          <li>
            <span className="font-bold text-xl">Increase vigour of plant:</span> Better and uniform crop growth can be
            obtained in the main field by selecting vigorous and healthy seedlings.
          </li>
          <li>
            <span className="font-bold text-xl">Less labour utilisation:</span> The management of seedlings can be done
            in a better way with minimum care, cost and maintenance as the nursery area is small.
          </li>
          <li>
            <span className="font-bold text-xl">High return:</span> Off-season sowing of seeds becomes possible, which
            ultimately results in fetching more returns.
          </li>
        </ul>
        <h3 className="text-3xl font-bold text-green-800">Our Approach</h3>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto p-6">
        <h3 className="text-4xl font-bold text-green-800"></h3>
        <div className="col-span-full text-center mb-6">
          <h2 className="text-3xl text-green-900 font-bold underline">SERVICES WE OFFER</h2>
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
};

export default PlugTypeNurseyProduction;
