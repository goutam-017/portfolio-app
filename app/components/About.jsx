import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion, scale } from "motion/react"

const About = () => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">ABOUT ME</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className='flex-1'>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='list-disc list-inside space-y-3 text-xl text-gray-500'>
                        <motion.li
                            whileInView={{ scale: 1.05 }}
                        >
                            I am a highly motivated and enthusiastic Computer Science and Engineering graduate from Trident Academy of Technology, seeking a challenging position as a Software Engineer. Eager to apply my programming skills, problem-solvingabilities, and passion for technology in a dynamic and growth-oriented environment.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            I specialize in Python Full-Stack web development. I enjoy building responsive, user-friendly, and full-stack web applications.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            I have experience working with technologies like React.js, Django, Django REST Framework,Firebase SQLite3 DB and MySQL DB, as well as tools like Git and GitHub. I also use Python for backend development, scripting, and solving real-world problems.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            I'm always eager to learn new technologies and take on challenges that help me grow as a developer. My goal is to build scalable and efficient software solutions that make a real impact.
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
