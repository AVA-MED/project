import React from "react";
import bgImage from "/photos/703.jpg";

const AboutUs = () => {
  const boardOfDirectors = [
    { id: 1, name: "Mr Gian Aggarwal", category: "Managing Director" },
    { id: 2, name: "Mr Manoj Gupta", category: "Vice President" },
    { id: 3, name: "Mr. Shekhar Aggarwal", category: "Director" },
    { id: 4, name: "Mr Manoj Bhat", category: "G.M Marketing" },
    { id: 5, name: "Mr Goldy", category: "Production Engineer" },
  ];

  return (
    <div className="relative w-full">
      {/* Background Image Header */}
      <div
        className="relative w-full h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto text-center py-10 px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-green-800">
          Welcome to Rajdeep Agri. Products Pvt. Ltd.
        </h2>
        <p className="mt-4 font-bold text-lg md:text-xl text-green-800">
          ‘’RAJDEEP‘’ has installed more than 3500 greenhouses across various
          climatic conditions in India. We also make customised greenhouses and
          upgrade existing models.
        </p>
        <p className="mt-4 font-bold text-lg md:text-xl text-black">
          ‘’RAJDEEP‘’ has 4 decades of experience in greenhouses and is always
          developing skills and know-how to achieve results in greenhouse
          projects.
        </p>
        <p className="mt-4 font-bold text-lg md:text-xl text-black">
          The company is managed by industry experts and professionals with
          outstanding knowledge in agriculture, floriculture and greenhouses.
        </p>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 max-w-7xl text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-green-800">
          OUR PERCEPTION
        </h3>
        <p className="mt-4 text-lg md:text-xl text-black font-bold">
          We feel proud to see the progress of Indian farmers in terms of
          economy and quality produce after the revolution of greenhouse farming
          over traditional farming.
        </p>
        <p className="mt-4 text-lg md:text-xl text-black font-bold">
          Our vast experience and practical knowledge are mainly focused on
          providing complete engineering solutions for greenhouses and their
          environment control systems, applying modern technology, and
          continuous R&D in the manufacturing process and allied services.
        </p>
      </div>

      {/* Core Team Section */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          CORE TEAM
        </h2>

        {/* Board of Directors */}
        <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
          BOARD OF DIRECTORS
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-2 px-4 text-left">S.no</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {boardOfDirectors.map((director, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{director.name}</td>
                  <td className="py-2 px-4">{director.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
