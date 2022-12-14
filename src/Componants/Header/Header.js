import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';
import { MdNotifications } from 'react-icons/md';
import { BiMessageDetail } from 'react-icons/bi';
import Notifications from '../Notifications/Notifications';
import { ToastContainer } from 'react-toastify';
import notice from '../../Functions/ResponseModal/notice';


const Header = () => {
    const [user] = useContext(userContext)
    const handleNotification = () => {
        // const notification = document.getElementById('notification');
        // notification.classList.toggle("active_notification")
    }
    let noticeCount = 0

    useEffect(() => {
        if (user?._id && !user?.isActive) {
            noticeCount++
            if (noticeCount === 1) {
                notice()
            }
        }
    }, [])

    return (
        <section className='header'>
            <nav className="navbar navbar-expand-md navbar-light  container-lg px-lg-0 px-1 px-sm-5" id='navbar-light'>
                <div className="container-fluid ">
                    <div className='logo'>
                        <NavLink to="/" className="navbar-brand" href="#">NexttCoin.com</NavLink>
                    </div>
                    <button className="navbar-toggler  ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="mobile-nav-list d-block d-md-none ms-1 " id="NNNnavbarSupportedContent">
                        <ul className=" d-flex ms-auto mb-2 mb-lg-0">
                            {
                                user._id && <>
                                    <li className="nav-item icons mt-1">
                                        <div cldivss="nav-link">
                                            <NavLink to="/messenger">
                                                <BiMessageDetail />
                                            </NavLink>
                                            <a className='notificaton-icon'>
                                                <MdNotifications onClick={handleNotification} />
                                                <Notifications />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item user pt-1">
                                        <NavLink className="nav-link" to='/dashboard/my_account'>
                                            <img src={user?.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : profileImg} alt="" />
                                        </NavLink>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 header-ul">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard/my_account" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about_us" className="nav-link">About Us</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <NavLink to="/contact_us" className="nav-link">Contact Us</NavLink>
                            </li>
                            {
                                !user._id && <>
                                    <li className="nav-item register-login d-flex d-md-none">
                                        <NavLink className="nav-link" to='/register'>Register</NavLink>
                                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                                    </li>
                                </>
                            }
                            {
                                user._id ? <>
                                    <li className="nav-item icons d-none d-md-block">
                                        <div cldivss="nav-link">
                                            <NavLink to="/messenger">
                                                <BiMessageDetail />
                                            </NavLink>
                                            <a className='notificaton-icon'>
                                                <MdNotifications onClick={handleNotification} />
                                                <Notifications />
                                            </a>
                                        </div>
                                    </li>
                                    <li className="nav-item user d-none d-md-block">
                                        <NavLink className="nav-link" to='/dashboard/my_account'>
                                            <img src={user?.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : profileImg} alt="" />
                                        </NavLink>
                                    </li>
                                </> : <>
                                    <li className="nav-item register  d-none d-md-block">
                                        <NavLink className="nav-link" to='/register'>Register</NavLink>
                                    </li>
                                    <li className="nav-item login  d-none d-md-block">
                                        <NavLink className="nav-link" to='/login'>Login</NavLink>
                                    </li>
                                </>
                            }


                            {/* <li className="nav-item">
                                <NavLink to="" className="nav-link">Contact Us</NavLink>
                            </li> */}

                        </ul>
                        {/* <form className="d-flex">
                            
                        </form> */}
                    </div>

                    {/* <div>
                        
                    </div> */}
                </div>
            </nav>
            <ToastContainer />
        </section>
    );
};

export default Header;