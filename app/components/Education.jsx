import React from "react";
import { education } from "@/assets/assets";

const Education = () => {
    return (
        <section id="education" className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-5">
            {/* ================= HEADER ================= */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-500 mb-3">
                    Academic Background
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    Education
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-8 sm:w-12 h-[2px] bg-blue-400 rounded-full" />
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-8 sm:w-12 h-[2px] bg-blue-400 rounded-full" />
                </div>

                <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-500 leading-7">
                    My academic journey and the experiences that shaped my foundation in computer science and software development.
                </p>
            </div>

            {/* ================= TIMELINE ================= */}
            <div className="relative max-w-5xl mx-auto">

                {/* Timeline Line */}
                <div
                    className="
                        absolute
                        left-[15px]
                        sm:left-1/2
                        top-0
                        bottom-0
                        w-[2px]
                        bg-gray-200
                        sm:-translate-x-1/2
                    "
                />

                {education.map((edu, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={edu.id}
                            className="
                                relative
                                grid
                                grid-cols-[32px_1fr]
                                sm:grid-cols-2
                                items-start
                                mb-14
                                sm:mb-20
                                last:mb-0
                            "
                        >
                            {/* ================= TIMELINE DOT ================= */}
                            <div
                                className="
                                    absolute
                                    left-0
                                    sm:left-1/2
                                    -translate-x-0
                                    sm:-translate-x-1/2
                                    top-1
                                    z-10
                                "
                            >
                                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-4 border-blue-500 shadow-sm" />
                            </div>

                            {/* ================= DESKTOP DATE ================= */}
                            <div
                                className={`
                                    hidden
                                    sm:flex
                                    items-center
                                    w-full
                                    ${isEven
                                        ? "justify-end pr-14"
                                        : "order-2 justify-start pl-14"
                                    }
                                `}
                            >
                                <span className="text-sm font-semibold text-blue-600">
                                    {edu.date}
                                </span>
                            </div>

                            {/* ================= CONTENT ================= */}
                            <div
                                className={`
                                    col-start-2
                                    sm:col-auto
                                    w-full
                                    ${isEven
                                        ? "sm:pl-14"
                                        : "sm:order-1 sm:pr-14"
                                    }
                                `}
                            >
                                <div className="max-w-xl">

                                    {/* Label */}
                                    <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2">
                                        {String(index + 1).padStart(2, "0")}{" "}
                                        <span className="mx-1">•</span>{" "}
                                        Education
                                    </p>

                                    {/* Degree */}
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug">
                                        {edu.degree}
                                    </h3>

                                    {/* School */}
                                    <p className="mt-2 text-sm sm:text-base font-medium text-blue-600 leading-6">
                                        {edu.school}
                                    </p>

                                    {/* Mobile Date */}
                                    <p className="sm:hidden mt-2 text-xs font-semibold text-gray-500">
                                        {edu.date}
                                    </p>

                                    {/* Grade */}
                                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
                                        <span className="text-[11px] sm:text-xs font-medium text-gray-400">
                                            Grade
                                        </span>

                                        <span className="text-xs sm:text-sm font-semibold text-gray-800">
                                            {edu.grade}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-500 leading-6 sm:leading-7">
                                        {edu.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Education;