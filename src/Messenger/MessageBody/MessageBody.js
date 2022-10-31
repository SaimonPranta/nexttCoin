import React from 'react';
import './MessageBody.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';
import { format } from 'timeago.js';

const MessageBody = ({ msg, myID }) => {
   
    return (
        <div className="message_middle_sub" id={msg.senderID === myID ? "me" : "other"}>
            <div className='text'>
                {
                    msg.senderID === myID ? <img src={msg.wonImg ? `${process.env.REACT_APP_SERVER_HOST_URL}/${msg.wonImg}` : profileImg} alt="img" /> :
                    <img src={msg.friendImg ? `${process.env.REACT_APP_SERVER_HOST_URL}/${msg.friendImg}` : profileImg} alt="img" />
                }
                
                <p>{msg.message}</p>
            </div>
            <div className='text_bottom'>
                <p>{format(msg.createdAt)}</p>
            </div>
            
        </div>
    );
};

export default MessageBody;