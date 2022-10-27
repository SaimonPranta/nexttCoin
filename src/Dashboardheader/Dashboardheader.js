import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../Assets/porofile/user_avatar.jpg';
import { MdNotifications } from 'react-icons/md';
import { userContext } from '../App';
import {FaHome} from 'react-icons/fa';
import {BiMessageDetail} from 'react-icons/bi';
import notice from '../Functions/ResponseModal/notice';
import { ToastContainer } from 'react-toastify';


const Dashboardheader = () => {
    const [user] = useContext(userContext)

    let noticeCount = 0

    useEffect(() => {
        if (user?._id && !user?.isActive) {
            noticeCount ++
            if (noticeCount === 1) {
                notice()
            }
        }
    }, [])


    return (
        <section className='header'>
            <nav className="navbar navbar-expand navbar-light  px-2">
                <div className="container-fluid ">
                    <div className='logo'>
                        <NavLink to="/" className="navbar-brand ps-0" href="#">NexttCoin.com</NavLink>
                    </div>

                    <div className=" navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item icons">
                                <div cldivss="nav-link">
                                    <NavLink to="/">
                                        <FaHome />
                                    </NavLink>
                                </div>
                            </li>
                            {
                                user._id && <>
                                    <li className="nav-item icons">
                                        <div cldivss="nav-link">
                                            <NavLink to="/messenger">
                                                <BiMessageDetail />
                                            </NavLink>
                                            <a>
                                                <MdNotifications />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item user">
                                        <NavLink className="nav-link" to='/dashboard/my_account'>
                                            <img src={user.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : profileImg} alt="profile" />
                                        </NavLink>
                                    </li>
                                </> 
                            }

                        </ul>
                       
                    </div>
                </div>
            </nav>
            <ToastContainer />
        </section>
    );
};


export default Dashboardheader;