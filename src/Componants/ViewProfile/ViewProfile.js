import React, { useEffect, useState } from 'react';
import myimg from '../../Assets/porofile/user_avatar.jpg';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';


const ViewProfile = () => {

    const [user, setUser] = useState({})

    const [count, setCount] = useState({
        approveInvestment: 0,
        approveWithdraw: 0,
    })
    const { id } = useParams()

    let totalUser = user?._id && user.generation_1.length + user.generation_2.length + user.generation_3.length + user.generation_4.length + user.generation_5.length + user.generation_6.length + user.generation_7.length + user.generation_8.length + user.generation_9.length + user.generation_10.length

    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
    useEffect(() => {
        if (cooki) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/view_profile/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    data.password = null
                    setUser(data);
                })
        }
    }, []);

    useEffect(() => {
        if (user?._id) {

            let approveInvestment = 0
            let approveWithdraw = 0

            user.investment.map(req => {
                const currentCount = { ...count }
                if (req.apporoval) {
                    approveInvestment = approveInvestment + req.amount
                    currentCount['approveInvestment'] = approveInvestment
                    setCount(currentCount)
                }
            })

            user.withdrawInfo.map(req => {
                const currentCount = { ...count }
                if (req.apporoval) {
                    approveWithdraw = approveWithdraw + req.amount
                    currentCount['approveWithdraw'] = approveWithdraw
                    setCount(currentCount)
                }
            })


        }
    }, [])



    return (
        <section className='profile'>
            <div className='d-flex align-items-center'>
                <h3 className='main-title'>Porfile</h3>
            </div>
            <div className='text-white porfile-sub-container'>
                <div className='porfile-common-section '>
                    <div className='img-conatiner'>
                        <img src={user?.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : myimg} alt="" />
                    </div>
                    <div className='user-name'>
                        <h2>{user?.firstName && user.firstName} {user?.lastName && user.lastName}</h2>
                        <p>{
                            user.isActive ? "Active User" : "Unactive User"
                        }</p>
                         <Link to={"/messenger/" + id} className='message'><TiMessages/> Message</Link>
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
                        <p>{user?.bio && user.bio.length > 50 ? user.bio : `Hello, I'm ${user.firstName + " " + user.lastName}. I'm an investor in this company. I'm here to become a sucessfull persone and make my career.`}</p>

                        <h4>Profile Details </h4>

                        <p><span>Full Name</span>: <strong>{user?.firstName && user.firstName} {user?.lastName && user.lastName}</strong></p>
                        <p><span>Account Status</span>: {user.isActive ? "Active" : "Unactive"}</p>
                        <p><span>Referral/Phone Number</span>   : {user?.phoneNumber && user.phoneNumber}</p>
                        <p><span>Upline Referral Number</span>   : {user?.referNumber && user.referNumber}</p>
                        <p><span>Total Member</span>   : {totalUser} person</p>
                        <p><span>Rank</span>   : {user?.rank && user.rank}</p>
                        <p><span>Registration Date</span>   : {user?.joinDate && user.joinDate}</p>
                    </div>
                </div>
                <div className='text-white porfile-common-section balance-container p-4'>
                    <div className='balance'>
                        <h4>Balance</h4>
                        <div className='sub-balance'>
                            <div>
                                <span>{user?.balance ? user.balance : 0}tk</span>
                                <p>Balance</p>
                            </div>
                            <div>
                                <span>{count?.approveInvestment ? count.approveInvestment : 0}tk</span>
                                <p>Investment</p>
                            </div>
                            <div>
                                <span>{user?.totalIncome ? user.totalIncome : 0}tk</span>
                                <p>Incomes</p>
                            </div>
                            <div>
                                <span>{user?.approveWithdraw ? user.approveWithdraw : 0}tk</span>
                                <p>Withdraws</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    );
};

export default ViewProfile;