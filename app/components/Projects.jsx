"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/assets/assets";
import Image from "next/image";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    // Lock background scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    // Close modal with Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };

        if (selectedProject) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-5 relative"
        >
            {/* ================= HEADER ================= */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500 mb-3">
                    My Work
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    Projects
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full" />
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full" />
                </div>

                <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
                    A collection of projects I have worked on, showcasing my
                    skills, experience, and problem-solving abilities across
                    different technologies.
                </p>
            </div>

            {/* ================= PROJECT GRID ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        onClick={() => handleOpenModal(project)}
                        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm cursor-pointer"
                    >
                        {/* Project Number */}
                        <div className="absolute top-5 left-5 z-10 flex items-center justify-center w-9 h-9 rounded-lg bg-white/95 border border-gray-200 text-xs font-bold text-gray-700 shadow-sm">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Image */}
                        <div className="p-4">
                            <div className="overflow-hidden rounded-xl bg-gray-100 border border-gray-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-52 object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-6 pb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= MODAL ================= */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overscroll-none"
                    onClick={handleCloseModal}
                >
                    {/* ================= MODAL CONTAINER ================= */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden" onClick={(event) => event.stopPropagation()}>
                        {/* ================= CLOSE BUTTON ================= */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute right-5 top-5 z-50 flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200 text-red-500 text-3xl shadow-md cursor-pointer"
                            aria-label="Close project"
                        >
                            &times;
                        </button>

                        {/* ================= SCROLLABLE CONTENT ================= */}
                        <div className="modal-scroll max-h-[90vh] overflow-y-auto overscroll-contain">
                            {/* Modal Image */}
                            <div className="p-5 sm:p-7">
                                <div className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        width={1200}
                                        height={700}
                                        className="w-full max-h-[500px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="px-6 pb-8 sm:px-8 sm:pb-10">
                                <div className="mb-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-2">
                                        Project
                                    </p>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                        {selectedProject.title}
                                    </h3>
                                </div>

                                <p className="text-gray-500 text-sm sm:text-base leading-7 mb-7">
                                    {selectedProject.description}
                                </p>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                        Technologies Used
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(
                                            (tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs sm:text-sm font-medium text-blue-700"
                                                >
                                                    {tag}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;