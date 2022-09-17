
import React, { createContext, useContext, useState } from 'react';
import '../DashboardNavication/DashboardNavication.css';
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
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminLine } from "react-icons/ri";

import { HiUserGroup } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import { ImCalculator } from "react-icons/im";

import { AiOutlineUser } from "react-icons/ai";
import { FaList } from "react-icons/fa";



// import { FaBurn } from "react-icons/fa";
// import { RiCurrencyFill } from "react-icons/ri";
// import { GiBank } from "react-icons/gi";
// import { FaRadiationAlt } from "react-icons/fa";



const AdminDashboardNavication = () => {
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
            <div className='dashboard-navication-title'>
                <h6><FaList /> Admin Panel Menu</h6>
            </div>

            <ul>
                <li><NavLink to='/admin/all_user'><HiUserGroup /><span> All User </span></NavLink></li>

                {/* <li><NavLink to='/dashboard/my_account'>
                    <div className='my-account-icon'>
                        <ImCalculator />
                        <AiOutlineUser />
                    </div>
                    <span > My Account</span></NavLink>
                </li> */}

                <li><NavLink to='/dashboard/my_account'><ImCalculator /><span > My Account</span></NavLink></li>

                <li><NavLink to='/dashboard/profile'><FaUserAlt /><span > Profile</span></NavLink></li>
                <li><NavLink to='/dashboard/generation'><FaUsersCog /><span > Generation</span></NavLink></li>
                {
                    user.role === "admin" && <li><NavLink to='/admin_panel'><RiAdminLine /><span> Admin Panel </span></NavLink></li>
                }

                <li><NavLink to='/dashboard/balance_transfer'><FaHandshake /><span > Balance transfer</span></NavLink></li>
                <li><NavLink to='/dashboard/investment'><FaMoneyCheckAlt /><span > Investment</span></NavLink></li>
                <li><NavLink to='/dashboard/mobile_recharge'><FaMobileAlt /><span > Mobile Recharge</span></NavLink></li>
                <li><NavLink to='/dashboard/withdraw'><FaDonate /><span> Withdraw </span></NavLink></li>
                <li><NavLink to='/dashboard/achievement'><FaMedal /><span>Achievement </span></NavLink></li>

                <li><NavLink to='/' onClick={hanleLogOut}><BiLogOut /><span > Log Out</span></NavLink></li>
            </ul>
        </section>
    )
}


export default AdminDashboardNavication;