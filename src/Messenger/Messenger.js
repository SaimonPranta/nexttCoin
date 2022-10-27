import React, { useRef, useState } from 'react';
import './Messenger.css';
import io from 'socket.io-client';
import Header from '../Componants/Header/Header';
import Conversation from './Conversation/Conversation';
import MessageBody from './MessageBody/MessageBody';
import { useContext } from 'react';
import { userContext } from '../App';
import { useEffect } from 'react';
import { MdSend } from 'react-icons/md';
import profileImg from '../Assets/porofile/user_avatar.jpg';
import EmptyConverSation from './MessageBody/EmptyConverSation/EmptyConverSation';
import Imoji from './MessageBody/Imoji/Imoji';
import { FaSmile } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import { useParams } from 'react-router-dom';
const socket = io.connect("http://localhost:7000");
// const socket = io.connect("https://message.server.saimonpranta.com");


const Messenger = () => {
    const [user] = useContext(userContext)
    const [conversation, setConversation] = useState([])
    const [currentConversation, setCurrentConversation] = useState(false)
    const [message, setMessage] = useState([])
    const [socketMessage, setSocketMessage] = useState(false)
    const [friend, setFriend] = useState(false)
    const [input, setInput] = useState("")
    const [emoji, setEmoji] = useState("")

    const { friendID } = useParams()


    const scrollRef = useRef()


    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");

    useEffect(() => {
        socket.emit("addUser", user?._id)
    }, [user])

    useEffect(() => {
        if (friendID) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/instannMesssageProvider/${user._id}/${friendID}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setCurrentConversation(data.data);
                    }
                })
        }
    }, [friendID])


    useEffect(() => {
        socket.on("get_message", (users) => {
            setSocketMessage(users)
        })
    }, [])

    useEffect(() => {
        setInput(input + emoji)
    }, [emoji])
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
            const friend = currentConversation.members.find(currUser => currUser !== user._id)
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


    window.onclick = (event) => {
        const imoji_active = document.getElementById("imoji_active")
        if ( imoji_active) {
            const imoji_div_button = document.getElementById("imoji_div_button")
            const active_message_bottom = document.getElementById("active_message_bottom")
            if (event.target !== (
                imoji_div_button &&
                imoji_div_button.childNodes[0]
            )) {
                imoji_active.classList.remove("imoji_active")
                active_message_bottom.classList.remove("active_message_bottom")
            }
        }
    }

    const handleEmoji = () => {

        const imoji_active = document.getElementById("imoji_active")
        const active_message_bottom = document.getElementById("active_message_bottom")


        imoji_active.classList.toggle("imoji_active")
        active_message_bottom.classList.toggle("active_message_bottom")

    }


    const handlePerConverSationClcik = (conversationnn) => {

        setCurrentConversation(conversationnn)
        const corversation = document.getElementById("corversation")
        const message_container = document.getElementById("message_container")

        corversation.classList.add("disable_corversation")
        message_container.classList.add("active_message_container")
    }

    const handleMessageBack = () => {
        const message_container = document.getElementById("message_container")
        const corversation = document.getElementById("corversation")
        message_container.classList.remove("active_message_container")
        corversation.classList.remove("disable_corversation")
        setCurrentConversation(false)

    }


    return (
        <main className='messenger '>
            <Header />
            <div className='mx-5 messenger-container text-white '>
                <div className='corversation ' id='corversation'>
                    <div className='coversetion_container'>
                        {
                            conversation && conversation.length > 0 ? conversation.map((con) => {

                                return <div key={con._id} onClick={(e) => handlePerConverSationClcik(con)}>
                                    <Conversation convar={con} user={user?._id} />
                                </div>
                            }) : <p className='no_conversation '>Your Have No Conversation Yet!</p>
                        }
                    </div>
                </div>

                <div className='message_container' id='message_container'>
                    <div className='message_body'>
                        {
                            currentConversation ? <>
                                <div className='message_top' >
                                    <TiArrowBack title='Back' onClick={handleMessageBack} />
                                    <img src={friend?.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${friend.profilePicture}` : profileImg} alt="img" />
                                    <div>
                                        <h5>{friend?.firstName ? friend.firstName + " " + friend.lastName : "Live Chat"}</h5>
                                    </div>
                                </div>
                                <div className='message_middle'>
                                    {
                                        message.length > 0 && message.map(m => {
                                            friend?.profilePicture ? m["friendImg"] = friend.profilePicture : m["friendImg"] = false
                                            user?.profilePicture ? m["wonImg"] = user.profilePicture : m["wonImg"] = false

                                            return <div key={m._id} ref={scrollRef}>
                                                <MessageBody msg={m} myID={user._id} />
                                            </div>
                                        })
                                    }
                                </div>
                                <div className='message_bottom active_message_bottom' id='active_message_bottom'>
                                    {/* <div className='text_aria_container'> */}
                                    <div className='imoji_button_continar'>
                                        <FaSmile onClick={handleEmoji} id='imoji_div_button' />
                                    </div>
                                    <textarea name="message" placeholder='type your message...' value={input} onChange={(e) => setInput(e.target.value)}></textarea>
                                    {/* </div> */}
                                    <MdSend onClick={handleSubmitMessage} />
                                    <div className='imoji_container ' id='imoji_active'>
                                        <Imoji setInput={setInput} />
                                    </div>
                                </div>
                            </> : <>
                                <EmptyConverSation />
                            </>
                        }
                    </div>
                </div>
                {/* <div className='active_user'>
                    <ActiveUser />
                </div> */}
            </div>

        </main>
    );
};

export default Messenger;








