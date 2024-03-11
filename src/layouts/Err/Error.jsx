import React from 'react';
import ErrorImg from '../../assets/images/LIGO_211d_h.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from '../../pages/home/Home';

export const Error = () => {
    let navigate = useNavigate()
    return (
        <>
            <div className='h-[73vh] bg-slate-700 flex flex-col gap-3 justify-center items-center' style={{ backgroundImage: `url(${ErrorImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-8xl text-slate-200 font-bold' >Oops!</h1>
                <p className='text-xl  text-gray-50 font-bold'>404 - page not found</p>
                <p className='text-xl  text-gray-300 font-bold w-[50%] text-center'>This page you are looking for might have been removed , had it's name replaced or is temporarily unavailable</p>
                
                <button className='outline outline-red-50 text-gray-50 bg-gradient-to-tr from-slate-300 to-gray-500 hover:bg-slate-500 focus:outline-none hover:bg p-3 rounded-full' ><Link to={"/"}>Got to Hamo page</Link> </button>
            </div>
        </>
    );
};
