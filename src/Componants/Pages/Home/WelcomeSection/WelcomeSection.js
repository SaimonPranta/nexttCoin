import React from 'react';
import './WelcomeSection.css';
import { NavLink } from 'react-router-dom';
import mainImg from '../../../../Assets/Welcome_section/about_img.jpg';
import { TbCheckbox } from "react-icons/tb";

const WelcomeSection = () => {
    return (
        <section className='container'>
            <div className='container text-white row m-auto py-2 px-5 welcome-section '>
                <div className='col-6'>
                    <img src={mainImg} alt="_image" />
                </div>
                <div className='col-6'>
                    <h4>WHO WE ARE</h4>
                    <h3>Welcome To SaveHyip</h3>
                    <p>Put your investing ideas into action with full range of investments. Enjoy real benefits and rewards on your accrue investing.</p>
                    <NavLink to='/about_us'><TbCheckbox/> We Innovate</NavLink>
                    <NavLink to='/about_us'><TbCheckbox/> Licenced & Certified</NavLink>
                    <NavLink to='/about_us'><TbCheckbox/> Saving & Investments</NavLink>
                    <NavLink to='/about_us' className='btn-conteroler'>Get More</NavLink>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;