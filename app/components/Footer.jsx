import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/goutam-017",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/goutam-senapati-6158a2286",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/share/19Na8bdPmA/?mibextid=qi2Omg",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/__.gouttam._?igsh=M3J6NWZkeGVmd3Vs",
      label: "Instagram",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/Goutam1717?t=7w-Rg8NOP-BBQmUg9yjxYQ&s=09",
      label: "X",
    },
  ];

  return (
    <footer className="w-full px-[6%] sm:px-[8%] lg:px-[12%] pt-16 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* ================= TOP DIVIDER ================= */}
        <div className="w-full h-px bg-gray-200 mb-12" />

        {/* ================= LOGO ================= */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-blue-600">&lt;</span>
            <span className="text-gray-900">Goutam</span>
            <span className="text-blue-600">/</span>
            <span className="text-gray-900">Senapati</span>
            <span className="text-blue-600">&gt;</span>
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 mt-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm sm:text-base text-gray-600"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Goutam Senapati. All rights
            reserved.
          </p>

          <p className="text-xs sm:text-sm text-gray-400">
            Built with Next.js & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;