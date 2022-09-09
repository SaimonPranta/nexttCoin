import React from 'react';
import './Services.css';
import { FaRegChartBar } from "react-icons/fa";

const Services = () => {
    return (
        <section className='services py-5'>
            <div className=' d-flex flex-column align-items-center justify-content-center'>
                <div className='text-center'>
                    <h4>SERVICES</h4>
                    <h3>Our Features</h3>
                </div>
                <div className='sub-services-container pt-3 container'>
                    <div className='service-text-1 service-comon'>
                        <div className='service-sub-1'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-1'>
                            <div />
                        </div>
                        <div>
                            <div className='service-1'>
                                <h2>We're Certified</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='service-text-2 service-comon'>
                        <div className='service-sub-2'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-2'>
                            <div />
                        </div>
                        <div>
                            <div className='service-2'>
                                <h2>We're Secure</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='service-text-3 service-comon'>
                        <div className='service-sub-3'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-3'>
                            <div />
                        </div>
                        <div>
                            <div className='service-3'>
                                <h2>We're Profitable</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='service-text-4 service-comon'>
                        <div className='service-sub-4'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-4'>
                            <div />
                        </div>
                        <div>
                            <div className='service-4'>
                                <h2>We're Global</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='service-text-5 service-comon'>
                        <div className='service-sub-5'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-5'>
                            <div />
                        </div>
                        <div>
                            <div className='service-5'>
                                {/* <h2>We Accept Mobile Banking</h2> */}
                                <h2>Mobile Banking</h2>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Ut enim ad minim veniam
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='service-text-6 service-comon'>
                        <div className='service-sub-6'>
                            <FaRegChartBar />
                        </div>
                        <div className='service-circl-6'>
                            <div />
                        </div>
                        <div>
                            <div className='service-6'>
                                <h2>Best Support</h2>
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

export default Services;