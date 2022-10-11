import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../Assets/porofile/user_avatar.jpg';
import { MdNotifications } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { userContext } from '../App';
import {FaHome} from 'react-icons/fa';

const Dashboardheader = () => {
    const [user] = useContext(userContext)


    return (
        <section className='header'>
            <nav class="navbar navbar-expand navbar-light  px-2">
                <div class="container-fluid ">
                    <div className='logo'>
                        <NavLink to="/" class="navbar-brand ps-0" href="#">MoneyMine.com</NavLink>
                    </div>

                    <div class=" navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item icons">
                                <div cldivss="nav-link">
                                    <NavLink to="/">
                                        <FaHome />
                                    </NavLink>
                                </div>
                            </li>
                            {
                                user._id ? <>
                                    <li class="nav-item icons">
                                        <div cldivss="nav-link">
                                            <NavLink to="/messenger">
                                                <AiFillMessage />
                                            </NavLink>
                                            <a>
                                                <MdNotifications />
                                            </a>
                                        </div>
                                    </li>
                                    <li class="nav-item user">
                                        <NavLink class="nav-link" to='/dashboard/my_account'>
                                            <img src={user.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : profileImg} alt="profile" />
                                        </NavLink>
                                    </li>
                                </> : <>
                                    <li class="nav-item register">
                                        <NavLink class="nav-link" to='/register'>Register</NavLink>
                                    </li>
                                    <li class="nav-item login">
                                        <NavLink class="nav-link" to='/login'>Login</NavLink>
                                    </li>
                                </>
                            }


                            {/* <li class="nav-item">
                                <NavLink to="" class="nav-link">Contact Us</NavLink>
                            </li> */}

                        </ul>
                        {/* <form class="d-flex">
                            
                        </form> */}
                    </div>
                    {/* <div>
                        
                    </div> */}
                </div>
            </nav>
        </section>
    );
};


export default Dashboardheader;