
import React, { createContext, useContext, useState } from 'react';
import '../DashboardNavication/DashboardNavication.css';
import { NavLink } from 'react-router-dom';

import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";
import { ImCalculator } from "react-icons/im";

import { FaList } from "react-icons/fa";
import { userContext } from '../../App';
import NavigationCollapsIcon from '../NavigationCollapsIcon/NavigationCollapsIcon';



const AdminDashboardNavication = () => {
    const [setUser] = useContext(userContext)

    const hanleLogOut = () => {
        document.cookie = "token=";
        setTimeout(() => {
            document.cookie = "token=";
        }, 1);
        setUser({})
    }


    return (
        <>
            <section className='dashboard-navication ' id='dashboard-navication'>
                <div className='dashboard-navication-title'>
                    <h6><FaList /> Admin Panel Menu</h6>
                </div>

                <ul>
                    <li><NavLink to='/admin/all_user'><HiUserGroup /><span> All User </span></NavLink></li>
                    <li><NavLink to='/admin/our_account'><ImCalculator /><span > Our Account</span></NavLink></li>

                    <li><NavLink to='/admin/investment'><FaMoneyCheckAlt /><span > Investment</span></NavLink></li>
                    <li><NavLink to='/admin/mobile_recharge'><FaMobileAlt /><span > Mobile Recharge</span></NavLink></li>
                    <li><NavLink to='/admin/withdraw'><FaDonate /><span> Withdraw </span></NavLink></li>
                    <li><NavLink to='/dashboard/my_account'><RiDashboardLine /><span>Dashboard </span></NavLink></li>

                    <li><NavLink to='/' onClick={hanleLogOut}><BiLogOut /><span > Log Out</span></NavLink></li>
                </ul>
            </section>
            <NavigationCollapsIcon />
        </>
    )
}


export default AdminDashboardNavication;