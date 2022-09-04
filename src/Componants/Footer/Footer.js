import React from 'react';
import './Footer.css';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImLinkedin2 } from 'react-icons/im';
import { IoLogoGoogleplus } from 'react-icons/io';





const Footer = () => {
    return (
        <section className='footer pt-3 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3 >Contact Us</h3>
                        <div className='text-white d-grid contact'>
                            <span><AiOutlinePhone/> 01881476432</span>
                            <span><HiOutlineMail/> savehyip@example.com</span>
                            <span><TbWorld/> www.example.com</span>
                            <span><GoLocation/> GEC more, Nasirabad, Chittagong, Bangladesh</span>
                        </div>
                    </div>
                    <div className='col-6 ps-5'>
                        <h3>Follow Us</h3>
                        <div className='text-white socila'>
                            <span><FaFacebookF/></span>
                            <span><BsTwitter/></span>
                            <span><ImLinkedin2/></span>
                            <span><IoLogoGoogleplus/></span>
                        </div>
                    </div>
                </div>
                <div className='text-white text-center py-2 copyright'>
                    <span>© Copyright 2021 - {new Date().getFullYear()} | MoneyMine</span>
                </div>
            </div>
        </section>
    );
};

export default Footer;