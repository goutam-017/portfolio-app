import user_image from "./user-image.png";
import git from "./git.png";
import github from "./github.png";
import mysql from "./mysql.png";
import right_arrow_white from "./right-arrow-white.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.gif";
import header_bg_color from "./header-bg-color.png";
import menu_black from "./menu-black.png";
import close_black from "./close-black.png";
import htmlLogo from "./html.png";
import cssLogo from "./css.png";
import javascriptLogo from "./javascript.png";
import nodejs from './nodejs.png'
import express from './express.png'
import reactjsLogo from "./react.svg";
import nextjsLogo from "./nextjs.png";
import tailwindcssLogo from "./tailwindcss.png";
import djangoLogo from "./django.png";
import restLogo from "./rest.png";
import pythonLogo from "./python.png";
import doctorpluslogo from "./doctorpluslogo.png";
import eduverselogo from "./eduverselogo.png";
import weatherapp from "./weatherapp.png";
import mongodb from './mongodb.png'
import restapi from './restapi.png'
import postgresql from './postgresql.png'

export const assets = {
  cssLogo,
  javascriptLogo,
  reactjsLogo,
  nextjsLogo,
  tailwindcssLogo,
  djangoLogo,
  restLogo,
  pythonLogo,
  user_image,
  git,
  mysql,
  right_arrow_white,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  menu_black,
  close_black,
  htmlLogo,
  doctorpluslogo,
  eduverselogo,
  weatherapp,
  nodejs,
  express,
  mongodb,
  restapi,
  postgresql
};

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node Js", logo: nodejs },
      { name: "Express Js", logo: express },
      { name: "Django", logo: djangoLogo },
      { name: "MongoDB", logo: mongodb },
      { name: "MySQL", logo: mysql },
      { name: "PostgreSQL", logo: postgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "REST API", logo: restapi }
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Doctor Appointment Booking System",
    description:
      "A modern and intuitive MERN Stack web application designed to simplify healthcare access by enabling patients to book doctor appointments online with ease. This system provides real-time slot availability, smart doctor search by specialty and location, secure payment options, and multilingual support. Tailored for both patients and doctors, it streamlines appointment management, reduces no-shows, and enhances communication — making it an essential tool for digital healthcare in India.",
    image: doctorpluslogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind",
    ],
  },
  {
    id: 1,
    title: "Online course website",
    description:
      "A responsive and dynamic web platform designed to offer a wide range of online courses across various subjects and skill levels. Built with modern web technologies, it features interactive video lectures, downloadable resources, progress tracking, and user authentication. Whether for competitive exams or skill development, the platform provides a seamless learning experience powered by real-time data and personalized recommendations.",
    image: eduverselogo,
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "API"],
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A responsive and user-friendly web application built for delivers real-time weather updates for any city worldwide. It fetches accurate data such as temperature and weather conditions using third-party APIs. With a clean interface and intuitive search functionality, this app is perfect for staying informed about the weather anytime, anywhere.",
    image: weatherapp,
    tags: ["HTML", "CSS", "JavaScript", "API"],
  },
];

export const education = [
  {
    id: 0,
    school: "Trident Academy of Technology, Bhubaneswar, Odisha",
    date: "Dec 2021 - May 2025",
    grade: "7.3 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering (B.Tech) from Trident Academy of Technology, Bhubaneswar, Odisha. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing, Programming and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    degree: "Bachelor of Technology - B.Tech",
  },
];