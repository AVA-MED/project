import React from "react";
import seedDisplayerImage from "/photos/seed displayer (1).jpg"; // Update path if necessary

const SeedDisplayer = () => {
  return (
    <div className="bg-white py-5 px-3 sm:py-10 sm:px-5 md:px-20">
      {/* Seed Displayer Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-10 border-b pb-10" data-aos="fade-right">
        <img
          src={seedDisplayerImage}
          alt="Seed Displayer"
          className="w-full sm:w-2/3 md:w-1/3 rounded-lg shadow-md"
          data-aos="fade-left"
        />
        <div className="mt-5 md:mt-0 md:w-2/3" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">Seed Displayer</h2>
          <p className="text-black font-semibold text-xl sm:text-2xl not-odd:mb-4">
            {/* Add your content here if needed */}
          </p>
          <p className="text-black pt-4 font-semibold text-xl sm:text-2xl mb-4">
            {/* Add your content here if needed */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeedDisplayer;
