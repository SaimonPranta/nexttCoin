import React from 'react';
import './EmptyConverSation.css';
import emptyChatImg from '../../../Assets/emptyChatApp.png';


const EmptyConverSation = () => {
    return (
        <div className='empty_conversation'>
            <img src={emptyChatImg} alt="_image" />
            <h6>Welcome <span>MoneyNine</span> Chat</h6>
            <p>Please select a chat to Start Mesaage.</p>
        </div>
    );
};

export default EmptyConverSation;