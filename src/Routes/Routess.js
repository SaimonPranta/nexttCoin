import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import MyAccount from '../Componants/DashboardPages/MyAccount/Index';
import Profile from '../Componants/DashboardPages/Profile/index';
import AboutUs from '../Componants/Pages/AboutUs/AboutUs';
import ContactUs from '../Componants/Pages/ContactUs/ContactUs';
import Home from '../Componants/Pages/Home/Home';
import Loogin from '../Componants/Pages/Loogin/Loogin';
import Registation from '../Componants/Pages/Registation/Registation';
import BalanceTransfer from '../Componants/DashboardPages/BalanceTransfer/index';


const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about_us' element={<AboutUs />} />
                <Route path='/contact_us' element={<ContactUs />} />
                <Route path='/register' element={<Registation />} />
                <Route path='/login' element={<Loogin />} />

                {/* ====================== */}
                <Route path='/dashboard/my_account' element={<MyAccount />} />
                <Route path='/dashboard/profile' element={<Profile />} />
                <Route path='/dashboard/balance_transfer' element={<BalanceTransfer />} />


            </Routes>
        </BrowserRouter>
    );
};

export default Routess;