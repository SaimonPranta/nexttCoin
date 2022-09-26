import React from 'react';
import './MessageBody.css';
import {MdSend} from 'react-icons/md';
import profileImg from '../../../Assets/porofile/user_avatar.jpg';



const MessageBody = () => {

    const user = {}


    return (
        <div className='message_body'>
            <div className='message_top'>
                <h5>Live Chat</h5>
            </div>
            <div className='message_middle'>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>hey jam</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                    <p>How are your. </p>
                    </div>
                    <div className='text_bottom'>
                         <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub me'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>hey Saimon</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, labore.</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub me'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore distinctio reiciendis aliquid iusto voluptatum placeat accusantium quasi officiis et dignissimos.</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub me'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, placeat?</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub me'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                        <p>Ok, i will try..😍😍😍</p>
                    </div>
                    <div className='text_bottom'>
                        <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                    <p>Thanks a loat dear. </p>
                    </div>
                    <div className='text_bottom'>
                         <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                    <p>best of luck to you. </p>
                    </div>
                    <div className='text_bottom'>
                         <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub me'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                    <p>ok...🥰🥰 </p>
                    </div>
                    <div className='text_bottom'>
                         <p>just now</p>
                    </div>
                </div>
                <div className='message_middle_sub other'>
                    <div className='text'>
                        <img src={user.profilePicture ? user.profilePicture : profileImg} alt="" />
                    <p>ok.🥰 </p>
                    </div>
                    <div className='text_bottom'>
                         <p>just now</p>
                    </div>
                </div>
            </div>
            <div className='message_bottom'>
                <textarea name="message"></textarea>
                <MdSend/>
            </div>
        </div>
    );
};

export default MessageBody;