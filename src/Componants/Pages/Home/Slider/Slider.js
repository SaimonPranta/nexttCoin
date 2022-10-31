import React from 'react';
import './Slider.css';
import slider_img_1 from '../../../../Assets/Slider_img/investmentImg2.jpg';
import slider_img_2 from '../../../../Assets/Slider_img/investmentImg1.jpg';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import BackgroundThems from '../../../BackgroundThems/BackgroundThems';


const Slider = () => {

    const scrollTO = () => {
        const investmentPlan = document.getElementById("investment-plan");
        investmentPlan && investmentPlan.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }


    return (
        <div className='slider mt-5 mt-sm-3'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div >
                            <div className="d-flex text-white container-xl">
                                <div className="ms-3 ms-sm-5 col-sm-6 col-12 d-flex flex-column  justify-content-center slider-items">
                                    <h2 className='pb-2'>OFTEN HAVE SMALL</h2>
                                    <h3 className='pb-lg-4 '>Invest Your Money For Future</h3>
                                    <div className='pb-5'>
                                        <NavLink to="/dashboard/investment" className='mb-2'> Start Now</NavLink>
                                        <button onClick={scrollTO}> View Plans</button>
                                    </div>
                                </div>
                                <img src={slider_img_1} className="col-sm-4 col-0" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div >
                            <div className="d-flex text-white container-xl">
                                <div className="ms-3 ms-sm-5 col-sm-6 col-12 d-flex flex-column  justify-content-center slider-items">
                                    <h2 className='pb-2'>OFTEN HAVE SMALL</h2>
                                    <h3 className='pb-lg-4 '>Invest Your Money For Future</h3>
                                    <div className='pb-5'>
                                        <NavLink to="/dashboard/investment" className='mb-2'> Start Now</NavLink>
                                        <button onClick={scrollTO}> View Plans</button>
                                    </div>
                                </div>
                                <img src={slider_img_2} className="col-sm-4 col-0" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev slide-handler me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"><AiOutlineArrowLeft /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next slide-handler ms-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"><AiOutlineArrowLeft /></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <BackgroundThems />

        </div>
    );
};

export default Slider;