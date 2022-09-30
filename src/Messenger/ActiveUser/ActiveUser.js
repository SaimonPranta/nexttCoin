import React from 'react';
import './ActiveUser.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';


const ActiveUser = () => {
        const user = {}


    return (
        <div className='active_user_container'>
            <div className='sub_active_user'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_active_user'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_active_user'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div><div className='sub_active_user'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
        </div>
    );
};

export default ActiveUser;