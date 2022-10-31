import React, { useContext, useEffect, useState } from 'react';
import './Registation.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../../Header/Header';
import { authentication } from '../../../FIrebaseConfig/FIrebaseConfig';

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import inputHandler from '../../../Functions/inputHandler';
import { userContext } from '../../../App';

import cookieExpires from '../../../Functions/cookieExpires';
import failed from '../../../Functions/ResponseModal/failed';
import sucess from '../../../Functions/ResponseModal/sucesss';
import { ToastContainer } from 'react-toastify';
import FullSCreenLoader from '../../Loader/FullSCreenLoader';

const Registation = () => {
    const [inputUser, setInputUser] = useState({});
    const [user, setUser] = useContext(userContext);
    const [condition, setCondition] = useState(false)
    const [processing, setProcessing] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state ? location.state.from.pathname : "/"

    const { referID } = useParams()

    useEffect(() => {
        user._id && navigate(from, { replace: true })
    }, [user])

    const fromInputHandler = (e) => {
        inputHandler(e, inputUser, setInputUser)
    }
    const varifierFunction = () => {
        const phoneNumber = "+88" + inputUser.phoneNumber
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setProcessing(false)
                setCondition(true)


            }).catch((error) => {
                const humanCheckerDiv = document.getElementById("sign-in-button")
                humanCheckerDiv.remove()
                setProcessing(false)

                setTimeout(() => {
                    document.getElementById("registation_form").insertAdjacentHTML("afterend", "<div id='sign-in-button'></div>")
                }, 1);
                failed("You Porved Phone Number are Invalid !")
            });
    }


    const registationFormHanle = (e) => {
        e.preventDefault()
        
        if (referID) {
            inputUser["referNumber"] = referID
        }


        if (!processing && inputUser.firstName && inputUser.lastName && inputUser.phoneNumber && inputUser.phoneNumber && inputUser.referNumber) {

            if (inputUser.password === inputUser.confirmPassword) {
                setProcessing(true)

                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/before_registation_checking`, {
                    method: "POST",
                    body: JSON.stringify(inputUser),
                    headers: {
                        'content-type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.sucess) {
                            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                                'size': 'invisible',
                                'callback': (response) => {

                                }
                            }, authentication);
                            varifierFunction()
                        } else if (data.failed) {
                            failed(data.failed)
                            setProcessing(false)
                        }

                    })
            } else {
                failed("Sorry, Your Password and Confirm Password doesn't Match !")
            }
        } else {
            failed("Before Submit You must Need to Fill Full Form !")
        }
    }

    const handleVarification = (e) => {
        e.preventDefault()

        if (!processing && inputUser.otp.length === 6) {
            setProcessing(true)

            let confirmationResult = window.confirmationResult
            confirmationResult.confirm(inputUser.otp).then((result) => {
                const userPhoneNumber = result.user.phoneNumber;
                if (userPhoneNumber) {
                    const trimNumber = userPhoneNumber.replace("+88", "")
                    inputUser["phoneNumber"] = trimNumber
                    if (inputUser.firstName && inputUser.lastName && inputUser.phoneNumber && inputUser.phoneNumber && inputUser.referNumber) {
                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/registation`, {
                            method: "POST",
                            body: JSON.stringify(inputUser),
                            headers: {
                                'content-type': 'application/json; charset=UTF-8'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                setProcessing(false)

                                if (data.data) {
                                    data.data.password = null;
                                    setUser(data.data)
                                    navigate(from, { replace: true })
                                }
                                if (data && data.token) {
                                    document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/`;
                                    // document.cookie = `token = ${data.token}; ${cookieExpires(3)}; path=/dashboard`;
                                }
                                if (data.sucess) {
                                    sucess(data.sucess)
                                }
                                if (data.failed) {
                                    failed(data.failed)
                                }

                            })
                    } else {
                        failed("Something is Worong Please try Again !")
                    }
                } else {
                    failed("Something is Worong Please try Again !")
                }
            }).catch((error) => {
                setProcessing(false)
                failed("You are Providing a Wrond OTP Code or Your OTP Code are Expired !")
            });
        } else {
            failed("You are Providing a Wrond OTP Code OTP !")
        }
    }



    return (
        <main>
            <Header />
            <div className='container'>
                <section className='authentication m-auto text-white'>
                    {
                        !condition && <form onSubmit={registationFormHanle} autoComplete="off" autoCorrect='off' id='registation_form'>
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
                            {
                                referID ? <input type="text" placeholder="Referrence Number" name="referNumber" value={referID} required autoComplete="off" onChange={fromInputHandler} /> :
                                    <input type="text" placeholder="Referrence Number" name="referNumber" value={inputUser.referNumber ? inputUser.referNumber : ""} required autoComplete="off" onChange={fromInputHandler} />
                            }


                            <input type="submit" value="Register account" />
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

                            {/* <div className='form-navigation d-flex'><p>Didn't get the code? <a onClick={resendFunction} style={{cursor:"pointer"}}><span>Resend it</span></a></p></div> */}
                        </form>
                    }
                </section>
            </div>
            {
                processing && <FullSCreenLoader />
            }
            <ToastContainer />
        </main>
    );
};

export default Registation;



