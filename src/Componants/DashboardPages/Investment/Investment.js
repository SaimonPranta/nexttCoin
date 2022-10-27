import React, { useContext, useEffect, useState } from 'react';
import './Investment.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FiCopy } from "react-icons/fi";

import { table_collaps } from '../../../Functions/table_collaps';
import bkashLogo from '../../../Assets/Mobile_bank_logo/bkash-removebg-preview.png';
import nagadLogo from '../../../Assets/Mobile_bank_logo/download__3_-removebg-preview.png';
import rocketLogo from '../../../Assets/Mobile_bank_logo/roket-removebg-preview.png';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import deleteIcon from '../../../Assets/icons/icons8-delete-32 (1).png';
import sucess from '../../../Functions/ResponseModal/sucesss';
import failed from '../../../Functions/ResponseModal/failed';
import { ToastContainer } from 'react-toastify';
import SmallSizeLoader from '../../Loader/SmallSizeLoader';
import { useNavigate } from 'react-router-dom';
import TableNoData from '../../TableNoData/TableNoData';


const Investment = () => {
    const [user, setUser] = useContext(userContext)
    const [inputInfo, setInputInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
    let pending = false

    const navigate = useNavigate()

    const copyText = (e) => {
        const copyBtn = e.target.parentNode.parentNode.childNodes[1];
        copyBtn.select()
        document.execCommand("copy");
        sucess("Copied")
    };

    const inputHndle = (e) => {
        inputHandler(e, inputInfo, setInputInfo)
    }


    const investmentHandle = (e) => {
        e.preventDefault();

        if (!user.domeUser) {
            const currentInput = { ...inputInfo }
            setInputInfo({})
            const providerValue = document.getElementById("porvider").value;
            if (!currentInput.provider) {
                currentInput["provider"] = providerValue;
            }
            if (currentInput.provider && currentInput.amount && currentInput.phoneNumber) {
                if (Math.floor(currentInput.amount) && Math.floor(currentInput.phoneNumber)) {
                    if (currentInput.amount >= 10) {
                        setIsLoading(true)
                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/investment`, {
                            method: "POST",
                            body: JSON.stringify({
                                ...currentInput,
                                id: user._id
                            }),
                            headers: {
                                'content-type': 'application/json; charset=UTF-8',
                                authorization: `Bearer ${cooki}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                setIsLoading(false)
                                if (data.data) {
                                    const updatedUser = { ...data.data }
                                    setUser(updatedUser);
                                    if (user && !user.isActive) {
                                        navigate("/dashboard/my_account", { replace: true })
                                    }
                                }
                                if (data.sucess) {
                                    setInputInfo({})
                                    sucess(data.sucess)
                                }
                                if (data.failed) {
                                    setInputInfo(currentInput)
                                    failed(data.failed)
                                }
                            })
                    } else {
                        setInputInfo(currentInput)
                        failed("Sorry, you can't Invest less then 10tk !")
                    }
                } else {
                    setInputInfo(currentInput)
                    failed("Sorry, Amount and Phone Number must be Number !")
                }
            } else {
                setInputInfo(currentInput)
                failed("Please fill the form and try angain !")
            }
        } else {
            failed("You Can't Make Any Request as Dome User !")
        }
    };
    const investmentRequestDecline = (e, id, requestID) => {
        if (!user.domeUser) {
            if (!pending && id && requestID) {
                pending = true

                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/investment_request_decline`, {
                    method: "POST",
                    body: JSON.stringify({
                        id,
                        requestID,
                    }),
                    headers: {
                        'content-type': 'application/json; charset=UTF-8',
                        authorization: `Bearer ${cooki}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        pending = true
                        if (data.sucess) {
                            e.target.parentNode.parentNode.style.display = "none"
                            sucess("Sucessfully Deleted Investment Item ! ")
                        } else {
                            failed("Failed to Delet Investment Item ! ")
                        }


                    })
            }
        } else {
            failed("You Can't Make Any Request as Dome User !")
        }
    };


    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Investment</h3>
            </div>
            <div className='common-form-styles'>
                <form autoComplete="off" className="card" onSubmit={investmentHandle}>
                    <div className='payment-provider-section '>
                        <div>
                            <img src={bkashLogo} alt="logo"></img>
                            <input type='text' value='01300019690' />
                            <label >Personal</label>
                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={nagadLogo} alt="logo"></img>
                            <input type='text' value='01300019690' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={rocketLogo} alt="logo"></img>
                            <input type='text' value='01300019690' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                    </div>
                    <div className='common-form-select-container'>
                        <div className='select-input-common-style'>
                            <label>Select Payment Method</label>
                            <select name='provider' id="porvider">
                                <option value="Bkash"> bKash </option>
                                <option value="Rocket">Rocket</option>
                                <option value="Nagad"> Nagad</option></select>
                        </div>
                    </div>
                    <label className="input">
                        <input className="input__field" type="text" name="phoneNumber_valid" placeholder=" " value={inputInfo.phoneNumber ? inputInfo.phoneNumber : ""} onChange={inputHndle} />
                        <span className="input__label">Your Mobile-Bank Number</span>
                    </label>
                    <label className="input">
                        <input className="input__field" type="numbe" name="amount" placeholder=" " value={inputInfo.amount ? inputInfo.amount : ""} onChange={inputHndle} />
                        <span className="input__label"> Amount of TK </span>
                    </label>
                    {
                        !isLoading ? <input type="submit" value="Submit" /> :
                            <SmallSizeLoader />
                    }
                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Investment History</h4>
                    <FaAngleDoubleDown className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    {
                        user?.investment && user.investment.length > 0 ? <>
                            <div className='scroll-text'><p>scroll it</p></div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Payment Method</th>
                                            <th>Phone Number</th>
                                            <th>Transfer Ammount</th>
                                            <th>Transfer Date</th>
                                            <th>Option</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user?.investment && user.investment.map((items, index) => {
                                                return <tr key={items.requestID}>
                                                    <td>{index + 1}</td>
                                                    <td>{items.provider}</td>
                                                    <td>{items.number}</td>
                                                    <td>{items.amount} Tk</td>
                                                    <td className='table-date'>{items.date}</td>
                                                    {
                                                        !items?.apporoval && <td className='delete_icon'>
                                                            <img src={deleteIcon} alt="_image" title='Delete' onClick={(e) => investmentRequestDecline(e, user._id, items.requestID)} />
                                                        </td>
                                                    }
                                                    {
                                                        items?.apporoval && <td>Approved</td>
                                                    }
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </> :
                            <>
                                <TableNoData text="You Have No Investment History Yet !" />
                            </>
                    }

                </div>

            </div>
            <ToastContainer />
        </section>
    );
};

export default Investment;