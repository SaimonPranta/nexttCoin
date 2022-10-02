import React, { useState } from 'react';
import './MessageBody.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';
import { format } from 'timeago.js';
// import {FaSmile } from 'react-icons-fa';

const MessageBody = ({ msg, myID }) => {
    return (
        <div className="message_middle_sub" id={msg.senderID === myID ? "me" : "other"}>
            <div className='text'>
                <img src={msg.profilePicture ? msg.profilePicture : profileImg} alt="pic" />
                <p>{msg.message}</p>
            </div>
            <div className='text_bottom'>
                <p>{format(msg.createdAt)}</p>
            </div>
            
        </div>
    );
};

export default MessageBody;