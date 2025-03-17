import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (section) => {
    if (section === "home") {
      if (window.scrollY < 50) {
        window.location.reload(); // Reload if already at the top
      } else {
        window.location.hash = ""; // Reset hash to ensure navigation works
        setTimeout(() => {
          document.getElementById("home").scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-80 shadow-md" : "bg-transparent"
      } text-white px-6 md:px-16 lg:px-24`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => handleNavLinkClick("home")}>
          Sufi
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400" onClick={() => handleNavLinkClick("home")}>
            Home
          </a>
          <a href="#about" className="hover:text-gray-400" onClick={() => handleNavLinkClick("about")}>
            About Me
          </a>
          <a href="#skill" className="hover:text-gray-400" onClick={() => handleNavLinkClick("skill")}>
            Skills
          </a>
          <a href="#project" className="hover:text-gray-400" onClick={() => handleNavLinkClick("project")}>
            Projects
          </a>
          <a href="#certification" className="hover:text-gray-400" onClick={() => handleNavLinkClick("certification")}>
            Certification
          </a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => handleNavLinkClick("contact")}>
            Contact
          </a>
        </div>

        {/* Connect Me Button (Desktop) */}
        <button
          onClick={() => handleNavLinkClick("contact")}
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-center py-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("home")}>
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("about")}>
            About Me
          </a>
          <a href="#skill" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("skill")}>
            Skills
          </a>
          <a href="#project" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("project")}>
            Projects
          </a>
          <a href="#certification" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("certification")}>
            Certification
          </a>
          <a href="#contact" className="block hover:text-gray-400" onClick={() => handleNavLinkClick("contact")}>
            Contact
          </a>
          <button
            onClick={() => handleNavLinkClick("contact")}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
          >
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
