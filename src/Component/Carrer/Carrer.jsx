import { useState } from "react";
import axios from "axios";

export default function Career() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    source: "",
    ctc: "",
    noticePeriod: "",
    experience: "",
    jobTitle: "", // Added jobTitle
    message: "",
    cv: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5000/carrer-form", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus("Form submitted successfully!");

      setTimeout(() => {
        window.location.reload(); // Reload after 2 seconds
      }, 1000);
    } catch (error) {
      setStatus("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg max-w-4xl mx-auto rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-green-900">
        Work with Rajdeep to build a better tomorrow
      </h2>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          required
        />

        <div className="flex space-x-2">
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Select Source</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Referral">Referral</option>
            <option value="Company Website">Company Website</option>
          </select>

          <input
            type="text"
            name="ctc"
            placeholder="Current CTC"
            value={formData.ctc}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            name="noticePeriod"
            placeholder="Notice Period"
            value={formData.noticePeriod}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="text"
            name="experience"
            placeholder="Total Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Job Title Field */}
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          rows="3"
          required
        ></textarea>

        <input
          type="file"
          name="cv"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
          accept=".pdf,.doc,.docx"
          required
        />

        <button
          type="submit"
          className="w-full p-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition"
        >
          Submit
        </button>

        {status && (
          <p className="mt-4 text-center text-lg font-medium text-gray-700">{status}</p>
        )}
      </form>
    </div>
  );
}
