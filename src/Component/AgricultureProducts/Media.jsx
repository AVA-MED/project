import React from "react";

// Importing images
import perliteImg from "/photos/perlite.webp";
import vermiculiteImg from "/photos/exfoliated-vermiculite-1000x1000.jpg";
import looseCocpeatImg from "/photos/WhatsApp Image 2025-03-08 at 1.11.40 PM.jpeg";
import brickCocpeatImg from "/photos/brick cocopeat.webp";

const Media = () => {
  return (
    <div className="bg-white py-5 px-3 sm:py-10 sm:px-5 md:px-20">
      {/* Perlite Section */}
      <div className="md:flex md:items-center md:gap-10 border-b pb-5 sm:pb-10" data-aos="fade-right">
        <img
          src={perliteImg}
          alt="Perlite"
          className="w-full sm:w-2/3 md:w-1/3 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-green-800 mb-2 sm:mb-4">PERLITE</h2>
        </div>
      </div>

      {/* Vermiculite Section */}
      <div className="md:flex md:items-center md:gap-10 border-b pb-5 sm:pb-10" data-aos="fade-right">
        <img
          src={vermiculiteImg}
          alt="Vermiculite"
          className="w-full sm:w-2/3 md:w-1/3 pt-3 sm:pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-green-800 mb-2 sm:mb-4">VERMICULITE</h2>
        </div>
      </div>

      {/* Loose Cocpeat Section */}
      <div className="md:flex md:items-center md:gap-10 border-b pb-5 sm:pb-10" data-aos="fade-right">
        <img
          src={looseCocpeatImg}
          alt="Loose Cocpeat"
          className="w-full sm:w-2/3 md:w-1/3 pt-3 sm:pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-green-800 mb-2 sm:mb-4">LOOSE COCPEAT</h2>
          <p className="text-black font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">Loose Cocpeat Available</p>
          <p className="text-black font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">EC Less Than 1</p>
        </div>
      </div>

      {/* Brick Cocpeat Section */}
      <div className="md:flex md:items-center md:gap-10 border-b pb-5 sm:pb-10" data-aos="fade-right">
        <img
          src={brickCocpeatImg}
          alt="Brick Cocpeat"
          className="w-full sm:w-2/3 md:w-1/3 pt-3 sm:pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-green-800 mb-2 sm:mb-4">BRICK COCPEAT</h2>
          <p className="text-black font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">Brick Cocpeat Available</p>
          <p className="text-black font-semibold text-lg sm:text-2xl mb-2 sm:mb-4">EC Less Than 1</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
