import React from "react";

// Import images
import videoBackground from "/photos/704.mp4";
import imgGreenhouse from "/photos/399.png";
import imgTurnkey from "/photos/390.jpeg";
import imgColdRoom from "/photos/397.png";
import imgCenterOfExcellence from "/photos/WhatsApp Image 2025-03-17 at 12.02.46 PM (9).jpeg";
import imgRetractableGreenhouse from "/photos/WhatsApp Image 2025-03-17 at 1.12.56 PM.jpeg";
import imgAeroponicFacility from "/photos/702.png";
import imgHydroponicSystem from "/photos/398.png";

const HortiProjects = () => {
  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-96">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
          <source src={videoBackground} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">HORTICULTURE PROJECTS</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="container mx-auto p-8 text-center">
        <p className="text-green-800 font-bold bg-gray-100 font-serif text-3xl">
          "Rajdeep", The pioneer leader in Green House industry. This is one of India's major Green House Construction Companies.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl text-green-800 font-bold text-center mb-6">
          OUR SERVICES
        </h2>

        {/* Service Cards */}
        <div className="space-y-10 max-w-full">
          {/* Greenhouse */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgGreenhouse} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">GREENHOUSE</h3>
              <p className="text-black font-bold text-xl pt-3">
                We supply and install different types of greenhouses like Net house, Naturally Ventilated greenhouse, greenhouse covering with polycarbonate sheet, Greenhouse with Polysheet 200 micro.
              </p>
              <h1 className="text-black font-bold text-xl">
                We provide climate control solutions for Greenhouse Automation.
              </h1>
              <h2 className="text-black font-bold text-xl">
                We provide Automated Fertigation System.
              </h2>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/Greenhouses"}
              >
                Click for More
              </button>
            </div>
          </div>
          {/* Other Services */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgTurnkey} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">TURNKEY PROJECTS</h3>
              <p className="text-black font-bold text-xl pt-5">
                We are giving comprehensive solutions in all phases to final delivery ready for immediate operation. We take full responsibility for the project from construction and design commissioning, ensuring the project meets the client's specifications.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/TurnKeyProject"}
              >
                Click for More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgColdRoom} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">WALKING COLD ROOM</h3>
              <p className="text-black font-bold text-xl pt-5">
                We install walking cold room facilities for horticulture products for maintaining quality of products that need specific temperature and humidity conditions for storage.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/ColdRoom"}
              >
                Click for More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgCenterOfExcellence} alt="Greenhouse" className="w-full md:w-150 h-60 md:h-120 object-cover rounded-lg" />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-green-800 font-bold">CENTER OF EXCELLENCE</h3>
              <p className="text-black font-bold text-lg md:text-xl pt-3 md:pt-5">
                We establish centres of excellence for horticulture products in various States through Bilateral Cooperation or Research Institutes. These CoEs serve as demonstration and training centres for the latest technologies in the field of horticulture.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/CenterOfExcellence"}
              >
                Click for More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgRetractableGreenhouse} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">RETRACTABLE GREENHOUSE</h3>
              <p className="text-black font-bold text-xl pt-5">
                For higher yield, firmer, higher self-life and with a higher brix compared to conventional open field, tunnels & naturally ventilated poly houses. Retractable roof will help to grow vigorous crops by assisting to create optimal indoor microclimate.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/RETRACTABLEGREENHOUSE"}
              >
                Click for More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgAeroponicFacility} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">AEROPONIC FACILITY</h3>
              <p className="text-black font-bold text-xl pt-5">
                Rajdeep provides advanced aeroponic solutions, designed and manufactured to reform the plant multiplication/propagation.
              </p>
              <h4 className="text-black font-bold text-xl">
                Rajdeep has a tie-up with Centre Potato Research Institute, Jalandhar for new technology and structure installation.
              </h4>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/Aeroponicfacility"}
              >
                Click for More
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-md">
            <img src={imgHydroponicSystem} alt="Greenhouse" className="w-150 h-120 object-cover rounded-lg" />
            <div className="ml-6">
              <h3 className="text-3xl text-green-800 font-bold">HYDROPONIC SYSTEM</h3>
              <p className="text-black font-bold text-xl pt-5">
                We provide advanced hydroponic solutions, designed and manufactured to reform the plant production.
              </p>
              <p className="text-black font-bold text-xl">
                Our systems ensure automated climate control, creating a perfect microclimate for healthy growth.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-full"
                onClick={() => window.location.href = "/Hydroponicsystem"}
              >
                Click for More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HortiProjects;
