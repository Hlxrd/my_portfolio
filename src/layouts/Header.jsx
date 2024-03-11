import React from 'react';
import MyLogo from '../assets/images/1-removebg-preview.png'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import {useRef} from 'react';
export default function App() {
};

export const Header = () => {
    const ref = useRef(null);
    const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})}


    return (
        <>
            <nav className="bg-slate-400 dark:bg-gray-900 w-[99vw] lg:h-[15vh] ">
                <div className="max-w-screen-xl lg:w-[75%]  flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={MyLogo}
                            className="h-24 ml-4"
                            alt="myLogo"
                        />
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="hidden  md:block md:w-auto lg:px-[200px]" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border w-[100%] justify-between  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li onClick={()=>{window.scrollTo({ top: 850, behavior: "smooth" })}}>
                                <a
                                    
                                    className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </>
    );
};

