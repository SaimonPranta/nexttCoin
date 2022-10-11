import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import myimg from '../../../Assets/porofile/user_avatar.jpg';

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { userContext } from '../../../App';
import camera from "../../../Assets/icons/camera.png";
import editIcon from "../../../Assets/icons/edit (2).png";
import ImageUploadModal from './ImageUploadModal';
import UserUpdateModal from './UserUpdateModal';
import ResetPasswordModal from './ResetPasswordModal';



const Profile = () => {
    const [user, setUser] = useContext(userContext)
    const [count, setCount] = useState({
        approveInvestment: 0,
        approveWithdraw: 0,
    })

    let totalUser = user?._id && user.generation_1.length + user.generation_2.length + user.generation_3.length + user.generation_4.length + user.generation_5.length + user.generation_6.length + user.generation_7.length + user.generation_8.length + user.generation_9.length + user.generation_10.length


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

    const active_image_upload_modal = () => {
        const image_upload_modal = document.getElementById("image_upload_modal")
        image_upload_modal.classList.toggle('active_image_upload_modal')
    }
    const handle_update_porfile_modal = () => {
        const user_update_modal = document.getElementById("user_update_modal")


        user_update_modal.classList.toggle('active_user_update_modal')
    }
    window.onclick = (e) => {
        // this is for Porfile info Uplad Modal

        const porfile_menu = document.getElementById("porfile_menu")
        const user_update_modal = document.getElementById("user_update_modal")
        if (e.target !== porfile_menu && e.target !== porfile_menu.childNodes[0] && e.target !== user_update_modal.childNodes[0] && e.target !== user_update_modal.childNodes[0].childNodes[0] && e.target !== user_update_modal.childNodes[0].childNodes[2] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[0] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[1] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[2] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[3] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[4] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[4] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[5] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[6] && e.target !== user_update_modal.childNodes[0].childNodes[2].childNodes[7]) {
            user_update_modal.classList.remove("active_user_update_modal")
        }

        // this is for Porfile Image Uplad Modal

        const image_upload_modal = document.getElementById("image_upload_modal")
        const camera_icon = document.getElementById("camera_icon")
        if (e.target !== camera_icon && e.target !== image_upload_modal.childNodes[0] && e.target !== image_upload_modal.childNodes[0].childNodes[1] && e.target !== image_upload_modal.childNodes[0].childNodes[2]) {
            image_upload_modal.classList.remove("active_image_upload_modal")
        }

        // this is for Reset Password Modal

        const reset_password_modal = document.getElementById("reset_password_modal")
        if (e.target !== porfile_menu && e.target !== porfile_menu.childNodes[1] && e.target !== reset_password_modal.childNodes[0] && e.target !== reset_password_modal.childNodes[0].childNodes[0] && e.target !== reset_password_modal.childNodes[0].childNodes[2] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[0] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[1] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[2] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[3] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[4] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[4] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[5] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[6] && e.target !== reset_password_modal.childNodes[0].childNodes[2].childNodes[7]) {
            reset_password_modal.classList.remove("active_reset_password_modal")
        }
    }
    const hangleEditMenu = () => {
        const porfile_menu = document.getElementById("porfile_menu")


        porfile_menu.classList.toggle('active_porfile_menu')
    }
    const handle_reset_password_modal = () => {
        const reset_password_modal = document.getElementById("reset_password_modal")

        reset_password_modal.classList.toggle('active_reset_password_modal')
    }


    return (
        <section className='profile'>
            <div className='d-flex align-items-center'>
                <h3 className='main-title'>Porfile</h3>
                <div className='edit_icon d-flex align-items-center justify-content-center ms-4 mb-lg-4 mb-5 text-white' id='edit_icon' onClick={hangleEditMenu}>
                    <img src={editIcon} alt="edit" />
                    <p className='pt-3'>Edit</p>
                    <div className='porfile_menu' id="porfile_menu">
                        <p onClick={handle_update_porfile_modal} >Edit Profile</p>
                        <p onClick={handle_reset_password_modal}>Reset Password</p>
                    </div>
                </div>
            </div>
            <div className='text-white porfile-sub-container'>
                <div className='porfile-common-section '>
                    <div className='img-conatiner'>
                        <img src={user.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : myimg} alt="img" />
                        <img src={camera} alt="img" className='camera_icon' id='camera_icon' onClick={active_image_upload_modal} />
                    </div>
                    <div className='user-name'>
                        <h2>{user.firstName && user.firstName} {user.lastName && user.lastName}</h2>
                        <p>{
                            user.isActive ? "Active User" : "Unactive User"
                        }</p>
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
                        <p>{user?.bio.length > 50 ? user.bio : `Hello, I'm ${user.firstName + " " + user.lastName}. I'm an investor in this company. I'm here to become a sucessfull persone and make my career.`}</p>

                        <h4>Profile Details </h4>

                        <p><span>Full Name</span>: <strong>{user.firstName && user.firstName} {user.lastName && user.lastName}</strong></p>
                        <p><span>Account Status</span>: {user.isActive ? "Active" : "Unactive"}</p>
                        <p><span>Referral/Phone Number</span>   : {user.phoneNumber && user.phoneNumber}</p>
                        <p><span>Upline Referral Number</span>   : {user.referNumber && user.referNumber}</p>
                        <p><span>Total Member</span>   : {totalUser} person</p>
                        <p><span>Rank</span>   : {user.rank && user.rank}</p>
                        <p><span>Registration Date</span>   : {user.joinDate && user.joinDate}</p>
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
            <>
                {
                    user._id && <ImageUploadModal userID={user._id} setUser={setUser} />
                }
            </>
            <>
                {
                    user._id && <UserUpdateModal user={user} setUser={setUser} />
                }
            </>
            <>
                {
                    user._id && <ResetPasswordModal userID={user._id} />
                }
            </>

        </section>
    );
};

export default Profile;

{/* <>
{
    user._id && <ImageUploadModal userID={user._id} setUser={setUser} />
}
{
    user._id && <UserUpdateModal user={user} setUser={setUser} />
}
{
    user._id && <ResetPasswordModal userID={user._id} />
}
</> */}