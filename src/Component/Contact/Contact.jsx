import React, { useState } from "react";
import axios from "axios";
import leavesImage from "/photos/298.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      setStatus(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-52 md:h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${leavesImage})` }}
      >
        <h1 className="text-2xl md:text-4xl text-green-800 font-bold">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12 md:py-20 flex justify-center">
        <div className="w-full max-w-lg bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl text-green-800 font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-600 mb-6 text-center text-sm md:text-base">
            Fill out the form below, and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded-full p-3"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded-full p-3"
              />
            </div>

            <input
              type="text"
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full border rounded-full p-3"
            />

            <input
              type="text"
              name="country"
              placeholder="Country *"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border rounded-full p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-full p-3"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile *"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded-full p-3"
            />

            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-2xl p-3 h-24"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-900 transition"
            >
              Submit
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm md:text-base font-medium text-gray-700">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
