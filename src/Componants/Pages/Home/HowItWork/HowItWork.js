import React from 'react';
import './HowItWork.css';
import { FaDonate } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { RiBankCardFill } from 'react-icons/ri';



const HowItWork = () => {
    return (
        <section className='how-it-work text-white mb-4 container-lg'>

            <div className='mx-4 sub-how-it-work d-flex p-3 p-md-5 flex-column flex-md-row '>
                <h5>How it works</h5>
                <div>
                    <h6><FaDonate /> Invest</h6>
                    <p className='p-0'>Open real account and add funds. We work with more than 5 payment systems.</p>
                </div>
                <div>
                    <h6><AiOutlineTeam /> Make Team</h6>
                    <p className='p-0'>Make team by adding people with your reference number.</p>
                </div>
                <div>
                    <h6> <RiBankCardFill /> Withdraw</h6>
                    <p className='p-0'>Get funds easily to your mobile banking or e-wallet or number recharge. We take no commission.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;