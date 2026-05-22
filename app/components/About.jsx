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
                            I am a passionate Software Engineer currently working at Legacore Infomatics, with a strong foundation in Computer Science and Engineering from Trident Academy of Technology. I enjoy developing efficient, scalable, and user-focused software solutions while continuously improving my technical and problem-solving skills.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            I specialize in Python Full-Stack web development and enjoy building responsive, modern, and full-stack web applications with clean and maintainable code.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            I have hands-on experience working with technologies such as React.js, Django, Django REST Framework, Firebase, SQLite3, and MySQL, along with tools like Git and GitHub. I also work with Python for backend development, automation, and solving real-world business problems.
                        </motion.li>
                        <motion.li whileInView={{ scale: 1.05 }}>
                            As a professional developer, I am always eager to learn new technologies, collaborate with teams, and take on challenging projects that help me grow. My goal is to build impactful, scalable, and high-quality software solutions.
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
