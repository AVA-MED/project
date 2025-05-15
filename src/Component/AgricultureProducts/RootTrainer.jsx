import React from "react";
import acrylicLabel from "/photos/lebels.jpg";
import plasticLabel from "/photos/lebels (1) (1).jpg"; // Adjust the path as needed

const RootTrainer = () => {
  return (
    <div className="bg-white py-10 px-5 sm:px-10 md:px-20">
      {/* Tissue Culture Lab Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={acrylicLabel}
          alt="Tissue Culture"
          className="w-full md:w-1/3 rounded-lg shadow-md mb-5 md:mb-0"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4 flex">
            ACRYLIC LABEL
          </h2>
          <p className="font-medium text-xl sm:text-2xl md:text-3xl text-gray-800">Different sizes available:</p>
          <p className="text-black pt-4 font-semibold text-lg sm:text-xl md:text-2xl mb-4">
            Length : 36cm, 24cm, 12cm
          </p>
        </div>
      </div>
      {/* Face Fate Facility Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={plasticLabel}
          alt="Plastic Label"
          className="w-full md:w-1/3 pt-2 rounded-lg shadow-md mb-5 md:mb-0"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">PLASTIC LABEL</h2>
          <p className="text-black font-semibold text-lg sm:text-xl md:text-2xl mb-4">
            Colour Available - White/Yellow
          </p>
          <p className="font-medium text-xl sm:text-2xl md:text-3xl text-gray-800">Different sizes available:</p>
          <p className="text-black pt-4 font-semibold text-lg sm:text-xl md:text-2xl mb-4">
            Length : 107cm, 100cm, 75cm, 50cm, 35cm, 11cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default RootTrainer;
