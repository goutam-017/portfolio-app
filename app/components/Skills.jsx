import React from 'react'
import { SkillsInfo } from '@/assets/assets'
import Image from 'next/image'
import { motion, scale } from "motion/react"

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='skills' className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-black">SKILLS</h2>
                <div className="w-24 h-1 bg-blue-400 mx-auto mt-2"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-4 text-lg">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </motion.p>
            </motion.div>
            {/* Skill Categories */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={category.title} className="bg-blue-50 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-gray-300 shadow-2xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
                            {category.title}
                        </h3>

                        {/* Skill Items - 3 per row on larger screens */}
                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center">
                                        <Image src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 sm:w-8 sm:h-8" />
                                        <span className="text-xs sm:text-sm text-black">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Skills
