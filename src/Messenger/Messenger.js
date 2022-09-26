import React from 'react';
import './Messenger.css';
import Header from '../Componants/Header/Header';
import Conversation from './Conversation/Conversation';
import ActiveUser from './Conversation/ActiveUser/ActiveUser';
import MessageBody from './Conversation/MessageBody/MessageBody';

const Messenger = () => {
    return (
        <main className='messenger'>
            <Header />
            <div className='container messenger-container text-white'>
                <div className='corversation'>
                    <Conversation />
                </div>
                <div className='message_container'>
                    <MessageBody />
                </div>
                <div className='active_user'>
                    <ActiveUser />
                </div>
            </div>

        </main>
    );
};

export default Messenger;