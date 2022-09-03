import React from 'react';
import { NavLink } from 'react-router-dom';
import './Global.css';

const Global = () => {
    return (
        <section className='global'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <h6>We Were Always Thinking Global Community</h6>
                    </div>
                    <div className='col-6 row text-white global-sub-container ps-5'>
                        <div className='col-6 '>
                            <h6 className='text-white'>Zero Commissions</h6>
                            <span>no hidden charges*</span>
                        </div>
                        <div className='col-6'>
                            <h5 className='pb-3'>Start Invest Now</h5>
                            <NavLink to="">Buy Now !</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Global;