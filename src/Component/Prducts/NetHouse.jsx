import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import img1 from "/photos/WhatsApp Image 2025-03-17 at 1.03.03 PM (2).jpeg";
import img2 from "/photos/169.jpeg";
import img3 from "/photos/266.jpeg";
import img4 from "/photos/267.jpeg";

const imagesGallery = [img1, img2, img3, img4];

const NetHouse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="relative bg-green-900 w-full">
      {/* Hero Image Background */}
      <div className="relative w-full h-120">
        <img
          src={img2}
          alt="Green Agriculture Farm To Table"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">NET HOUSE</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-white text-center text-4xl font-bold mb-8 underline">Net House</h2>

        <h3 className="text-3xl font-bold text-white ">We Offer:</h3>
        <ul className="list-disc list-inside text-xl text-white my-4">
          <li>Roof Shade Net House (Anti Rain)</li>
          <li>Dome Shape Shade Net House (Pipe Structure)</li>
          <li>Retractable Flat Roof Shade Net House</li>
          <li>Shade Net House For Cucumbers (Pipe Flat Net House)</li>
          <li>Shade Net House For Capsicums (Wire Rope Flat Roof Double Layer Shade Net House)</li>
        </ul>

        <h3 className="text-3xl font-bold text-white ">Specification:</h3>
        <ul className="list-disc list-inside text-xl text-white my-4">
          <li>Structure - Galvanized Steel Tubular</li>
          <li>Cladding Material - UV Stabilized HDPE shade net in different colors</li>
          <li>Shading - According to requirement: 35%, 50%, 70%, 90%</li>
          <li>Fixing Of Cladding - GI Profile</li>
        </ul>

        <h3 className="text-3xl font-bold text-white ">Key Features:</h3>
        <ul className="list-disc list-inside text-xl text-white  my-4">
          <li>Flat roof design with durable wire rope support</li>
          <li>Effective sunlight and pest protection</li>
          <li>Ideal for papaya orchard cultivation</li>
          <li>Enhances crop quality and yield</li>
          <li>Useful to cover big orchards of fruits like Orange, Mango, etc.</li>
          <li>Protects crops from high temperatures, winter injuries, and birds</li>
          <li>Provides appropriate shading to crops for efficient growth</li>
        </ul>

        <h3 className="text-3xl font-bold text-white ">Our Solution:</h3>
        <ul className="list-disc list-inside text-xl text-white  my-4">
          <li><span className="font-bold">Durable</span></li>
          <li><span className="font-bold">Customized Solution</span></li>
        </ul>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto pb-12">
        <div className="col-span-full text-center">
          <h2 className="text-3xl text-white font-bold pb-5 underline">SERVICES WE OFFER</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagesGallery.map((image, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetHouse;
