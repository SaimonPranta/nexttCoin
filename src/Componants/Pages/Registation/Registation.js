import React, { useContext, useEffect, useState } from 'react';
import './Registation.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';
import { authentication } from '../../../FIrebaseConfig/FIrebaseConfig';

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import inputHandler from '../../../Functions/inputHandler';
import { userContext } from '../../../App';

import cookieExpires from '../../../Functions/cookieExpires';

const Registation = () => {
    const [inputUser, setInputUser] = useState({});
    const [user, setUser] = useContext(userContext);
    const [message, setMessage] = useState({});
    const [condition, setCondition] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state ? location.state.from.pathname : "/"

    useEffect(() => {
        user._id && navigate(from, { replace: true })
    }, [user])

    const fromInputHandler = (e) => {
        inputHandler(e, inputUser, setInputUser)

    }
    console.log(inputUser)
    const varifierFunction = () => {
        const phoneNumber = "+880" + inputUser.phoneNumber
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("sucessfully Enter in result.")
                setCondition(true)
                setMessage({})

            }).catch((error) => {
                setMessage({ failed: "You are porviding an invalid Phone Number." })
            });
    }


    const registationFormHanle = (e) => {
        e.preventDefault()
        if (inputUser.firstName && inputUser.lastName && inputUser.phoneNumber && inputUser.phoneNumber && inputUser.referNumber) {
            if (inputUser.password === inputUser.confirmPassword) {

                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/before_registation_checking`, {
                    method: "POST",
                    body: JSON.stringify(inputUser),
                    headers: {
                        'content-type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.phoneNumberChacking.length < 1) {
                            if (data.refNumberChacking.length > 0) {
                                setMessage({})
                                if (data.refNumberChacking[0].isActive) {
                                    setMessage({})
                                    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                                        'size': 'invisible',
                                        'callback': (response) => {

                                        }
                                    }, authentication);
                                    varifierFunction()
                                } else {
                                    setMessage({ failed: 'Your porvided reference Number are not Actived.' })
                                }
                            } else {
                                setMessage({ failed: 'Your porvided Referrence Number are not exist.' })
                            }

                        } else {
                            setMessage({ failed: 'This Phone Number are already exist, please try with another Number.' })
                        }
                    })
            } else {
                setMessage({ failed: 'Confirm Password does not metch with Password.' })
            }
        } else {
            setMessage({ failed: "You can't submit without filling full form." })
        }
    }

    const handleVarification = (e) => {
        e.preventDefault()

        if (inputUser.otp.length === 6) {
            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(inputUser.otp).then((result) => {
                const userPhoneNumber = result.user.phoneNumber;
                if (userPhoneNumber) {
                    const trimNumber = userPhoneNumber.replace("+88", "")
                    inputUser["phoneNumber"] = trimNumber
                    if (inputUser.firstName && inputUser.lastName && inputUser.phoneNumber && inputUser.phoneNumber && inputUser.referNumber) {
                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/user`, {
                            method: "POST",
                            body: JSON.stringify(inputUser),
                            headers: {
                                'content-type': 'application/json; charset=UTF-8'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                                if (data.sucess) {
                                    setMessage({ sucess: data.sucess })
                                }
                                if (data.failed) {
                                    setMessage({ failed: data.failed })
                                }
                                if (data.data) {
                                    data.data.password = null;
                                    setUser(data.data)
                                    navigate(from, { replace: true })
                                }
                                setTimeout(() => {
                                    setMessage({})
                                }, 7000);
                            })
                    }
                }
                setMessage({})
            }).catch((error) => {
                setMessage({ failed: "You are providing a wrond OTP code or Your OTP code are expired." })
            });
        } else {
            setMessage({})
        }

    }



    return (
        <main >
            <Header />
            <div className='container'>
                <section className='authentication m-auto text-white'>
                    {
                        !condition && <form onSubmit={registationFormHanle}>
                            <h6>Register an account</h6>
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" name="firstName" value={inputUser.firstName ? inputUser.firstName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                            <label>last Name</label>
                            <input type="text" placeholder="Last Name" name="lastName" value={inputUser.lastName ? inputUser.lastName : ""} required autoComplete="off" style={{ textTransform: "capitalize" }} onChange={fromInputHandler} />
                            <label>Phone Number</label>
                            <input type="text" placeholder="Phone Number" name="phoneNumber" value={inputUser.phoneNumber ? inputUser.phoneNumber : ""} required autoComplete="off" onChange={fromInputHandler} />
                            <label>Password</label>
                            <input type="password" placeholder="Password" name="password" value={inputUser.password ? inputUser.password : ""} required autoComplete="off" onChange={fromInputHandler} />
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={inputUser.confirmPassword ? inputUser.confirmPassword : ""} required autoComplete="off" onChange={fromInputHandler} />
                            <label>Your Upline Referrence Number</label>
                            <input type="text" placeholder="Referrence Number" name="referNumber" value={inputUser.referNumber ? inputUser.referNumber : ""} required autoComplete="off" onChange={fromInputHandler} />

                            <input type="submit" value="Register account" />
                            <div className='resposeContainer'>
                                {
                                    !message.failed && message.sucess && <p className='sucess ' style={{ color: "blue" }} >{message.sucess}</p>
                                }
                                {
                                    !message.sucess && message.failed && <p className='warning ' style={{ color: "blue" }}  >{message.failed}</p>
                                }

                            </div>
                            <div className='form-navigation d-flex'><p>Already have an account? <Link to="/login"><span>Login</span></Link></p></div>
                            <div id='sign-in-button'></div>

                        </form>
                    }


                    {
                        condition && <form onSubmit={handleVarification}>
                            <h6>Validate OTP</h6>
                            <label style={{ fontSize: ".9rem", fontWeight: "100" }}>
                                Please enter the OTP (one time password) to verify your account. A Code has been sent to 01*****{inputUser.phoneNumber && inputUser.phoneNumber.substring(8)}
                            </label>
                            <label>Enter 6 digit code</label>
                            <input type="text" placeholder="OTP code" name="otp" value={inputUser.otp ? inputUser.otp : ""} required autoComplete="off" onChange={fromInputHandler} />
                            <input type="submit" value="Verify" />
                            <div className='resposeContainer'>
                                {
                                    !message.failed && message.sucess && <p className='sucess ' style={{ color: "blue" }} >{message.sucess}</p>
                                }
                                {
                                    !message.sucess && message.failed && <p className='warning ' style={{ color: "blue" }}  >{message.failed}</p>
                                }

                            </div>
                            {/* <div className='form-navigation d-flex'><p>Didn't get the code? <a onClick={resendFunction} style={{cursor:"pointer"}}><span>Resend it</span></a></p></div> */}
                        </form>
                    }
                </section>
            </div>
        </main>
    );
};

export default Registation;



