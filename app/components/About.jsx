import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
    return (
        <section
            id="about"
            className="w-full px-[6%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-5"
        >
            {/* ================= HEADER ================= */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500 mb-3">
                    Get To Know Me
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    About Me
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="w-12 h-[2px] bg-blue-400 rounded-full"></span>
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* ================= IMAGE ================= */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-64 sm:w-80 shrink-0"
                >
                    {/* Background Decoration */}
                    <div className="absolute -inset-3 rounded-[2rem] border border-blue-100 -z-10"></div>

                    <div className="rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 shadow-lg">
                        <Image
                            src={assets.user_image}
                            alt="Goutam Senapati"
                            width={400}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

                {/* ================= TEXT ================= */}
                <div className="flex-1 max-w-3xl">
                    <div className="space-y-5">

                        {/* About Intro */}
                        <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                            I am a{" "}
                            <span className="font-semibold text-gray-900">
                                Full Stack Developer
                            </span>{" "}
                            focused on building practical, scalable, and
                            user-friendly web applications.
                        </p>

                        {/* Experience */}
                        <div className="flex gap-4">
                            <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-blue-500"></div>

                            <p className="text-base sm:text-lg leading-7 text-gray-500">
                                Full Stack Developer with 4 months of
                                professional experience as a Software Developer
                                Trainee, focused on building practical and
                                scalable web applications.
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex gap-4">
                            <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-blue-500"></div>

                            <p className="text-base sm:text-lg leading-7 text-gray-500">
                                Skilled in{" "}
                                <span className="font-medium text-gray-700">
                                    Python Full-Stack & MERN Stack Development
                                </span>
                                , with experience in Django, Django REST
                                Framework, React.js, Next.js, Node.js,
                                Express.js, MongoDB, MySQL, PostgreSQL, and
                                Prisma ORM.
                            </p>
                        </div>

                        {/* Backend / Data */}
                        <div className="flex gap-4">
                            <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-blue-500"></div>

                            <p className="text-base sm:text-lg leading-7 text-gray-500">
                                Experienced in REST API development, web
                                scraping, LLM integration, PDF/OCR processing,
                                and data extraction using Python.
                            </p>
                        </div>

                        {/* Passion */}
                        <div className="flex gap-4">
                            <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-blue-500"></div>

                            <p className="text-base sm:text-lg leading-7 text-gray-500">
                                Passionate about problem-solving, learning new
                                technologies, and developing clean, scalable
                                software solutions.
                            </p>
                        </div>

                        {/* Career Goal */}
                        <div className="flex gap-4">
                            <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-blue-500"></div>

                            <p className="text-base sm:text-lg leading-7 text-gray-500">
                                Currently looking for opportunities where I can
                                apply my skills, contribute to real-world
                                projects, and continue growing as a{" "}
                                <span className="font-semibold text-gray-700">
                                    Full Stack Developer
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= QUICK INFO ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 max-w-4xl mx-auto">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                    <p className="text-2xl font-bold text-gray-900">4+</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Months Experience
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                    <p className="text-2xl font-bold text-gray-900">Full Stack</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Development
                    </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-center">
                    <p className="text-2xl font-bold text-gray-900">Always</p>
                    <p className="text-sm text-gray-500 mt-1">
                        Learning & Building
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;