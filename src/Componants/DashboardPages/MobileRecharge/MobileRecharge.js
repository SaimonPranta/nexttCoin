import React from 'react';
import './MobileRecharge.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { table_collaps } from '../../../Functions/table_collaps';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import { useEffect } from 'react';
import deleteIcon from '../../../Assets/icons/icons8-delete-32 (1).png';




const MobileRecharge = () => {
    const [user, setUser] = useContext(userContext)
    const [inputInfo, setInputInfo] = useState({})
    const [message, setMessage] = useState({})
    const [count, setCount] = useState({
        pendingMobileRecharge: 0,
        pendingWithdraw: 0
    })
    const cooki = document.cookie.split("=")[1];

    useEffect(() => {
        if (user?._id) {

            let pendingMobileRecharge = 0
            let pendingWithdraw = 0

            user.mobileRechareInfo.map(req => {
                const currentCount = { ...count }
                if (!req.apporoval) {
                    pendingMobileRecharge = pendingMobileRecharge + req.amount
                    currentCount['pendingMobileRecharge'] = pendingMobileRecharge
                    setCount(currentCount)
                }
            })
            user.withdrawInfo.map(req => {
                const currentCount = { ...count }
                if (!req.apporoval) {
                    pendingWithdraw = pendingWithdraw + req.amount
                    currentCount['pendingWithdraw'] = pendingWithdraw
                    setCount(currentCount)
                }
            })

        }
    }, [user])


    const handleInput = (e) => {
        inputHandler(e, inputInfo, setInputInfo)
    }


    const mobileRechargeHandler = (e) => {
        e.preventDefault();
        const currnetInputStore = { ...inputInfo }
        const simProvider = document.getElementById("simProvider").value;
        const simStatus = document.getElementById("simStatus").value;
        const amount = document.getElementById("amount").value;


        if (!inputInfo.simProvider) {
            inputInfo["simProvider"] = simProvider
        }
        if (!inputInfo.simStatus) {
            inputInfo["simStatus"] = simStatus
        }
        if (!inputInfo.amount) {
            inputInfo["amount"] = Math.floor(amount)
        }
        if (inputInfo.simProvider && inputInfo.amount && inputInfo.phoneNumber && inputInfo.simStatus) {
            if (Math.floor(inputInfo.phoneNumber)) {
                if (Math.floor(inputInfo.amount + count.pendingMobileRecharge + count.pendingWithdraw) <= Math.floor(user.balance)) {
                    setMessage({})
                    if (inputInfo.amount >= 10) {
                        setMessage({})
                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/mobile_rechare`, {
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
                                    setMessage({ sucess: data.sucess });
                                    setTimeout(() => {
                                        setMessage({})
                                    }, 7000);
                                }
                                if (data.failed) {
                                    setInputInfo(currnetInputStore)
                                    setMessage({ failed: data.failed });
                                    setTimeout(() => {
                                        setMessage({})
                                    }, 7000);
                                }
                            })
                    } else {
                        setMessage({ failed: "Sorry, you can't send money less then 10tk." })
                        setTimeout(() => {
                            setMessage({})
                        }, 7000);
                    }
                } else {
                    setMessage({ failed: "Sorry, you have not sufficient Balance." })
                }
            } else {
                setMessage({ failed: "Phone Number must be Number." })
            }


        } else {
            setMessage({ failed: "Please fill the form and try angain" })
            setTimeout(() => {
                setMessage({})
            }, 7000);
        }

    };
    const mobileRechargeDecline = (e, id, requestID) => {
        if (id && requestID) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/mobile_recharge_decline`, {
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
                    console.log(data)
                    if (data.sucess) {
                        e.target.parentNode.parentNode.style.display = "none"
                    }

                })
        }
    };


    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Request for Mobile Recharge</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card" onSubmit={mobileRechargeHandler}>
                    <div className='mobile-recharge'>
                        <div className='select-input-common-style'>
                            <label>Select Your SIM Provider</label>
                            <select name='simProvider' id="simProvider" onChange={handleInput}>
                                <option value="Robi"> Robi </option>
                                <option value="Grameenphone">Grameenphone</option>
                                <option value="banglalink"> banglalink</option>
                                <option value="Airtel"> Airtel</option>
                                <option value="Teletalk"> Teletalk</option>
                            </select>
                        </div>

                        <div className='select-input-common-style'>
                            <label>Select Your SIM Type</label>
                            <select name='simStatus' id="simStatus" onChange={handleInput}>
                                <option value="Prepaid"> Prepaid SIM </option>
                                <option value="Postpaid">Postpaid SIM</option>
                            </select>
                        </div>
                        <div className='select-input-common-style'>
                            <label>Select Amount</label>
                            <select name='amount' id="amount" onChange={handleInput}>
                                <option value="20">20 TK </option>
                                <option value="30">30 TK </option>
                                <option value="50">50 TK </option>
                                <option value="100">100 TK </option>
                            </select>
                        </div>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="phoneNumber_valid" value={inputInfo.phoneNumber ? inputInfo.phoneNumber : ""} placeholder=" " onChange={handleInput} />
                        <span class="input__label">Phone Number</span>
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
                    <h4>Mobile Recharge History</h4>
                    <FaAngleDoubleDown  className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>SIM Provider</th>
                                    <th>Receiver Number	</th>
                                    <th>SIM Status</th>
                                    <th>Transfer Ammount</th>
                                    <th>Transfer Date</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.mobileRechareInfo && user.mobileRechareInfo.map((items, index) => {
                                        return <tr key={items.requestID}>
                                            <td>{index + 1}</td>
                                            <td>{items.simProvider}</td>
                                            <td>{items.number}</td>
                                            <td>{items.simStatus}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.date}</td>
                                            {
                                                !items?.apporoval && <td className='delete_icon'>
                                                    <img src={deleteIcon} alt="_image" title='Delete' onClick={ (e) => mobileRechargeDecline(e, user._id, items.requestID)}/>
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
                </div>

            </div>

        </section>
    );
};

export default MobileRecharge;