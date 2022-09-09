import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from '../Componants/Pages/AboutUs/AboutUs';
import ContactUs from '../Componants/Pages/ContactUs/ContactUs';
import Home from '../Componants/Pages/Home/Home';

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about_us' element={<AboutUs />} />
                <Route path='/contact_us' element={<ContactUs />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Routess;