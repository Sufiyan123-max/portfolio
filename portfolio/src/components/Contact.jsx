import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "https://portfolio-7nby.onrender.com/contact",
        formData
      );

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Frontend error 👉", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white py-20 px-4" id="contact">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT SECTION */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-lg">
              As a skilled web developer with experience in React.js and the MERN
              stack, I am actively seeking job opportunities.
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <div className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-green-400 mr-2" />
                <a href="mailto:sifiyan100@gmail.com">
                  sifiyan100@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="text-green-400 mr-2" />
                <span>+91 9905787612</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <FaMapMarkedAlt className="text-green-400 mr-2" />
                <span>Aditya University, Kakinada, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (FORM) */}
          <div className="flex-1 w-full max-w-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                required
              />

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                required
              />

              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-2 rounded-full w-full md:w-auto"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {status.message && (
                <p
                  className={`text-center ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
