import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';

const ResetPasswordModal = ({ userID }) => {
    const [input, setInput] = useState({})
    const cooki = document.cookie.split("=")[1];

    const fromInputHandler = (e) => {
        const currentInput = { ...input }
        const name = e.target.name
        const value = e.target.value
        currentInput[name] = value
        setInput(currentInput)
    }
    const handleResetPassord = (e) => {
        if (input.oldPassword && input.newPassword && userID) {
            e.preventDefault()
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/reset_password`, {
                method: "PATCH",
                body: JSON.stringify({
                    _id: userID,
                    oldPassword: input.oldPassword,
                    newPassword: input.newPassword
                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.sucess) {
                        const reset_password_modal = document.getElementById("reset_password_modal")
                        reset_password_modal.classList.remove("active_reset_password_modal")
                        sucess(data.sucess)
                    }
                    if (data.failed) {
                       failed(data.failed)
                    }
                })
        }
    }

console.log(input)
    return (
        <div className='common_btn reset_password_modal d-flex  align-items-center justify-content-center' id='reset_password_modal'>
            <div className='sub_reset_password_modal px-4 py-5'>
                <h6>Reset Password</h6>
                <ImCross />
                <form onSubmit={handleResetPassord}>
                    <label>Old Password</label>
                    <input type="password" placeholder="Old Password" name="oldPassword" value={input.oldPassword ? input.oldPassword : ""} required autoComplete="off" onChange={fromInputHandler} />
                    <label>New Password</label>
                    <input type="password" placeholder="New Password" name="newPassword" value={input.newPassword ? input.newPassword : ""} required autoComplete="off" onChange={fromInputHandler} />
                    <input type="submit" value="Submit" className='mt-4' />
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordModal;