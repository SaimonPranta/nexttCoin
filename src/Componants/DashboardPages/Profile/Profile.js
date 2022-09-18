import React from 'react';
import './Profile.css';
import myimg from '../../../Assets/porofile/avatar1.jpg';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



const Profile = () => {
    return (
        <section className='profile'>
            <div>
                <h3 className='main-title'>Porfile</h3>
            </div>
            <div className='text-white porfile-sub-container'>
                <div className='porfile-common-section '>
                    <div className='img-conatiner'>
                        <img src={myimg} alt="img" />
                    </div>
                    <div className='user-name'>
                        <h2>Saimon Pranta</h2>
                        <p>Web developer</p>
                        <div>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><AiFillInstagram /></a>
                            <a href=""><FaSnapchatGhost /></a>
                            <a href=""><IoLogoWhatsapp /></a>
                        </div>
                    </div>
                </div>
                <div className='text-white porfile-common-section p-4'>
                    <div className='about'>
                        <h4>About Me</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, necessitatibus quia? Tempora, delectus velit? Non.</p>

                        <h4>Profile Details </h4>

                        <p><span>Full Name</span>: <strong>Saimon Pranta</strong></p>
                        <p><span>Account Status</span>: Active</p>
                        <p><span>Referral/Phone Number</span>   : 01551476332</p>
                        <p><span>Upline Referral Number</span>   : 01551476332</p>
                        <p><span>Total Member</span>   : 204 person</p>
                        <p><span>Registration Date</span>   : Sep-10-2014 11:20:37</p>
                    </div>
                </div>
                <div className='text-white porfile-common-section p-4'>
                    <div className='balance'>
                        <h4>Balance</h4>
                        <div className='sub-balance'>
                            <div>
                                <span>38tk</span>
                                <p>Balance</p>
                            </div>
                            <div>
                                <span>38tk</span>
                                <p>Deposits</p>
                            </div>
                            <div>
                                <span>38tk</span>
                                <p>Incomes</p>
                            </div>
                            <div>
                                <span>38tk</span>
                                <p>Withdraws</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div>

            </div>
            {/* <div>
                <div >
                    <h2>Saimon Pranta</h2>
                    <p><span>Account Status</span>: Active</p>
                    <p><span>Phone/Referral Number</span>: 01551476332</p>
                    <p><span>Upline Referral Number</span>   : 01551476332</p>
                    <p><span>Registration Date</span>   : Sep-10-2014 11:20:37</p>
                    <p><span>Balance</span>: 20tk</p>
                </div>
            </div> */}
        </section>
    );
};

export default Profile;