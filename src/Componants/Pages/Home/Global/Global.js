import React from 'react';
import { NavLink } from 'react-router-dom';
import './Global.css';

const Global = () => {
    return (
        <section className='global'>
            <div className='container py-5'>
                <div className='row m-auto'>
                    <div className='col-md-6 col-12 mb-md-0 mb-3 '>
                        <h6>We Were Always Thinking Global Community</h6>
                    </div>
                    <div className='col-md-6 col-12 row text-white global-sub-container ps-xl-5 mt-sm-0 mt-4'>
                        <div className='col-sm-6 col-12 '>
                            <h6 className='text-white pt-md-0 pt-3'>Zero Commissions</h6>
                            <span>no hidden charges*</span>
                        </div>
                        <div className='col-12 col-sm-6 '>
                            <h5 className='pb-3 ms-md-0 ms-sm-5 pt-md-0 pt-3'>Start Invest Now</h5>
                            <NavLink to="/dashboard/investment" className='ms-md-0 ms-sm-5 '>Buy Now !</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Global;