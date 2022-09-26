import React, { useState } from 'react';
import './Messenger.css';
import Header from '../Componants/Header/Header';
import Conversation from './Conversation/Conversation';
import ActiveUser from './Conversation/ActiveUser/ActiveUser';
import MessageBody from './Conversation/MessageBody/MessageBody';
import { useContext } from 'react';
import { userContext } from '../App';
import { useEffect } from 'react';

const Messenger = () => {
    const [user] = useContext(userContext)
    const [conversation, setConversation] = useState(null)


    const cooki = document.cookie.split("=")[1];


    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/conversation_porvider/${user._id}`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${cooki}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.data) {
                    setConversation(data.data);
                }
            })
    }, [])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/conversation_porvider/`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${cooki}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.data) {
                    setConversation(data.data);
                }
            })
    }, [])



    return (
        <main className='messenger'>
            <Header />
            <div className='container messenger-container text-white'>
                <div className='corversation'>
                    <div className='coversetion_container'>
                        {
                            conversation && conversation.length > 0 && conversation.map(con => {
                                return <Conversation convar={con} user={user?._id}/>
                            })
                        }
                    </div>
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