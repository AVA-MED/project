import { useState } from "react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    alert(`Subscribed with Email: ${email}, Mobile: ${mobile}`);
    
    setTimeout(() => {
      setEmail("");
      setMobile("");
      setSubmitted(false);
    }, 120000); // Reset after 2 minutes (120000 ms)
  };

  return (
    <div className="flex items-center justify-center h-80 bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Subscribe Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-full"
            disabled={submitted}
          />
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full p-3 border rounded-full"
            disabled={submitted}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-50 bg-green-800 hover:bg-green-700 text-white font-semibold py-3 rounded-full"
              disabled={submitted}
            >
              {submitted ? "Submitted" : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
