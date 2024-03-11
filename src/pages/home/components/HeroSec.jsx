import React from 'react';
import heroImg from '../../../assets/images/IMG_20240223_112831_211-removebg-preview.png'
import Typewriter from '../../../utiles/Motions';
import { motion } from "framer-motion"
// import { FramerMlotion } from '../../../utiles/Motions';
// import { useTransform, useViewportScroll } from 'framer-motion';




export const HeroSec = ({ isVisible }) => {
    
    return (
        <>
            <section className='lg:w-[98.8vw] w-[80%]  lg:h-screen h-screen flex flex-col justify-center items-center '>
                <div className='flex flex-col lg:justify-center lg:text-center p-4 text-center'>
                    <h1 className='text-4xl font-bold font-mono px-2 '>Web Developer, UI/UX & Frontend</h1>
                    <p className='text-xl'>I code and design <span className='text-green-300'>beautifully simple</span> Web Sites , and I <span className='text-red-500'>Love</span> what I do.</p>
                </div>
                <motion.div
                    animate={{ x: 100 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className='introDiv lg:w-[40%] w-[110%] lg:h-[88%] h-[50vh] flex flex-col bg-slate-600 lg:justify-center justify-end  items-end mb-9 gap-7 lg:items-end outline outline-slate-300 mr-44 overflow-hidden lg:rounded-full ' style={{ backgroundImage: `url(${heroImg})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundAttachment: `inherit` }}>
                    <h1 className='text-3xl block w-[70%] lg:w-[50%] pl-4'>My name is : <br /><span className='text-4xl font-extrabold text-blue-400 '><Typewriter text="Hamza Yasri" /></span> </h1>
                    <button className='outline p-3 rounded-full bg-slate-300 hover:bg-slate-500 hover:text-blue-300 lg:mr-32' onClick={()=>{window.scrollTo({ top: 850, behavior: "smooth" })}}>About Me </button>
                </motion.div>
                {/* <motion.div animate={{ opacity: isVisible ? 1 : 0 }} className='z-30' />
                <motion.div
                    style={{ scale }}
                >
                    <motion.div
                        style={{
                            scaleY: scrollYProgress
                        }}
                    />
                </motion.div> */}
            </section>


        </>
    );
};
