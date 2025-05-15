import React from "react";

// Image imports
import decorativePotsImg from "/photos/DECORATIVE POTS.webp";
import windowPlanterImg from "/photos/ethical solution (1).png";

const Pots = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      {/* Decorative Pots Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={decorativePotsImg}
          alt="Decorative Pots"
          className="w-full md:w-1/3 rounded-lg shadow-md mb-5 md:mb-0"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">DECORATIVE POTS</h2>
          <p className="text-black font-semibold text-lg md:text-2xl not-odd:mb-4">
            Colour Available - Terracota
          </p>
          <p className="font-medium text-xl md:text-3xl text-gray-800">Different sizes available:</p>
          <p className="text-black pt-4 font-semibold text-lg md:text-2xl mb-4">
            Top-Dia : 40cm, 35cm, 30cm, 25cm, 20cm, 17cm, 14cm, 10cm, 9cm, 6.5cm, 9×9cm
          </p>
        </div>
      </div>

      {/* Window Planter Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={windowPlanterImg}
          alt="Window Planter"
          className="w-full md:w-1/3 rounded-lg shadow-md mb-5 md:mb-0"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">Window Planter</h2>
          <p className="text-black font-semibold text-lg md:text-2xl not-odd:mb-4">
            Colour Available - Terracota/White
          </p>
          <p className="font-medium text-xl md:text-3xl text-gray-800">Different sizes available:</p>
          <p className="text-black pt-4 font-semibold text-lg md:text-2xl mb-4">
            Top-Dia : 27cm, 26cm, 22cm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pots;

