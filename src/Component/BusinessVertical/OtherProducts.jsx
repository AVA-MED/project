import React from "react";

const OtherProducts = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      {/* Tissue Culture Lab Section */}
      <div className="md:flex md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src="/photos/walk-in-tunnel1.jpg"
          alt="Tissue Culture"
          className="w-full md:w-1/3 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">TISSUE CULTURE LAB</h2>
          <p className="text-gray-700 mb-4">
            We design and set up state-of-the-art tissue culture laboratories, ensuring optimal
            conditions for plant tissue growth and propagation.
          </p>
          <p className="font-semibold text-gray-800">Elevating Crop Production:</p>
          <p className="text-gray-700 mb-4">
            Our labs yield high-quality, disease-resistant plantlets with advanced facilities such as
            laminar air flow, autoclave, incubator, and growth chambers.
          </p>
          <p className="font-semibold text-gray-800">Guiding Your Way:</p>
          <p className="text-gray-700">
            In addition to cutting-edge infrastructure, we offer valuable technical support and
            guidance on tissue culture techniques and protocols.
          </p>
        </div>
      </div>
      {/* Face Fate Facility Section */}
      <div className="md:flex md:items-center md:gap-10 mt-10" >
  <div className="md:w-2/3" data-aos="fade-right">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">FACE FATE FACILITY</h2>
    <p className="text-gray-700 mb-4">
      Our expertise extends to establishing face fate facilities for research and development,
      ensuring the highest standards of quality and safety.
    </p>
    <p className="font-semibold text-gray-800">Safety and Efficacy:</p>
    <p className="text-gray-700 mb-4">
      Our facilities are the testing ground for agrochemicals and biopesticides, simulating
      diverse climatic conditions and exposure scenarios.
    </p>
    <p className="font-semibold text-gray-800">Data-Driven Decisions:</p>
    <p className="text-gray-700">
      Get the insight you need to ensure the safety and effectiveness of your agrochemicals and
      biopesticides.
    </p>
  </div>
  <img
    src="/photos/walk-in-tunnel1.jpg"
    alt="Face Fate Facility"
    className="w-full md:w-1/3 rounded-lg shadow-md"
    data-aos="fade-left"
  />
</div>
    </div>
  );
};

export default OtherProducts;
