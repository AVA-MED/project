import React from "react";
import { Link } from "react-router-dom"; // Import Link

const About = () => {
  return (
    <div className="min-full-screen pt-10 pb-8 flex items-center justify-center">
      <div className="min-w-full pt-10 pb-8 bg-blue-100 shadow-lg rounded-lg text-center">
        <h1 className="text-6xl font-bold text-green-800 mb-4 underline" >
          About us
        </h1>
        <div className="text-green-800 text-xl  font-bold pb-5 leading-relaxed space-y-4">
          <p>
            <strong>‘RAJDEEP’</strong> is a pioneer leader in the greenhouse industry, specializing in 
            designing, fabrication, and construction of all kinds of greenhouses. 
            <p>Established in 1978,Rajdeep has grown to become one of the India’s major greenhouse construction company. </p>
          </p>
          <p >
            Our expertise extends to advanced greenhouse solutions that enhance agricultural productivity 
            through innovative and sustainable designs.
          </p>
          <p >
            <strong>Certification:</strong> ‘RAJDEEP’ is an <strong>ISO 9001:2015, ISO 14001:2015</strong>, and 
            <strong> OHSAS 45001:2018</strong> certified company, ensuring the highest standards in greenhouse 
            construction and turnkey projects.
          </p>
          <p >
            With our headquarters in <strong>New Delhi</strong>, we provide technical solutions across India, 
            helping farmers to optimize their greenhouse operations.
          </p>
        </div>

        {/* Link to another page */}
        
      </div>
    </div>
  );
};

export default About;
