import React from "react";

// Import image
import logo from "/photos/WhatsApp Image 2025-03-03 at 12.53.01 PM.jpeg";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section - Logo Only */}
        <div className="rounded-lg">
          <img src={logo} alt="RAJDEEP AGRI PRODUCTS PVT LTD" className="mx-0 mb-4" />
        </div>
        
        {/* Middle Section - Important Links */}
        <div className="p-5 rounded-lg">
          <h3 className="font-serif text-3xl mb-3">Important Links</h3>
          <ul className="space-y-2 font-serif text-xl">
            <li><a href="/privacy-policy" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="/Carrer" className="hover:text-green-600">Career</a></li>
            <li><a href="/Contact" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="/Gallery" className="hover:text-green-600">Gallery</a></li>
          </ul>
        </div>
        
        {/* Right Section - Contact Details */}
        <div className="p-2 font-serif rounded-lg">
          <h3 className="font-bold text-2xl text-white mb-1">Visit Us</h3>
          <h4 className="font-bold  text-white mb-1">RAJDEEP AGRI PRODUCTS PVT LTD</h4>
          <p text-xl>ADDRESS: 3279/1 RANJEET NAGAR, NEW DELHI 110008</p>
          <p text-xl>📞 +91-11-25847773</p>
          <p text-xl>+91-11-25847771, 25847772</p>
          <p text-xl>📧 rajdeepagri@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
