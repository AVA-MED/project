import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
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
      const response = await axios.post("http://localhost:5000/submit-form", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setStatus(response.data.message);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", mobile: "", message: "" });
        setStatus("");
      }, 2000);
      
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 bg-green-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-4">Enquire Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
          required
        />
        <input
          type="text"
          name="mobile"  // ✅ Fixed this
          placeholder="Contact Number"
          value={formData.mobile}  // ✅ Fixed this
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"
          rows="4"
          required
        ></textarea>
        
        <button
          type="submit"
          className="w-full bg-green-800 text-white p-2 rounded-full hover:bg-green-700 transition"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-center text-lg font-medium text-gray-700">{status}</p>}
      </form>
    </div>
  );                                                                                 
}

