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
import Investment from '../Componants/DashboardPages/Investment/index';
import MobileRecharge from '../Componants/DashboardPages/MobileRecharge/index';
import Achievement from '../Componants/DashboardPages/Achievement/Index';
import Withdraw from '../Componants/DashboardPages/Withdraw/Index';
import Generation from '../Componants/DashboardPages/Generation/Index';
import Admin from '../Componants/DashboardPages/Admin/Index';


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
                <Route path='/dashboard/investment' element={<Investment />} />
                <Route path='/dashboard/mobile_recharge' element={<MobileRecharge />} />
                <Route path='/dashboard/achievement' element={<Achievement />} />
                <Route path='/dashboard/withdraw' element={<Withdraw />} />
                <Route path='/dashboard/generation' element={<Generation />} />



                {/* ================================ */}
                <Route path='admin_panel' element={<Admin />} />


            </Routes>
        </BrowserRouter>
    );
};

export default Routess;