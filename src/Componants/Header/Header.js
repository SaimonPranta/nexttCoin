import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <nav class="navbar navbar-expand-lg navbar-light container">
                <div class="container-fluid ">
                    <div className='logo'>
                        <NavLink to="/" class="navbar-brand" href="#">MoneyMine.com</NavLink>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <NavLink to="/" class="nav-link active" aria-current="page">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/about_us" class="nav-link">About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contact_us" class="nav-link">Contact Us</NavLink>
                            </li>
                            <li class="nav-item register">
                                <NavLink to="" class="nav-link" to='/register'>Register</NavLink>
                            </li>
                            <li class="nav-item login">
                                <NavLink to="" class="nav-link" to='/login'>Login</NavLink>
                            </li>
                            {/* <li class="nav-item">
                                <NavLink to="" class="nav-link">Contact Us</NavLink>
                            </li> */}

                        </ul>
                        {/* <form class="d-flex">
                            
                        </form> */}
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;