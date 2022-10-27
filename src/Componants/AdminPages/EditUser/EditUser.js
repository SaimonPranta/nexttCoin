import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';
import FullSCreenLoader from '../../Loader/FullSCreenLoader';

const EditUser = () => {
    const [user, setUser] = useContext(userContext);
    const [currentUser, setCurrentUser] = useState({})
    const [inputUser, setInputUser] = useState({})

    let id = useParams().id

    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");

    useEffect(() => {
        if (cooki) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/view_profile/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    data.password = null
                    setCurrentUser(data);
                })
        }
    }, []);

    const fromInputHandler = (e) => {
        inputHandler(e, currentUser, setCurrentUser)
        inputHandler(e, inputUser, setInputUser)
    }
    const userUpdateHandle = (e) => {
        e.preventDefault()
        const IDcontainer = id
        id = ""
        if (IDcontainer) {

            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/admin/updateUser`, {
                method: "PATCH",
                body: JSON.stringify({
                    _id: IDcontainer,
                    firstName: inputUser?.firstName ? inputUser.firstName : null,
                    lastName: inputUser?.lastName ? inputUser.lastName : null,
                    balance: inputUser?.balance ? inputUser.balance : null,
                    shoppingBalance: inputUser?.shoppingBalance ? inputUser.shoppingBalance : null,
                    password: inputUser?.password ? inputUser.password : null,

                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data) {
                        const updatedUser = { ...data.data }
                        setCurrentUser(updatedUser);
                    }
                    if (data.sucess) {
                        sucess(data.sucess)
                    }
                    if (data.failed) {
                        id = IDcontainer
                        failed(data.failed)
                    }
                })
        }
    }

    return (
        <>
            {
                currentUser && currentUser._id ? <div className='container'>
                    <section className='authentication m-auto text-white container'>
                        <form onSubmit={userUpdateHandle} autoComplete="off" autoCorrect='off'>
                            <h6>Register an account</h6>
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" name="firstName" value={currentUser.firstName ? currentUser.firstName : ""} autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                            <label>last Name</label>
                            <input type="text" placeholder="Last Name" name="lastName" value={currentUser.lastName ? currentUser.lastName : ""} autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                            <label>Balance</label>
                            <input type="text" placeholder="Balance" name="balance" value={currentUser.balance ? currentUser.balance : ""} autoComplete="off" onChange={fromInputHandler} />
                            <label>Shopping Balance</label>
                            <input type="text" placeholder="Shopping Balance" name="shoppingBalance" value={currentUser.shoppingBalance ? currentUser.shoppingBalance : ""} autoComplete="off" onChange={fromInputHandler} />
                            <label>Password</label>
                            <input type="password" placeholder="Password" name="password" value={inputUser.password ? inputUser.password : ""} autoComplete="off" onChange={fromInputHandler} />
                            <input type="submit" value="Update User" />
                        </form>
                    </section>
                </div> : 
                <FullSCreenLoader />
        }
        </>
    );
};

export default EditUser;