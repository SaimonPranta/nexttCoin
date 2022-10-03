import React, { useContext, useEffect, useState } from 'react';
import './Investment.css';
import { IoIosArrowUp } from 'react-icons/io';
import { FiCopy } from "react-icons/fi";

import { table_collaps } from '../../../Functions/table_collaps';
import bkashLogo from '../../../Assets/Mobile_bank_logo/bkash-removebg-preview.png';
import nagadLogo from '../../../Assets/Mobile_bank_logo/download__3_-removebg-preview.png';
import rocketLogo from '../../../Assets/Mobile_bank_logo/roket-removebg-preview.png';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import { RiDeleteBinFill } from 'react-icons/ri';


const Investment = () => {
    const [user, setUser] = useContext(userContext)
    const [inputInfo, setInputInfo] = useState({})
    const [message, setMessage] = useState({});

    const cooki = document.cookie.split("=")[1];



    const copyText = (e) => {
        const copyBtn = e.target.parentNode.parentNode.childNodes[1];
        const copedNotice = e.target.parentNode.parentNode.childNodes[2];
        copyBtn.select()
        document.execCommand("copy");

        copedNotice.classList.add('active-notice');
        setTimeout(() => {
            copedNotice.classList.remove('active-notice');
        }, 2000);
    };

    const inputHndle = (e) => {
        inputHandler(e, inputInfo, setInputInfo)
    }


    const investmentHandle = (e) => {
        e.preventDefault();
        const currentInputContainer = { ...inputInfo }
        const providerValue = document.getElementById("porvider").value;
        if (!inputInfo.provider) {
            inputInfo["provider"] = providerValue;
        }
        if (inputInfo.provider && inputInfo.amount && inputInfo.phoneNumber) {
            if (Math.floor(inputInfo.amount) && Math.floor(inputInfo.phoneNumber)) {
                if (inputInfo.amount >= 10) {
                    setMessage({})
                    fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/investment`, {
                        method: "POST",
                        body: JSON.stringify(inputInfo),
                        headers: {
                            'content-type': 'application/json; charset=UTF-8',
                            authorization: `Bearer ${cooki}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.data) {
                                const updatedUser = { ...data.data }
                                setUser(updatedUser);
                            }
                            if (data.sucess) {
                                setInputInfo({})
                                setMessage({ sucess: data.sucess });
                                setTimeout(() => {
                                    setMessage({})
                                }, 7000);
                            }
                            if (data.failed) {
                                setInputInfo(currentInputContainer)
                                setMessage({ failed: data.failed });
                                setTimeout(() => {
                                    setMessage({})
                                }, 7000);
                            }
                        })
                    setInputInfo({})

                } else {
                    setMessage({ failed: "Sorry, you can't Invest less then 10tk." })
                    setTimeout(() => {
                        setMessage({})
                    }, 7000);
                }
            } else {
                setMessage({ failed: "Sorry, Amount and Phone Number must be Number" })
                setTimeout(() => {
                    setMessage({})
                }, 700);
            }
        } else {
            setMessage({ failed: "Please fill the form and try angain" })
            setTimeout(() => {
                setMessage({})
            }, 7000);
        }
    };
    


    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Investment</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card" onSubmit={investmentHandle}>
                    <div className='payment-provider-section '>
                        <div>
                            <img src={bkashLogo} alt="logo"></img>
                            <input type='text' value='013000196901' />
                            <label >Personal</label>
                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={nagadLogo} alt="logo"></img>
                            <input type='text' value='013000196902' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={rocketLogo} alt="logo"></img>
                            <input type='text' value='013000196903' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                    </div>
                    <div className='select-input-common-style'>
                        <label>Select Payment Method</label>
                        <select name='provider' id="porvider">
                            <option value="Bkash"> bKash </option>
                            <option value="Rocket">Rocket</option>
                            <option value="Nagad"> Nagad</option></select>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="phoneNumber_valid" placeholder=" " value={inputInfo.phoneNumber ? inputInfo.phoneNumber : ""} onChange={inputHndle} />
                        <span class="input__label">Your Mobile-Bank Number</span>
                    </label>
                    <label class="input">
                        <input class="input__field" type="numbe" name="amount" placeholder=" " value={inputInfo.amount ? inputInfo.amount : ""} onChange={inputHndle} />
                        <span class="input__label"> Amount of TK </span>
                    </label>

                    <input type="submit" value="Submit" />

                    <div className='form-warning'>
                        {
                            !message?.failed && message?.sucess && <p className='sucess'>{message.sucess}</p>
                        }
                        {
                            !message?.sucess && message?.failed && <p className='failed'>{message.failed}</p>
                        }
                    </div>

                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Investment History</h4>
                    <IoIosArrowUp className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Payment Method</th>
                                    <th>Phone Number</th>
                                    <th>Transfer Ammount</th>
                                    <th>Request Status</th>
                                    <th>Transfer Date</th>
                                    <th>Action</th>
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
                                            <td>{items.apporoval ? "Approved" : "Pending"}</td>
                                            <td>{items.date}</td>
                                            <td className='icons delete_btn' title='Delete'><RiDeleteBinFill /></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Investment;