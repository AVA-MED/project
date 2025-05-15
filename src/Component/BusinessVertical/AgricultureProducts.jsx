import React from "react";

const agricultureProducts = [
  {
    title: "GREENHOUSE",
    description:
      "We execute construction projects for greenhouses, polyhouses, net houses, and other horticultural structures. For these initiatives, we also offer advisory, design, installation, and maintenance services. Utilising modern technologies such as drip irrigation, fertigation, climate control, automation, etc., we maximise the yield and quality of horticultural commodities.",
    image: "/photos/poly house(natural ventilated).jpg",
  },
  {
    title: "Cold Room",
    description:
      "We execute construction projects for greenhouses, polyhouses, net houses, and other horticultural structures. For these initiatives, we also offer advisory, design, installation, and maintenance services. Utilising modern technologies such as drip irrigation, fertigation, climate control, automation, etc., we maximise the yield and quality of horticultural commodities.",
    image: "/photos/poly house(natural ventilated).jpg",
  },
  {
    title: "Centres of Excellence (COE)",
    description:
      "We construct integrated packhouses for grading, sorting, washing, packaging, and storing horticultural produce...",
    image: "/photos/poly house(natural ventilated).jpg",
  },
  {
    title: "TURNKEY PROJECTS",
    description:
      "We manage comprehensive projects for a variety of horticultural activities, including tissue culture, hydroponics...",
    image: "/photos/poly house(natural ventilated).jpg",
  },
  {
    title: "Retractable Greenhouse",
    description:
      "We manage comprehensive projects for a variety of horticultural activities, including tissue culture, hydroponics...",
    image: "/photos/poly house(natural ventilated).jpg",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex border-b p-6 bg-white shadow-md" data-aos="fade-left">
      <img
        src={project.image}
        alt={project.title}
        className="w-98 h-72 object-cover mr-6 rounded-lg transition-transform duration-300 hover:translate-x-[-10px] hover:brightness-75"
        data-aos="zoom-in"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold uppercase text-gray-800 text-center">
          {project.title}
        </h2>
        <p className="text-gray-600 text-sm text-center">{project.description}</p>
        <button className="mt-3 bg-green-700 text-white px-4 py-2 text-sm rounded hover:bg-green-800 transition">
          Click for More
        </button>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="max-w-full mx-auto bg-blue-100 shadow-lg rounded-lg mt-10 p-4">
      {agricultureProducts.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
