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

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://portfolio-7nby.onrender.com/contact",
        formData
      );

      if (response.status === 200) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
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

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-lg">
              As a skilled web developer with experience in React.js, the MERN
              stack, and full-stack development, I am actively seeking job
              opportunities where I can apply my technical expertise.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4 text-lg">
              <div className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-green-400 mr-2" />
                <a
                  href="mailto:sifiyan100@gmail.com"
                  className="hover:underline"
                >
                  sifiyan100@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <FaPhone className="text-green-400 mr-2" />
                <span>+91 9905787612</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <FaMapMarkedAlt className="text-green-400 mr-2" />
                <span>Street, City, Province, Country</span>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="flex-1 w-full max-w-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full md:w-auto px-8 py-2 rounded-full text-lg transform transition-transform duration-300 hover:scale-105"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {status.message && (
                <p
                  className={`mt-4 text-center ${
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
