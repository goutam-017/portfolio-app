import React from "react";
import { SkillsInfo } from "@/assets/assets";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="skills" className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-5">
            {/* ================= HEADER ================= */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500 mb-3">
                    My Expertise
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    Technical Skills
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full"></span>
                </div>

                <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed">
                    Technologies and tools I use to build scalable, modern and reliable applications.
                </p>
            </div>

            {/* ================= SKILLS ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {SkillsInfo.map((category, index) => (
                    <div
                        key={category.title}
                        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm"
                    >
                        {/* Subtle Background Decoration */}
                        <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-blue-50 blur-3xl" />

                        {/* Category Header */}
                        <div className="relative flex items-center gap-4 mb-6">
                            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white font-bold shadow-md shadow-blue-200">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                    {category.title}
                                </h3>

                                <div className="mt-1 w-10 h-[2px] bg-blue-500 rounded-full" />
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="relative flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-gray-100 border border-gray-200 text-gray-700"
                                >
                                    {/* Logo */}
                                    <div className="flex items-center justify-center w-7 h-7">
                                        <Image
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            width={20}
                                            height={20}
                                            className="object-contain"
                                        />
                                    </div>

                                    <span className="text-sm font-medium whitespace-nowrap">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="mt-12 flex justify-center">
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-500">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>

                    Always learning & exploring new technologies
                </div>
            </div>
        </section>
    );
};

export default Skills;