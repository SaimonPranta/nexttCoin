import React, { useEffect, useState } from 'react';
import './Conversation.css';
import profileImg from '../../Assets/porofile/user_avatar.jpg';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:8900")


const Conversation = ({ convar, user }) => {
    const [friend, setFriend] = useState({})
    const [isActive, setIsActive] = useState(false)

    const cooki = document.cookie.split("=")[1];

    useEffect(() => {
        const friend = convar.members.find(currUser => currUser !== user)
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
    }, [convar])

    useEffect(() => {
        const friendID = convar.members.find(currUser => currUser !== user)

        socket.on("getUser", (users) => {
            if (users && users.length > 0) {
                users.map(user => {
                    if (user.userId === friendID) {
                        setIsActive(true)

                    }
                })
            } else {
                setIsActive(false)
            }
        })
    }, [friend])


    return (
        <div className='sub_coversetion' id={isActive ? "activeUse" : ""}>
            <img src={friend?.profilePicture ? friend.profilePicture : profileImg} alt="_image" />
            <h6>{friend.firstName} {friend.lastName}</h6>
        </div>

    );
};

export default Conversation;