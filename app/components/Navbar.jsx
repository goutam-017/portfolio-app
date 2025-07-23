import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {

  const [isScroll, setScroll] = useState(false)
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
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
          <button className='cursor-pointer block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>
        </div>

        {/*-------- mobile menu ---------*/}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-100 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='cursor-pointer' />
          </div>
          <li><a onClick={closeMenu} href="#home">HOME</a></li>
          <li><a onClick={closeMenu} href="#about">ABOUT ME</a></li>
          <li><a onClick={closeMenu} href="#skills">SKILLS</a></li>
          <li><a onClick={closeMenu} href="#projects">PROJECT</a></li>
          <li><a onClick={closeMenu} href="#education">EDUCATION</a></li>

          <div className="flex space-x-4">
            <a
              href="https://github.com/goutam-017"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/goutam-senapati-6158a2286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
