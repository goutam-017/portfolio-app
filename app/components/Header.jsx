import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion, scale } from "motion/react"

const Header = () => {
    return (
        <div id='home' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full border-2 border-blue-400 w-40' />
            </motion.div >
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 '>Hello,<Image src={assets.hand_icon} alt='' className='w-6 mb-2' />I'm<p className='text-blue-500 font-semibold'>Goutam Senapati</p></motion.h2>
            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text-[46px] text-black'>
                I’m a Software Developer passionate about programming, backend development, and turning ideas into real-world software solutions.
            </motion.h2>
            <p className='max-w-2xl mx-auto'>

            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                < motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }} href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></ motion.a>
                < motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }} href="/Goutam Senapati-Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 bg-blue-100 flex items-center gap-2'>My Resume <Image src={assets.download_icon} alt='' className='w-4' /></ motion.a>
            </div>
        </div>
    )
}

export default Header
