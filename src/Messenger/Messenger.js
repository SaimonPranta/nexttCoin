import React, { useRef, useState } from 'react';
import './Messenger.css';
import io from 'socket.io-client';
import Header from '../Componants/Header/Header';
import Conversation from './Conversation/Conversation';
import ActiveUser from './Conversation/ActiveUser/ActiveUser';
import MessageBody from './Conversation/MessageBody/MessageBody';
import { useContext } from 'react';
import { userContext } from '../App';
import { useEffect } from 'react';
import { MdSend } from 'react-icons/md';
import profileImg from '../Assets/porofile/user_avatar.jpg';

const socket = io.connect("http://localhost:8900")




const Messenger = () => {
    const [user] = useContext(userContext)
    const [conversation, setConversation] = useState(null)
    const [currentConversation, setCurrentConversation] = useState(false)
    const [message, setMessage] = useState([])
    const [socketMessage, setSocketMessage] = useState(false)
    const [friend, setFriend] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [input, setInput] = useState("")
    const scrollRef = useRef()


    const cooki = document.cookie.split("=")[1];

    useEffect(() => {
        socket.emit("addUser", user?._id)
        // socket.on("get_message", (users) => {
        //     setSocketMessage(users)
        // })
    }, [user])
    useEffect(() => {
        socket.on("get_message", (users) => {
            console.log("users", users)
            setSocketMessage(users)
        })
    }, [])
    useEffect(() => {
        if (currentConversation && socketMessage && currentConversation._id === socketMessage.conversationID) {
            setMessage([...message, socketMessage])
        }
    }, [socketMessage])

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
        if (currentConversation) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/message_provider/${currentConversation._id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setMessage(data.data);
                    }
                })
        }
    }, [currentConversation])



    const handleSubmitMessage = async () => {
        if (input !== "" && currentConversation && user._id) {

            const messageInfo = await {
                conversetionID: currentConversation._id,
                senderID: user._id,
                message: input
            }

            const receverID = await currentConversation.members.find(member => member !== user._id)


            await socket.emit("send_message", {
                receverID,
                senderID: user._id,
                message: input,
                conversationID: currentConversation._id
            })


            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/create_message`, {
                method: "POST",
                body: JSON.stringify(messageInfo),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setMessage([...message, data.data]);
                        setInput("")
                    }
                })
        }
    }
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    useEffect(() => {
        if (currentConversation && currentConversation._id) {
            const friend = currentConversation.members.find(currUser => currUser !== user)
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user_porvider/${friend}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setFriend(data.data);
                    }
                })
        }
    }, [currentConversation])




    return (
        <main className='messenger'>
            <Header />
            <div className='container messenger-container text-white'>
                <div className='corversation'>
                    <div className='coversetion_container'>
                        {
                            conversation && conversation.length > 0 && conversation.map(con => {
                                return <div onClick={() => setCurrentConversation(con)}>
                                    <Conversation convar={con} user={user?._id} />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='message_container'>
                    <div className='message_body'>
                        <div className='message_top' >
                            <img src={friend?.profilePicture ? friend.profilePicture : profileImg} alt="_image" />
                            <div>
                                <h5>{friend?.firstName ? friend.firstName + " " + friend.lastName : "Live Chat"}</h5>
                            </div>
                        </div>
                        <div className='message_middle'>
                            {
                                message && message.length > 0 && message.map(m => {
                                    return <div ref={scrollRef}><MessageBody msg={m} myID={user._id} /></div>
                                })
                            }
                        </div>
                        <div className='message_bottom'>
                            <textarea name="message" placeholder='type your message...' value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                            <MdSend onClick={handleSubmitMessage} />
                        </div>
                    </div>
                </div>
                <div className='active_user'>
                    <ActiveUser />
                </div>
            </div>

        </main>
    );
};

export default Messenger;