import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  //smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ">
      <div className="container mx-auto text-center">
        <Link to="/">
          <h2 className="text-2xl font-semibold text-[#bae9b4]">Rajni</h2>
        </Link>
        {/* navigation links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "About" },
            { name: "Skills", id: "Skills" },
            { name: "Project", id: "Project" },
            { name: "Contact", id: "Contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#94d58b] text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* social media icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/rajni-b62215306/",
            },
            { icon: <FaInstagram />, link: "" },
            { icon: <FaYoutube />, link: "" },
          ].map((item, index) => (
            <a
              key={index}
              href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#94d58b] transition-transform transform hover:scale-125"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* copyright text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rajni. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
