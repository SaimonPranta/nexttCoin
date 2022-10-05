import React from 'react';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';



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
                console.log(data)
                if (data.data) {
                    setUser(data.data);
                }
                if (data.message) {
                    setTimeout(() => {
                    }, 7000);
                }
            })
    }


    return (
        <div className=' common-form-styles user_update_modal d-flex flex-column justify-content-center' id='user_update_modal'>
            <h6>Edit Porfile</h6>
            <form onSubmit={userUpdateHandle}>
                <ImCross />

                <label>First Name</label>
                <input type="text" placeholder="First Name" name="firstName" value={inputUser.firstName ? inputUser.firstName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                <label>last Name</label>
                <input type="text" placeholder="Last Name" name="lastName" value={inputUser.lastName ? inputUser.lastName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                <label>About Me</label>
                <textarea type="text" placeholder="About You..." name="bio" value={inputUser.bio ? inputUser.bio : ""} required autoComplete="off" onChange={fromInputHandler} />
                <input type="submit" value="Submit" className='mt-4' />
            </form>
        </div>
    );
};

export default UserUpdateModal;