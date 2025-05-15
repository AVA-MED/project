import React from "react";

// Image imports
import graftingClipImg from "/photos/clips.jpg";
import trellisingHookImg from "/photos/clips (2).jpg";
import tomatoClipImg from "/photos/clips (3).jpg";
import rollerHookImg from "/photos/clips (1).jpg";

const Clips = () => {
  return (
    <div className="bg-white py-10 px-5 sm:px-10 md:px-20">
      {/* Grafting Clip Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={graftingClipImg}
          alt="Grafting Clip"
          className="w-full sm:w-2/3 md:w-1/3 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="mt-5 md:mt-0 md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">GRAFTING CLIP</h2>
          <p className="text-black font-semibold text-lg sm:text-xl md:text-2xl not-odd:mb-4">
            Colour Available - Green, Blue, White
          </p>
        </div>
      </div>

      {/* Trellising Hook Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={trellisingHookImg}
          alt="Trellising Hook"
          className="w-full sm:w-2/3 md:w-1/3 pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="mt-5 md:mt-0 md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">TRELLISING HOOK</h2>
          <p className="text-black font-semibold text-lg sm:text-xl md:text-2xl not-odd:mb-4">
            Colour Available - White
          </p>
        </div>
      </div>

      {/* Tomato Clip Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={tomatoClipImg}
          alt="Tomato Clip"
          className="w-full sm:w-2/3 md:w-1/3 pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="mt-5 md:mt-0 md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">TOMATO CLIP</h2>
          <p className="text-black font-semibold text-lg sm:text-xl md:text-2xl not-odd:mb-4">
            Colour Available - White
          </p>
        </div>
      </div>

      {/* Roller Hook Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={rollerHookImg}
          alt="Roller Hook"
          className="w-full sm:w-2/3 md:w-1/3 pt-5 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="mt-5 md:mt-0 md:w-2/3" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">ROLLER HOOK</h2>
          <p className="text-black font-semibold text-lg sm:text-xl md:text-2xl not-odd:mb-4">
            Colour Available - White
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clips;
