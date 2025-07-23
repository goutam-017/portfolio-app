import React from 'react'
import { education } from '@/assets/assets'
import { motion, scale } from "motion/react"

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="education" className="w-full px-[12%] py-10 scroll-mt-20 items-center ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black">EDUCATION</h2>
                <div className="w-32 h-1 bg-blue-400 mx-auto mt-4"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-4 text-lg">
                    My education has been a journey of learning and development. Here are the details of my academic background.
                </motion.p>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                {/* Education Entries */}
                {education.map((edu) => (
                    <div
                        key={edu.id}
                        className="border border-gray-300 bg-blue-50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-200 hover:scale-105 transition-all duration-300 p-6"
                    >
                        {/* Content Section */}
                        <div className="flex flex-col space-y-1">
                            {/* Degree, School Name, and Date */}
                            <div>
                                <h3 className="text-xl font-semibold text-black">{edu.degree}</h3>
                                <h4 className="text-sm text-gray-900">{edu.school}</h4>
                                <p className="text-sm text-gray-700 mt-1">{edu.date}</p>
                            </div>

                            {/* Grade */}
                            <p className="text-gray-600 font-bold">Grade: {edu.grade}</p>

                            {/* Description */}
                            <p className="text-gray-500">{edu.desc}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Education
