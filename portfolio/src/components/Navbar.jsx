import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConnectMeClick = () => {
    // Scroll to the Contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Sufi</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#skill" className="hover:text-gray-400">Skills</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#certification" className="hover:text-gray-400">Certification</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Connect Me Button (Desktop) */}
        <button
          onClick={handleConnectMeClick}
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
        <div className="md:hidden bg-black text-center py-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#about" className="block hover:text-gray-400">About Me</a>
          <a href="#project" className="block hover:text-gray-400">Projects</a>
          <a href="#skill" className="block hover:text-gray-400">Skills</a>
          <a href="#certification" className="block hover:text-gray-400">Certification</a>
          <a href="#contact" className="block hover:text-gray-400">Contact</a>
          <button
            onClick={handleConnectMeClick}
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
