import React, { useState, useRef, useEffect } from "react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Importing images
import logo from "/photos/WhatsApp Image 2025-03-03 at 12.53.01 PM.jpeg";

// ====== Data Arrays ======
const Menu = [{ id: 1, name: "Home", link: "/" }];
const AboutUsDropdown = [{ id: 1, name: "Our Management", link: "/Aboutus" }];
const BusinessVerticalDropdown = [
  {
    id: 1,
    name: "Horticulture Project",
    link: "/HortiProjects",
    subMenu: [
      { name: "Green House", link: "/Greenhouses " },
      { name: "Turnkey Projects", link: "/TurnkeyProject" },
      { name: "Cold Room", link: "/ColdRoom" },
      { name: "Center of Excellence", link: "/CenterOfExcellence" },
      { name: "Retractable Green House", link: "/RetractableGreenHouse" },
      { name: "Aeroponic Facility", link: "/Aeroponicfacility " },
      { name: "Hydroponic System", link: "/Hydroponicsystem" },
    ],
  },
  {
    id: 2,
    name: "Products",
    subMenu: [
      { name: "Mist Chambers", link: "/MistChamber" },
      { name: "Speed Breeding Facility", link: "/SpeedBreedingFacility" },
      { name: "Plug Type Nursery Production", link: "/PlugTypeNurseyProduction" },
      { name: "Net House", link: "/NetHouse" },
      { name: "Rainout Shetler", link: "/RainoutShetler" },
      { name: "Plant Phonemics Facility", link: "/PlantPhonemicsFacility" },
      { name: "Naturally Ventilated Polyhouse", link: "/NaturallyVentilatedPolyhouse" },
      { name: "Transgenic Greenhouse", link: "/TransgenicGreenhouse" },
      { name: "Green House At Hilly Area", link: "/GREENHOUSEATSNOWCOVEREDREGION" },
    ],
  },
  {
    id: 3,
    name: "Agriculture Products",
    subMenu: [
      { name: "Pots", link: "/Pots" },
      { name: "Clips", link: "/Clips" },
      { name: "Media", link: "/Media" },
      { name: "Seedling Tray", link: "/SeedlingTray" },
      { name: "Seed Displayer", link: "/SeedDisplayer" },
      { name: "Root Trainer with Stand", link: "/RootTrainer" },
    ],
  },
];
const InternationalPresenceDropdown = [
  { id: 1, name: "GreenHouse Manufacturer in Nepal", link: "Nepal" },
  { id: 2, name: "GreenHouse Manufacturer in Bangladesh", link: "Bangladesh" },
  { id: 3, name: "GreenHouse Manufacturer in Bhutan", link: "Bhutan" },
  { id: 4, name: "GreenHouse Manufacturer in GhanaAfrica", link: "/GhanaAfrica " },
];
const Manu = [
  { id: 3, name: "Gallery", link: "/Gallery" },
  { id: 4, name: "Career", link: "/Carrer" },
  { id: 5, name: "Contact Us", link: "/contact" },
];

// ===== Dropdown Component =====
const Dropdown = ({ title, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <p
      className="relative cursor-pointer"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 py-2 hover:text-green-600 transition">
        {title}{" "}
        <FaCaretDown
          className={`transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="py-2 divide-y divide-gray-200">
            {menuItems.map((item, index) => (
              <p key={index} className="relative group">
                {item.subMenu ? (
                  <>
                    <div
                      className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => navigate(item.link)}
                    >
                      {item.name}
                      <FaCaretDown className="text-xs" />
                    </div>
                    <div className="absolute left-full top-0 mt-0 w-72 bg-emerald-100 border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
                      <ul className="py-2 divide-y divide-gray-200">
                        {item.subMenu.map((subItem, subIndex) => (
                          <p key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          </p>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.link}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                )}
              </p>
            ))}
          </ul>
        </div>
      )}
    </p>
  );
};

// ===== Navbar Component =====
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="shadow-md text-green-800 bg-white relative z-10">
      <div className="bg-primary py-1">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}  // Use the imported logo here
              alt="Company Logo"
              className="h-30 w-auto object-contain"
            />
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex pr-10 font-serif text-center text-lg items-center gap-5">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="px-2 hover:text-primary transition">
                  {data.name}
                </a>
              </li>
            ))}
            <Dropdown title="About Us" menuItems={AboutUsDropdown} />
            <Dropdown title="Business Vertical" menuItems={BusinessVerticalDropdown} />
            <Dropdown title="International Presence" menuItems={InternationalPresenceDropdown} />
            {Manu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="px-4 hover:text-primary transition">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-5 space-y-4 font-serif">
          {Menu.map((data) => (
            <a key={data.id} href={data.link} className="block hover:text-primary">
              {data.name}
            </a>
          ))}
          <Dropdown title="About Us" menuItems={AboutUsDropdown} />
          <Dropdown title="Business Vertical" menuItems={BusinessVerticalDropdown} />
          <Dropdown title="International Presence" menuItems={InternationalPresenceDropdown} />
          {Manu.map((data) => (
            <a key={data.id} href={data.link} className="block hover:text-primary">
              {data.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
