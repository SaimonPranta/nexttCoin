import React from 'react';
import { NavLink } from 'react-router-dom';
import './InvestGroth.css';
import slider_img_1 from '../../../../Assets/Slider_img/shopping-sign-orange-cart-wooden-68498907.jpg';


const InvestGroth = () => {
    return (
        <section className='invest-groth'>
            <div className='container'>
                <div className='row py-5'>
                    <div className='col-7'>
                        <h3>We Make Your</h3>
                        <h2>We Make Your
                            Invest To Grow A
                            Your Money !</h2>

                        <p className='py-4'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it hasfact that a reader will be distracted by the readable content of a page when do is nitin we done your project with new assignmentg
                            Lorem Ipsum is that it hasfact that a reader will be distracted by the readable content of a page when do is nitin we done your project
                        </p>

                        <NavLink to="">Get More</NavLink>
                    </div>
                    <div className='col-5'>
                        <img src={slider_img_1} class="col-4" alt="..." />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default InvestGroth;