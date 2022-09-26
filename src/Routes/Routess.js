import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import MyAccount from '../Componants/DashboardPages/MyAccount/Index';
import Profile from '../Componants/DashboardPages/Profile/index';
import AboutUs from '../Componants/Pages/AboutUs/AboutUs';
import ContactUs from '../Componants/Pages/ContactUs/ContactUs';
import Home from '../Componants/Pages/Home/Home';
import Loogin from '../Componants/Pages/Loogin/Loogin';
// import Registation from '../Componants/Pages/Registation/Registation';
import FakeRegistation from '../Componants/Pages/Registation/FakeRegistation';

import BalanceTransfer from '../Componants/DashboardPages/BalanceTransfer/index';
import Investment from '../Componants/DashboardPages/Investment/index';
import MobileRecharge from '../Componants/DashboardPages/MobileRecharge/index';
import Achievement from '../Componants/DashboardPages/Achievement/Index';
import Withdraw from '../Componants/DashboardPages/Withdraw/Index';
import Generation from '../Componants/DashboardPages/Generation/Index';
import AdminAllUser from '../Componants/AdminPages/AdminAllUser/Index';
import OurAccount from '../Componants/AdminPages/AdminOurAccount/Index';
import AdminInvestmet from '../Componants/AdminPages/AdminInvestment/index';
import AdminMobileRecharge from '../Componants/AdminPages/AdminMobileRecharge/index';
import AdminWithdraw from '../Componants/AdminPages/AdminWithdraw/index';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AdminPrivetRoute from './AdminPrivetRoute/AdminPrivetRoute';
import Messenger from '../Messenger/Messenger';



const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about_us' element={<AboutUs />} />
                <Route path='/contact_us' element={<ContactUs />} />
                <Route path='/register' element={<FakeRegistation />} />
                <Route path='/login' element={<Loogin />} />

                {/* ====================== */}
                <Route path='/dashboard/my_account' element={
                    <PrivetRoute>
                        <MyAccount />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/profile' element={
                    <PrivetRoute>
                        <Profile />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/balance_transfer' element={
                    <PrivetRoute>
                        <BalanceTransfer />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/investment' element={
                    <PrivetRoute>
                        <Investment />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/mobile_recharge' element={
                    <PrivetRoute>
                        <MobileRecharge />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/achievement' element={
                    <PrivetRoute>
                        <Achievement />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/withdraw' element={
                    <PrivetRoute>
                        <Withdraw />
                    </PrivetRoute>
                } />
                <Route path='/dashboard/generation' element={
                    <PrivetRoute>
                        <Generation />
                    </PrivetRoute>
                } />
                <Route path='/messenger' element={
                    <PrivetRoute>
                        <Messenger />
                    </PrivetRoute>
                } />




                {/* ================================ */}
                <Route path='/admin/all_user' element={
                    <AdminPrivetRoute>
                        <AdminAllUser />
                    </AdminPrivetRoute>
                } />
                <Route path='/admin/our_account' element={
                    <AdminPrivetRoute>
                        <OurAccount />
                    </AdminPrivetRoute>
                } />
                <Route path='/admin/investment' element={
                    <AdminPrivetRoute>
                        <AdminInvestmet />
                    </AdminPrivetRoute>
                } />
                <Route path='/admin/mobile_recharge' element={
                    <AdminPrivetRoute>
                        <AdminMobileRecharge />
                    </AdminPrivetRoute>
                } />
                <Route path='/admin/withdraw' element={
                    <AdminPrivetRoute>
                        <AdminWithdraw />
                    </AdminPrivetRoute>
                } />


            </Routes>
        </BrowserRouter>
    );
};

export default Routess;