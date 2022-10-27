import React from 'react';
import './InvestmentPlan.css';
import { FaRegChartBar } from "react-icons/fa";

const InvestmentPlan = () => {
    return (
        <section className='investment-plan' id='investment-plan'>
            <div className='investment-bg d-flex flex-column align-items-center justify-content-center'>
                <div className='text-center'>
                    <h4>OUR PLANS</h4>
                    <h3 className='mb-5'>Our Investment Plans</h3>
                </div>
                <div className='sub-investment-plan container'>
                    <div className='plan-text-1'>
                        <div className='plan-sub-1'>
                            <FaRegChartBar />
                        </div>
                        <div className='plan-circl-1'>
                            <div />
                        </div>
                        <div>
                            <div className='plan-1'>
                                <h2>Silver Plan</h2>
                                <div>
                                    <p>
                                        Up to 5% for 20 Hourly <br />
                                        Compound Available <br />
                                        Down to 5% for 20 Hourly<br />
                                        Principal Return <br />
                                        Up to 5% for 20 Hourly <br />
                                    </p>
                                </div>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='plan-text-2'>
                        <div className='plan-sub-2'>
                            <FaRegChartBar />
                        </div>
                        <div className='plan-circl-2'>
                            <div />
                        </div>
                        <div>
                            <div className='plan-2'>
                                <h2>Silver Plan</h2>
                                <div>
                                    <p>
                                        Up to 5% for 20 Hourly <br />
                                        Compound Available <br />
                                        Down to 5% for 20 Hourly<br />
                                        Principal Return <br />
                                        Up to 5% for 20 Hourly <br />
                                    </p>
                                </div>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='plan-text-3'>
                        <div className='plan-sub-3'>
                            <FaRegChartBar />
                        </div>
                        <div className='plan-circl-3'>
                            <div />
                        </div>
                        <div>
                            <div className='plan-3'>
                                <h2>Silver Plan</h2>
                                <div>
                                    <p>
                                        Up to 5% for 20 Hourly <br />
                                        Compound Available <br />
                                        Down to 5% for 20 Hourly<br />
                                        Principal Return <br />
                                        Up to 5% for 20 Hourly <br />
                                    </p>
                                </div>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='plan-text-4'>
                        <div className='plan-sub-4'>
                            <FaRegChartBar />
                        </div>
                        <div className='plan-circl-4'>
                            <div />
                        </div>
                        <div>
                            <div className='plan-4'>
                                <h2>Silver Plan</h2>
                                <div>
                                    <p>
                                        Up to 5% for 20 Hourly <br />
                                        Compound Available <br />
                                        Down to 5% for 20 Hourly<br />
                                        Principal Return <br />
                                        Up to 5% for 20 Hourly <br />
                                    </p>
                                </div>
                                {/* <button>Read More</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentPlan;