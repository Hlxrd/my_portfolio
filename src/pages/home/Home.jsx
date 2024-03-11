import React from 'react';
import { HeroSec } from './components/HeroSec';
import { AboutSec } from './components/AboutSec';
import { MyProjects } from './components/MyProjects';
import { Contact } from './components/Contact';

export const Home = () => {


    
    return (
        <div className='bg-gradient-to-r from-gray-500 to-gray-600 flex flex-col justify-center gap-4 items-center'>
            <HeroSec/>
            <AboutSec/>
            <MyProjects/>
        </div>
    );
};

