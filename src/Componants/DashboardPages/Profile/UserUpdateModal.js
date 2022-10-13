import React from 'react';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';



const UserUpdateModal = ({ user, setUser }) => {
    const [inputUser, setInputUser] = useState({ ...user })
    const [input, setInput] = useState({})
    const cooki = document.cookie.split("=")[1];


    const fromInputHandler = (e) => {
        const currentInput = { ...input }
        const currentUserInput = { ...inputUser }

        const name = e.target.name
        const value = e.target.value

        if (name === "bio") {
            let bioContainer = null

            if (currentUserInput.bio.length === 112) {
                bioContainer = value
            }
            if (!currentUserInput.bio || currentUserInput.bio.length <= 115) {
                currentInput[name] = value
                currentUserInput[name] = value
                setInputUser(currentUserInput)
                setInput(currentInput)
            } else {
                if (bioContainer.length > 10) {
                    currentInput[name] = bioContainer
                    currentUserInput[name] = bioContainer
                    setInputUser(currentUserInput)
                    setInput(currentInput)
                }
            }
        } else {
            currentInput[name] = value
            currentUserInput[name] = value
            setInputUser(currentUserInput)
            setInput(currentInput)
        }
    }
    const userUpdateHandle = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
            method: "PATCH",
            body: JSON.stringify({
                firstName: input.firstName ? input.firstName : inputUser.firstName,
                lastName: input.lastName ? input.lastName : inputUser.lastName,
                bio: input.bio ? input.bio : inputUser.bio,
                phoneNumber: inputUser.phoneNumber,
                _id: inputUser._id
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                authorization: `Bearer ${cooki}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.data) {
                    setUser(data.data);
                    const user_update_modal = document.getElementById("user_update_modal")
                    user_update_modal.classList.remove("active_user_update_modal")
                    sucess("Sucessfully Updated Your Profile !")
                }
                if (data.failed) {
                    failed(data.failed)
                }
            })
    }


    return (
        <div className=' common_btn user_update_modal d-flex  align-items-center justify-content-center' id='user_update_modal'>
            <div className=' sub_user_update_modal px-4 py-5'>
                <h6>Edit Porfile</h6>
                <ImCross />
                <form onSubmit={userUpdateHandle}>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" name="firstName" value={inputUser.firstName ? inputUser.firstName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                    <label>last Name</label>
                    <input type="text" placeholder="Last Name" name="lastName" value={inputUser.lastName ? inputUser.lastName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                    <label>About Me</label>
                    <textarea type="text" placeholder="About You..." name="bio" value={inputUser.bio ? inputUser.bio : ""} required autoComplete="off" onChange={fromInputHandler} />
                    <input type="submit" value="Submit" className='mt-4' />
                </form>
            </div>
        </div>
    );
};

export default UserUpdateModal;