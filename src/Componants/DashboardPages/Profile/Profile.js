import React from 'react';
import './Profile.css';

import { CgProfile } from "react-icons/cg";



const Profile = () => {
    return (
        <section className='profile'>
            <div>
                <h3 className='main-title'>Porfile</h3>
            </div>
            <div className='text-white ps-5 porfile-sub-container'>
                <CgProfile/>
                <div >
                    <h2>Saimon Pranta</h2>
                    <p><span>Account Status</span>: Active</p>
                    <p><span>Phone/Referral Number</span>: 01551476332</p>
                    <p><span>Upline Referral Number</span>   : 01551476332</p>
                    <p><span>Registration Date</span>   : Sep-10-2014 11:20:37</p>
                    <p><span>Balance</span>: 20tk</p>
                </div>
            </div>
        </section>
    );
};

export default Profile;