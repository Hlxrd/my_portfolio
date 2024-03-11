import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Error } from './layouts/Err/Error';
import { AboutSec } from './pages/home/components/AboutSec';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/*' element={<Error/>}/>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutSec />} />

            </Routes>
            <Footer />
        </>
    );
};

export default App;