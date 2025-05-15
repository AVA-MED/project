import React from "react";
import { useNavigate } from "react-router-dom";

// Import images
import img382 from "/photos/382.jpeg";
import img383 from "/photos/383.jpeg";
import img384 from "/photos/384.jpeg";
import img386 from "/photos/386.jpeg";

// Gallery images
const image = [img382, img383, img384, img386];

const PlantPhonemicsFacility = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-120">
        <img 
          src={img384} 
          alt="Green Agriculture Farm To Table" 
          className="absolute w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">PLANT PHENOMICS FACILITY</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <p className="text-green-800 text-center font-bold text-xl max-w-2xl mx-auto mb-8">
          <h1 className="text-green-800 text-4xl pb-6 font-bold underline">PLANT PHENOMICS FACILITY</h1>
          <span className="font-bold">Rajdeep is focusing on</span> high-throughput plant phenotyping facility for the development of better plants for the future.
        </p>

        <ul className="list-disc text-black font-normal text-xl">
          <h3 className="text-3xl font-bold text-green-800 mt-6">Working</h3>
          <li>
            Phenomics provides the opportunity to study previously <span className="font-bold">unexplored areas of plant</span> science.
          </li>
          <li>
            <span className="font-bold">For successful genetic improvement in crop plants,</span> plant breeders first identify desirable genotypes with target traits by screening germplasm collections.
          </li>
          <li>
            <span className="font-bold">Visual screening is easy and precise</span> for qualitative and highly heritable traits, but less precise for quantitative or hard-to-observe physiological traits.
          </li>
          <li>
            Using genomic resources and <span className="font-bold">identification of desirable plants,</span> precise phenotyping is required across various crop species.
          </li>
          <li>
            High-throughput phenotyping tools collect <span className="font-bold">precise and accurate observations</span> to analyze the plant phenome under diverse environmental conditions.
          </li>
          <li>
            <span className="font-bold">Accurate, cost-effective, high-throughput phenotyping</span> is crucial for fine mapping of traits, supporting genetic recombination and variation studies.
          </li>
          <li>
            Phonemics supports <span className="font-bold">reverse genetic studies</span> to identify gene functions in plant growth and development, targeting valuable allelic variations.
          </li>
        </ul>

        <h3 className="text-3xl font-bold text-green-800 mt-6">Application</h3>
        <ol className="list-decimal text-xl text-black my-4">
          <li>Color imaging for biomass</li>
          <li>Plant structure</li>
          <li>Phenology and leaf health (chlorosis, necrosis)</li>
          <li>Near-infrared imaging for tissue and soil water content</li>
          <li>Far-infrared imaging for canopy/leaf temperature</li>
          <li>Fluorescence imaging for physiological state assessment</li>
          <li>Automated weighing and watering for drought/salinity conditions</li>
        </ol>

        <h3 className="text-3xl font-bold text-green-800 mt-6">Our Approach</h3>
        <ul className="list-disc text-xl text-black my-4">
          <li>Opening new prospects</li>
          <li>High-throughput screens (LED)</li>
          <li>Multiple camera units</li>
          <li>Non-destructive measurement</li>
          <li>Quantitative analysis</li>
          <li>Monitoring growth dynamics</li>
          <li>Stress assessment</li>
          <li>Link to genomics</li>
        </ul>

        <div className="text-center mt-8"></div>
      </div>

      <h2 className="text-3xl text-center text-green-800 font-bold mb-4 underline">SERVICES WE OFFER</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {image.map((img, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantPhonemicsFacility;
