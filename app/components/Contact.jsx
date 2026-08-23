"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Sending...");

        const form = event.target;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            "8547122b-b6e9-4794-b956-443f1a6f5096"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                form.reset();
            } else {
                setResult(
                    data.message || "Something went wrong. Please try again."
                );
            }
        } catch (error) {
            console.error("Contact form error:", error);
            setResult(
                "Unable to send your message. Please try again later."
            );
        }
    };

    return (
        <section
            id="contact"
            className='w-full px-[6%] sm:px-[8%] lg:px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
        >
            {/* ================= HEADER ================= */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-14"
            >
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-500 mb-3">
                    Get In Touch
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                    Contact Me
                </h2>

                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-8 sm:w-12 h-[2px] bg-blue-400 rounded-full" />
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="w-8 sm:w-12 h-[2px] bg-blue-400 rounded-full" />
                </div>

                <p className="mt-5 text-sm sm:text-base lg:text-lg text-gray-500 leading-7">
                    I’d love to hear from you. Feel free to reach out about
                    opportunities, projects, or any questions.
                </p>
            </motion.div>

            {/* ================= FORM ================= */}
            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto"
            >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="Name"
                            placeholder="Enter your name"
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="Email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                        />
                    </motion.div>
                </div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-6"
                >
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Message
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows={6}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none resize-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                </motion.div>

                {/* Submit */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <button
                        type="submit"
                        disabled={result === "Sending..."}
                        className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gray-900 text-white font-medium shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {result === "Sending..." ? "Sending..." : "Send Message"}

                        <Image
                            src={assets.right_arrow_white}
                            alt=""
                            width={16}
                            height={16}
                            className="w-4 h-4"
                        />
                    </button>

                    {/* Status */}
                    {result && (
                        <p className={`mt-4 text-sm text-center ${result.includes("successfully") ? "text-green-600" : result === "Sending..." ? "text-gray-500" : "text-red-500"}`}>
                            {result}
                        </p>
                    )}
                </motion.div>
            </motion.form>
        </section>
    )
}

export default Contact