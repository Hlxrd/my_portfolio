import React, { useRef, useState } from 'react';
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion';
export const AboutSec = () => {
    const [selectedId, setSelectedId] = useState(null)

 

    // const items = [
    //     { id: 1, subtitle: 'Ego Section', title: "👋 Hi there! I'm  a frontend web developer who loves creating user-friendly and visually appealing websites. I use React.js to build dynamic and responsive applications, along with tools like Tailwind CSS, Sass, and SCSS for efficient development.💻 I enjoy turning ideas into interactive experiences and refining user interfaces for a seamless journey. With attention to detail and a commitment to staying up-to-date with the latest tech trends, I'm dedicated to delivering modern solutions." },

    // ];

    return (
        <div className='border-y-2 py-8 px-10 flex flex-col items-center lg:h-[fit-content] ' >
            <div className='w-[70%] my-4 py-3 '>
                <h1 className='text-4xl font-extrabold p-4 text-center underline'>Ego Section</h1>
                <p className='text-2xl text-gray-300'>👋 Hi there! I'm <span className='text-4xl font-extrabold text-blue-400 '>Hamza Yasri</span>, a frontend web developer who loves creating user-friendly and visually appealing websites. <br /> I use React.js to build dynamic and responsive applications, along with tools like Tailwind CSS, Sass, and SCSS for efficient development. <br />

                    💻 I enjoy turning ideas into interactive experiences and refining user interfaces for a seamless journey. With attention to detail and a commitment to staying up-to-date with the latest tech trends, I'm dedicated to delivering modern solutions.</p>
            </div>
            
                {/* <motion.div className='w-[70%]' layoutId={items[0].id} onClick={() => setSelectedId(items[0].id)}>
                    <motion.h5 className='text-3xl'>{items[0].subtitle}</motion.h5>
                    <motion.h2 className='text-2xl'>{items[0].title}</motion.h2>
                </motion.div>
            
            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId}>
                        <motion.h5>{items[0].subtitle}</motion.h5>
                        <motion.h2>{items[0].title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)} />
                    </motion.div>
                )}
            </AnimatePresence> */}
        </div>
    );
};
