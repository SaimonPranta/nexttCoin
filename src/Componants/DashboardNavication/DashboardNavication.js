import React, { useContext } from 'react';
import './DashboardNavication.css';
import { NavLink } from 'react-router-dom';

import { FaList } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

import { FaMedal } from "react-icons/fa";
import { ImCalculator } from "react-icons/im";
import { userContext } from '../../App';
import NavigationCollapsIcon from '../NavigationCollapsIcon/NavigationCollapsIcon';





const DashboardNavication = () => {
    const [user, setUser] = useContext(userContext)

    const hanleLogOut = () => {
        // document.cookie = "token=";
        // setTimeout(() => {
        //     document.cookie = "token=";
        // }, 1);
        document.cookie = `token = ${false}; ${Date.now}; path=/`;
        setUser({})
    }


    return (
        <>
            <section className='dashboard-navication dashboardNavigation' id='dashboard-navication'>
                <NavLink to="/" className='dashboard-logo'>NexttCoin.com</NavLink>

                <div className='dashboard-navication-title'>
                    <h6><FaList /> Dashboard Menu</h6>
                </div>

                <ul>
                    <li><NavLink to='/dashboard/my_account'><ImCalculator /><span > My Account</span></NavLink></li>


                    <li><NavLink to='/dashboard/profile'><FaUserAlt /><span > Profile</span></NavLink></li>
                    <li><NavLink to='/dashboard/generation'><FaUsersCog /><span > Generation</span></NavLink></li>

                    <li><NavLink to='/dashboard/balance_transfer'><FaHandshake /><span > Balance transfer</span></NavLink></li>
                    <li><NavLink to='/dashboard/investment'><FaMoneyCheckAlt /><span > Investment</span></NavLink></li>
                    <li><NavLink to='/dashboard/mobile_recharge'><FaMobileAlt /><span > Mobile Recharge</span></NavLink></li>
                    <li><NavLink to='/dashboard/withdraw'><FaDonate /><span> Withdraw </span></NavLink></li>
                    <li><NavLink to='/dashboard/achievement'><FaMedal /><span> Achievement </span></NavLink></li>
                    {

                        user?.role === "admin" && <li><NavLink to='/admin/all_user'><RiAdminLine /><span> Admin Panel </span></NavLink></li>
                    }
                    {

                        user?.visitorInfo?._id && <li><a onClick={() => {setUser(user.visitorInfo)}}><RiAdminLine /><span> Back To Account </span></a></li>
                    }
                    <li><NavLink to='/' onClick={hanleLogOut}><BiLogOut /><span > Log Out</span></NavLink></li>
                </ul>
            </section>
            <NavigationCollapsIcon />
        </>
    )
}


export default DashboardNavication;