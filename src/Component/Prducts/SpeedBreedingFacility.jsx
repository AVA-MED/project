import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import image1 from '/photos/158.jpeg';
import image2 from '/photos/162.jpeg';

// Import video
import promoVideo from '/photos/Green Agriculture Farm To Table Promo Video (3).mp4';

const SpeedBreedingFacility = () => {
  const navigate = useNavigate();

  const imageGallery = [image1, image2];

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-96">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={promoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-800 text-4xl font-bold">SPEED BREEDING FACILITY</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-green-800 text-center max-w-2xl font-bold text-xl mx-auto mb-8">
          <h1 className="text-green-800 text-4xl pb-6 font-bold underline">SPEED BREEDING FACILITY</h1>
          <span className="font-bold">Rajdeep Agri Products Pvt Ltd</span>, pioneer establishment in India for Designing, Fabrication, and Construction of <span className="font-bold">Speed Breeding Facility</span>
        </p>
        
        <h3 className="text-3xl font-bold text-green-800">Working</h3>
        <p className="text-black text-xl">
          <span className="font-bold">Speed breeding</span> is fully enclosed, controlled-environment growth chambers that can accelerate plant development for research purposes, including phenotyping of adult plant traits, mutant studies, and transformation.
        </p>
        <p className="text-black text-xl"><span className="font-bold">Can achieve up to 6 generations per year.</span></p>
        <p className="text-black text-xl"><span className="font-bold">Shortens generation time and accelerates breeding and research programs.</span></p>
        <p className="text-black text-xl">
          <span className="font-bold">Four generations for clonal (Brassica napus), instead of 2-3 under normal greenhouse conditions.</span>
        </p>

        <h3 className="text-3xl font-bold   text-green-800 pt-2">Application</h3>
        <ol className="list-decimal text-xl list-inside text-black my-2">
          <li>Manipulates the growing environment by regulating light and temperature for rapid generation advancement.</li>
          <li>The concept of integrating SB into a crop improvement program is simple — ‘grow plants fast and cheap’.</li>
          <li>Plant growth and development processes are critical for crop performance and adaptation to changing environments.</li>
          <li>While SB technology artificially manipulates plant growth environments to accelerate crop breeding, the underlying physiological and genetic mechanisms are complex.</li>
        </ol>

        <h3 className="text-3xl font-bold pt-2  text-green-800">Our Approach</h3>
        <ul className="list-disc list-inside text-xl text-black my-2">
          <li><span className="font-bold">The use of supplemental lighting:</span> In a greenhouse environment allows rapid generation cycling through single seed descent (SSD) and potential adaptation to large-scale crop improvement programs.</li>
          <li><span className="font-bold">Cost-saving through light-emitting diode (LED):</span> Supplemental lighting is also outlined.</li>
          <li><span className="font-bold">Speed breeding uses prolonged photoperiods:</span> To accelerate the developmental rate of plants, and the harvesting and germination of immature seeds, thereby reducing generation time.</li>
          <li><span className="font-bold">Growth in a controlled environment room:</span> With an extended photoperiod (22 hours light/2 hours dark).</li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto ">     
        <h3 className="text-4xl font-bold text-green-800"></h3>
        <div className="container mx-auto">
          <h2 className="text-3xl text-center text-green-800 font-bold mb-4 underline"> SERVICES WE OFFER </h2>
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
    </div>
  );
};

export default SpeedBreedingFacility;
