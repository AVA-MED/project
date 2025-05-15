import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

// Importing images
import img1 from "/photos/download (2).jpg";
import img2 from "/photos/download (1).jpg";
import img3 from "/photos/32-cavity-seedling-tray-1000x1000.webp";
import img4 from "/photos/download.jpg";
import img5 from "/photos/41kPEek3NmL._AC_UF1000,1000_QL80_.jpg";
import img6 from "/photos/99-cavity-seedling-tray-500x500.webp";
import img7 from "/photos/seedling tray.jpg";
import img8 from "/photos/105-cavity-seedling-tray.jpg";

const stickersData = [
  { id: 1, img: img1, title: "Seedling Tray", description: "Cells Size-18" },
  { id: 2, img: img2, title: "Seedling Tray", description: "Cells Size-28" },
  { id: 3, img: img3, title: "Seedling Tray", description: "Cells Size-32" },
  { id: 4, img: img4, title: "Seedling Tray", description: "Cells Size-50" },
  { id: 5, img: img5, title: "Seedling Tray", description: "Cells Size-98" },
  { id: 6, img: img6, title: "Seedling Tray", description: "Cells Size-99" },
  { id: 7, img: img7, title: "Seedling Tray", description: "Cells Size-104" },
  { id: 8, img: img8, title: "Seedling Tray", description: "Cells Size-105" },
];

const SeedlingTray = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-800">Seedling Tray</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {stickersData.map((sticker) => (
          <div key={sticker.id} className="bg-emerald-700 shadow-md rounded-lg overflow-hidden border">
            <img
              src={sticker.img}
              alt={sticker.title}
              className="w-full h-60 sm:h-80 object-cover"
              data-aos="slide-up"
            />
            <div className="p-4 flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl font-semibold">{sticker.title}</h2>
              <p className="text-black font-semibold pt-1 text-lg sm:text-2xl mb-2">
                {sticker.description}
              </p>
              <div className="pt-5"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedlingTray;
