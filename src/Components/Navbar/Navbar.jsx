import React, { useState, useEffect } from "react";
import logo from "../../assets/Portfolio-Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  //check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false); // closes mobile menu if it's open

     const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
    { id: "About", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Project", label: "Project" },
    { id: "Contact", label: "Contact" },
  ];
  return (
    <nav
     className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
    isScrolled
      ? "bg-black bg-opacity-70 backdrop-blur-md shadow-md"
      : "bg-transparent"
      }
    `}
    >
      <div className="text-white py-1 flex justify-between items-center">
        <Link to="/">
        <img src={logo} alt="" className="w-32 h-auto" />
        </Link>
        {/* Desktop view */}
        <ul className="hidden md:flex space-x-8 text-xl text-gray-200">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#94d58b] ${
                activeSection === item.id ? "text-[#f5d8d7]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* social media icon */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Rajni287213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Gray-300 hover:text-[#94d58b]"
          >
            <FaGithubSquare size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajni-b62215306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Gray-300 hover:text-[#94d58b]"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* mobile menu icons */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#94d58b] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#94d58b] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* mobile menu items */}

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-200">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#94d58b] ${
                  activeSection === item.id ? "text-[#94d58b]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
               <div className="flex space-x-4">
          <a
            href="https://github.com/Rajni287213"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Gray-300 hover:text-[#94d58b]"
          >
            <FaGithubSquare size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rajni-b62215306/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Gray-300 hover:text-[#94d58b]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
          </ul>
            
        </div>
      )}
    </nav>
  );
}

export default Navbar;

{
  /* <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    } */
}
