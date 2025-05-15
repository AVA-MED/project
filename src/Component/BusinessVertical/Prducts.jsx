import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const stickersData = [
  { id: 1, img:  "/photos/61.jpg", title: "Mist Chambers", description: "Suitable for commercial cultivation in average temperature zone." },
  { id: 2, img: "/photos/poly house(natural ventilated) (1).jpg", title: "Speed Breeding Facility", description: "Suitable for commercial cultivation in average temperature zone", reviews: 10 },
  { id: 3, img:  "/photos/61.jpg", title: "Cold Stroage Room Manufactures", description: "Organize with our sleek  Suitable for commercial  presentation folders.", reviews: 10 },
  { id: 4, img:  "/photos/rain out shelter.jpg", title: "Plug Type Nuresy Production", description: "Envelopes - professional, durable, and perfect for all your mailing needs", reviews: 3 },
  { id: 5, img:  "/photos/poly house (forced ventilated).jpg", title: "Speed Germination Chamber", description: "Crafted from high-quality paper, our letterheads are designed to give your business correspondence a polished and professional look", reviews: 7 },
  { id: 6, img: "/photos/hi-tech Green house copy.jpg", title: "Plant Growth Chamber", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 7, img:  "/photos/walk-in-tunnel1.jpg", title: "Plant Phenomics Facility", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 8, img:  "/photos/shade net house.jpg", title: "Containment Facility", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 9, img:  "/photos/hardening chamber copy.jpg", title: "Polyhouse Below  Retractable Shadenet", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 10, img:  "/photos/bed heating system copy.jpg", title: "Multispan Tunnel below Retractable Shadenet ", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 11, img:  "/photos/control panel copy.jpg", title: "Lanyards", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
  { id: 12, img:  "C:/Users/aaa/Desktop/Project/Public/aeroponics system copy.jpg", title: "Lanyards", description: "Personalize our satin-finish lanyards to perfectly showcase your brand identity", reviews: 12 },
];

const Prducts= () => {
  // Initialize navigation function
  return (
    <div className="relative w-full">
    {/* Video Background */}
    <div className="relative w-full h-96">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/photos/Green Agriculture Farm To Table Promo Video (3).mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-opacity-full flex items-center justify-center">
        <h1 className="text-green-700 text-5xl font-bold">PRODUCTS</h1>
      </div>
    </div>
    <div className="container bg-green-800 min-w-full mx-auto p-2">
      <div className="text-center  mb-6">
        <h1 className="text-3xl font-semibold pt-1 text-red-500">Products</h1>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {stickersData.map((sticker) => (
          <div key={sticker.id} className="bg-white shadow-md rounded-lg overflow-hidden border">
             <div className="overflow-hidden group flex justify-center items-center w-xl h-120">
              <img src={sticker.img} alt={sticker.title} className="object-contain transform transition duration-300 group-hover:scale-110" />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-2xl h-12  text-emerald-900 font-semibold">{sticker.title}</h2>
              <p className="text-gray-700 font-serif text-xl mb-8">{sticker.description}</p>
              <div className="pt-5">
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prducts;
