import React from 'react';
import './Conversation.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';


const Conversation = () => {
    const user = {}
    return (
        <div className='coversetion_container'>
            <div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div><div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
            <div className='sub_coversetion'>
                <img src={user.profilePicture ? user.profilePicture : profileImg} alt="_image" />
                <h6>Saimon Pranta</h6>
            </div>
        </div>
    );
};

export default Conversation;