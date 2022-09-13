import React, { createContext, useContext, useState } from 'react';
import './DashboardNavication.css';
import { NavLink } from 'react-router-dom';

import { FaTh } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
// import { userContext } from '../../../App';


const DashboardNavication = () => {
    // const [user, setUser] = useContext(userContext)
    const [user, setUser] = useState({})

    const handleSubMenu = () => {
        document.getElementById('sub-menu').classList.toggle("active-sub-menu");
    }
    const hanleLogOut = () => {
        document.cookie = "token=";
        setUser({})
    }


    return (
        <section className='dashboard-navication'>
            <ul>
                <li><NavLink to='/dashboard/my_account'><FaQrcode /><span > My Account</span></NavLink></li>
                <li><NavLink to='/dashboard/profile'><FaUserAlt /><span > Profile</span></NavLink></li>
                <li><NavLink to='/dashboard/generation'><FaUsersCog /><span > Generation</span></NavLink></li>
                {
                    user.role === "admin" && <li><NavLink to='/admin_panel'><FaUserCog /><span> Admin Panel </span></NavLink></li>
                }
                <li><NavLink to='/dashboard/balance_transfer'><FaHandshake /><span > Balance transfer</span></NavLink></li>
                <li><NavLink to='/dashboard/investment'><FaMoneyCheckAlt /><span > Investment</span></NavLink></li>
                <li><NavLink to='/dashboard/mobile_recharge'><FaMobileAlt /><span > Mobile Recharge</span></NavLink></li>
                <li><NavLink to='/dashboard/withdraw'><FaDonate /><span> Withdraw </span></NavLink></li>
                <li><NavLink to='/dashboard/rank_achievement'><FaMedal /><span> Rank Achievement </span></NavLink></li>
                <li><NavLink to='/' onClick={hanleLogOut}><BiLogOut /><span > Log Out</span></NavLink></li>
            </ul>
        </section>
    )
}


export default DashboardNavication;