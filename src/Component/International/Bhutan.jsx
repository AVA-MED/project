import React from "react";

// Import images for POLYHOUSE AT BHUTAN section
import img1 from "/photos/211.jpeg";
import img2 from "/photos/212.jpeg";
import img3 from "/photos/213.jpeg";
import img4 from "/photos/214.jpeg";


// Import map image
import mapIndia from "/photos/map india.png";

// POLYHOUSE AT BHUTAN image array
const POLYHOUSEATSYNGENTA = [
  img1,
  img2,
  img3,
  img4,

];

const Bhutan = () => {
  return (
    <div className="bg-white py-10 px-5 md:px-20">
      <h2 className="text-xl text-center text-green-800 font-bold">
        GREENHOUSE MANUFACTURER IN BHUTAN
      </h2>
      <h2 className="text-xl text-center text-green-800 font-semibold">
        The Himalayan country of Bhutan is typically an agrarian country with about 57% of the people
        depending on agriculture. However, farming has been constrained by the mountainous topography
        and rapid changes in environmental variabilities. With climate change, agricultural
        production and food security is likely to face one of the biggest challenges of the
        twenty-first century.
      </h2>

      {/* Our Solution Section */}
      <div className="md:flex md:items-center md:gap-10 mt-6">
        <div>
          <div className="max-w-5xl text-green-800 text-center">
            <p className="text-xl font-bold text-black">
              The current agricultural practices are highly vulnerable to the
              impacts of climate change due to their total dependence on monsoon
              rains and shorter growing periods.
              <br />
              The mountainous topography makes the country more vulnerable due
              to large climatic swings in the mountainous ecosystem.
            </p>

            <p className="text-left mt-6">
              <span className="font-bold text-green-800 text-3xl">
                Our Solution
              </span>
            </p>

            <p className="mt-4 text-xl text-black">
              <span className="font-bold">Controlled environment for crops:</span> We provide an
              ideal growing environment for crops that are suitable for the local climate, resulting
              in better quality, higher yields, and reduced use of pesticides and herbicides.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Significant economic benefits:</span> Farmers who adopt
              the technology can grow high-value crops that fetch a premium price in the market.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Climate-Resilient Crop Varieties:</span> Controlled
              greenhouse environment, demonstrating resilience to temperature fluctuations, drought,
              and other adverse conditions.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Innovative Greenhouse Designs:</span> Advanced technologies
              like hydroponics and aeroponics aim to make greenhouse agriculture accessible to
              farmers across the country.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Renewable energy sources:</span> Utilizing solar panels
              further enhances sustainability and reduces dependency on conventional energy.
            </p>
            <p className="text-black text-xl">
              <span className="font-bold">Efficient Resource Management:</span> Focusing on
              efficient water management techniques within greenhouses. Implementing drip irrigation
              systems, rainwater harvesting, and water recycling methods not only conserve this
              precious resource but also reduce the environmental impact of agriculture.
            </p>
          </div>
        </div>

        {/* Right Side: Map Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={mapIndia}
            alt="India Map"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* POLYHOUSE AT BHUTAN Section */}
      <h2 className="text-xl text-center text-green-800 font-bold mt-8 underline">
        POLYHOUSE AT BHUTAN
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {POLYHOUSEATSYNGENTA.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={image}
              alt={`Polyhouse Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bhutan;
