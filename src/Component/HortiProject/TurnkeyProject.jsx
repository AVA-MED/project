import React from "react";

// Import images
import img1 from "/photos/393.jpeg";
import img2 from "/photos/392.jpeg";
import img3 from "/photos/394.jpeg";
import img4 from "/photos/395.jpeg";
import img5 from "/photos/396.jpeg";

// Update stickersData with imported images
const stickersData = [
  {
    id: 1,
    img: img1,
    title: "VEGETABLE SEEDLING MACHINE",
  },
  {
    id: 2,
    img: img2,
    title: "AUTOMATED FERTIGATION SYSTEM",
  },
  {
    id: 3,
    img: img3,
    title: "RAJDEEP MAKE LIGHTNING SYSTEM",
  },
  {
    id: 4,
    img: img4,
    title: "BOOM IRRIGATION SYSTEM",
  },
  {
    id: 5,
    img: img5,
    title: "RAJDEEP MAKE CONTROL PANEL",
  },
];

const TurnkeyProject = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-126">
        <img
          src={img4} // Use imported image here
          alt="Green Agriculture Farm To Table"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
          <h1 className="text-green-700 text-4xl font-bold">TURNKEY PROJECTS</h1>
        </div>
      </div>
      
      {/* Grid Layout */}
      <div className="container mx-auto p-6">
        <h1 className="text-green-700 text-3xl pb-4 font-bold"></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stickersData.map((sticker) => (
            <div
              key={sticker.id}
              className="bg-emerald-700 shadow-md rounded-lg overflow-hidden border"
            >
              <img
                src={sticker.img}
                alt={sticker.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-2xl font-semibold text-white">
                  {sticker.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TurnkeyProject;
