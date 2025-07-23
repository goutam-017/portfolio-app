import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  };

  return (
    <footer className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-3xl mb-10 font-bold">
          <span className="text-blue-600">&lt;</span>
          <span className="text-black">Goutam</span>
          <span className="text-blue-600">/</span>
          <span className="text-black">Senapati</span>
          <span className="text-blue-600">&gt;</span>
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "Home", id: "home" },
            { name: "About Me", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button key={index} onClick={() => handleScroll(item.id)} className="text-black hover:text-blue-400 text-sm sm:text-base my-1">
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/19Na8bdPmA/?mibextid=qi2Omg" },
            { icon: <FaXTwitter />, link: "https://x.com/Goutam1717?t=7w-Rg8NOP-BBQmUg9yjxYQ&s=09" },
            { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/goutam-senapati-6158a2286" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/__.gouttam._?igsh=M3J6NWZkeGVmd3Vs" },
            { icon: <FaGithub />, link: "https://github.com/goutam-017" },

          ].map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-xl hover:text-blue-400 transition-transform transform hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-black mt-6">
          © 2025 Goutam Senapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
