import React from 'react';
import './Features.css';
import { FaRegChartBar } from "react-icons/fa";


const Features = () => {
    return (
        <section className='features py-5'>
            <div className=' d-flex flex-column align-items-center justify-content-center'>
                <div className='text-center'>
                    <h4>FEATURES</h4>
                    <h3>Our Features</h3>
                </div>
                <div className='sub-features-container pt-3 container-lg  '>
                    <div className='feature-text-1 feature-comon'>
                        <div className='feature-sub-1'>
                            <FaRegChartBar />
                        </div>
                        <div className='feature-circl-1'>
                            <div />
                        </div>
                        <div>
                            <div className='feature-1'>
                                <h2>Our Mission</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature-text-2 feature-comon'>
                        <div className='feature-sub-2'>
                            <FaRegChartBar />
                        </div>
                        <div className='feature-circl-2'>
                            <div />
                        </div>
                        <div>
                            <div className='feature-2'>
                                <h2>Our Vision</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feature-text-3 feature-comon'>
                        <div className='feature-sub-3'>
                            <FaRegChartBar />
                        </div>
                        <div className='feature-circl-3'>
                            <div />
                        </div>
                        <div>
                            <div className='feature-3'>
                                <h2>Our Value</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;