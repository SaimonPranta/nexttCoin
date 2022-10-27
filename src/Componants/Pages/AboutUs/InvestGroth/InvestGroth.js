import React from 'react';
import { NavLink } from 'react-router-dom';
import './InvestGroth.css';
import slider_img_1 from '../../../../Assets/Slider_img/investmentImg2.jpg';


const InvestGroth = () => {
    return (
        <section className='invest-groth'>
            <div className='container-lg ps-lg-0 ps-5 '>
                <div className='row py-5'>
                    <div className='col-md-7 col-12'>
                        <h3>We Make Your</h3>
                        <h2>We Make Your
                            Invest To Grow A
                            Your Money !</h2>
                        <p className='py-4'>
                            It is a long established fact that "Industry is the key to success". If you work hard and made a strong team base we ensure your Investmet growth. We doesn't belive in interest because it's totaly Haram in Islam. So, If you are interested our earning mehtods yor are welcome to invest.
                        </p>
                        <NavLink to="/dashboard/investment">Invest Now</NavLink>
                    </div>
                    <div className='col-md-5 d-md-flex d-none'>
                        <img src={slider_img_1} className="col-4" alt="..." />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default InvestGroth;