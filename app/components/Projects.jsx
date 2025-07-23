import React, { useState } from 'react'
import { projects } from '@/assets/assets'
import Image from 'next/image';
import { motion, scale } from "motion/react"

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(null)

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='projects' className="w-full px-[12%] py-10 scroll-mt-20 relative">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black">PROJECTS</h2>
                <div className="w-32 h-1 bg-blue-400 mx-auto mt-4"></div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-4 text-lg">
                    A showcase of the projects I have self worked on, highlighting my skills and experience in various technologies
                </motion.p>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} onClick={() => handleOpenModal(project)} className="border border-gray-300 bg-blue-50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-blue-200 hover:scale-105 transition-all duration-300">
                        <div className="p-4">
                            <Image src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-black mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="inline-block bg-white text-xs font-semibold text-gray-900 rounded-full px-2 py-1 mr-2 mb-2 border-1 border-black">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Modal Container */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-10 p-4">
                    <div className="bg-blue-50 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
                        <div className="flex justify-end p-4">
                            <button onClick={handleCloseModal} className="text-black text-3xl font-bold hover:text-red-600">
                                &times;
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <div className="w-full flex justify-center bg-blue-50 px-4">
                                <Image src={selectedProject.image} alt={selectedProject.title} className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl" />
                            </div>
                            <div className="lg:p-8 p-6">
                                <h3 className="lg:text-3xl font-bold text-black mb-4 text-md">
                                    {selectedProject.title}
                                </h3>
                                <p className="text-gray-500 mb-6 lg:text-base text-xs">
                                    {selectedProject.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span key={index} className="bg-white text-xs font-semibold text-black rounded-full px-2 py-1 border-1 border-black">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default Projects
