import React from 'react';
import './Profile.css';
import myimg from '../../../Assets/porofile/avatar1.jpg';

import { CgProfile } from "react-icons/cg";



const Profile = () => {
    return (
        <section className='profile'>
            <div>
                <h3 className='main-title'>Porfile</h3>
            </div>
            <div className='text-white porfile-sub-container'>
                <div className='img-conatiner'>
                    <img src={myimg} alt="img" />
                    <div>
                    </div>
                </div>
                <div className='user-name'>
                    <h2>Ryan Adlard</h2>
                    <p>Web developer</p>
                    <div>
                        <p> social Icon</p>
                        <p> social Icon</p>

                        <p> social Icon</p>

                        <p> social Icon</p>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div>
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