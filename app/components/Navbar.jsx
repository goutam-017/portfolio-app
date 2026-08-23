"use client"

import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  const [isScroll, setScroll] = useState(false)

  // ================= SCROLL =================
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <div className="w-28 text-2xl font-semibold cursor-pointer mr-14">
          <span className="text-blue-600">&lt;</span>
          <span className="text-black">Goutam</span>
          <span className="text-blue-600">/</span>
          <span className="text-black">Senapati</span>
          <span className="text-blue-600">&gt;</span>
        </div>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li className='hover:scale-109 transition-all duration-500 hover:text-blue-400'><a href="#home">HOME</a></li>
          <li className='hover:scale-109 transition-all duration-500 hover:text-blue-400'><a href="#about">ABOUT ME</a></li>
          <li className='hover:scale-109 transition-all duration-500 hover:text-blue-400'><a href="#skills">SKILLS</a></li>
          <li className='hover:scale-109 transition-all duration-500 hover:text-blue-400'><a href="#projects">PROJECT</a></li>
          <li className='hover:scale-109 transition-all duration-500 hover:text-blue-400'><a href="#education">EDUCATION</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          <div className="hidden md:flex space-x-4 hover:scale-109 transition-all duration-500">
            <a
              href="https://github.com/goutam-017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <div className="hidden md:flex space-x-4 hover:scale-109 transition-all duration-500">
            <a
              href="http://www.linkedin.com/in/goutam-senapati-6158a2286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar