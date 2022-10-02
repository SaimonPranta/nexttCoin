import React, { useRef, useState } from 'react';
import './Messenger.css';
import io from 'socket.io-client';
import Header from '../Componants/Header/Header';
import Conversation from './Conversation/Conversation';
import ActiveUser from './ActiveUser/ActiveUser';
import MessageBody from './MessageBody/MessageBody';
import { useContext } from 'react';
import { userContext } from '../App';
import { useEffect } from 'react';
import { MdSend } from 'react-icons/md';
import profileImg from '../Assets/porofile/user_avatar.jpg';
import EmptyConverSation from './MessageBody/EmptyConverSation/EmptyConverSation';
import Imoji from './MessageBody/Imoji/Imoji';
import { FaSmile } from 'react-icons/fa';

const socket = io.connect("http://localhost:8900")




const Messenger = () => {
    const [user] = useContext(userContext)
    const [conversation, setConversation] = useState([])
    const [currentConversation, setCurrentConversation] = useState(false)
    const [message, setMessage] = useState([])
    const [socketMessage, setSocketMessage] = useState(false)
    const [friend, setFriend] = useState(false)
    const [input, setInput] = useState("")
    const [emoji, setEmoji] = useState("")

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

    window.onclick = (event) => {
        const imoji_active = document.getElementById("imoji_active")
        const imoji_div_button = document.getElementById("imoji_div_button")
        const active_message_bottom = document.getElementById("active_message_bottom")





        // if (
        //     event.target !== imoji_div_button && 
        //     event.target !== imoji_div_button.childNodes[0] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[0] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[1] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[2] &&
        //     event.target !== imoji_div_button.childNodes[0].childNodes[0].childNodes[0] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[0].childNodes[1] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[0].childNodes[2] &&
        //     event.target !== imoji_div_button.childNodes[0].childNodes[1].childNodes[0] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[1].childNodes[1] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[1].childNodes[2] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[2].childNodes[0] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[2].childNodes[1] && 
        //     event.target !== imoji_div_button.childNodes[0].childNodes[2].childNodes[2] 
        //     ) {

        if (event.target !== (
            imoji_div_button &&
            imoji_div_button.childNodes[0]
        )) {
            imoji_active.classList.remove("imoji_active")
            active_message_bottom.classList.remove("active_message_bottom")
        }
    }

    const handleEmoji = () => {
        const imoji_active = document.getElementById("imoji_active")
        const active_message_bottom = document.getElementById("active_message_bottom")


        imoji_active.classList.toggle("imoji_active")
        active_message_bottom.classList.toggle("active_message_bottom")

    }




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
                        {
                            currentConversation ? <>
                                <div className='message_top' >
                                    <img src={friend?.profilePicture ? friend.profilePicture : profileImg} alt="_image" />
                                    <div>
                                        <h5>{friend?.firstName ? friend.firstName + " " + friend.lastName : "Live Chat"}</h5>
                                    </div>
                                </div>
                                <div className='message_middle'>
                                    {
                                        message.length > 0 && message.map(m => {
                                            return <div ref={scrollRef}><MessageBody msg={m} myID={user._id} /></div>
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


const num = 5
const num1 = 7

if (2 !== (
    num &&
    num1
)) {
    console.log("hello")
} else {
    console.log("else")
}








