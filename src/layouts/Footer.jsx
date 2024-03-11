import React from 'react';
import { Home } from '../pages/home/Home';
import { Contact } from '../pages/home/components/Contact';

export const Footer = () => {
    return (
        <>
            <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-slate-400 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 ">
                <span className="text-sm text-gray-50 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href={<Home/>} className="hover:underline">
                        YasriHamza™
                    </a>
                    <br />
                    <a href="https://shorturl.at/dwM25" target='_blank'>Forward We Go</a>
                </span>
                <ul className=" flex flex-wrap items-center mt-3 font-medium text-gray-100 text-lg dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </li>
                </ul>
            </footer>
            <Contact/>
        </>
    );
};

