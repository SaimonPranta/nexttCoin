import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import { table_collaps } from '../../../Functions/table_collaps';

import { RiDeleteBinFill } from 'react-icons/ri';



const Withdraw = () => {
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

    console.log(count)

    const handleInput = (e) => {
        inputHandler(e, inputInfo, setInputInfo)
    }

    console.log(inputInfo)
    const withdrawFormHandler = (e) => {
        e.preventDefault();
        const providerValue = document.getElementById("porvider").value;
        const amountValue = document.getElementById("amount").value;

        const floorValue = Math.floor(amountValue)
        const chargeValue = floorValue * (5 / 100)
        const floorBalance = Math.floor(user.balance)


        if (Math.floor(chargeValue + floorValue + count.pendingMobileRecharge + count.pendingWithdraw) <= floorBalance) {
            if (!inputInfo.porvider) {
                inputInfo["porvider"] = providerValue;
            }
            if (!inputInfo.amount) {
                inputInfo["charge"] = chargeValue
                const floorValue = Math.floor(amountValue)
                inputInfo["amount"] = floorValue;
            }

            if (Math.floor(inputInfo.amount) && Math.floor(inputInfo.phoneNumber)) {
                if (inputInfo.porvider && inputInfo.amount && inputInfo.phoneNumber) {
                    setMessage({})
                    const floorValue = Math.floor(inputInfo.amount)
                    const floorBalance = Math.floor(user.balance)

                    if (floorValue <= floorBalance) {

                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/withdraw`, {
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
                                    setMessage({ failed: data.failed });
                                    setTimeout(() => {
                                        setMessage({})
                                    }, 7000);
                                }
                            })
                    } else {
                        setMessage({ failed: `Sorry, you can't withdraw more then ${user.balance}tk` })
                        setTimeout(() => {
                            setMessage({})
                        }, 7000);
                    }
                } else {
                    setMessage({ failed: "Please fill the form and try angain" })
                    setTimeout(() => {
                        setMessage({})
                    }, 7000);
                }

            } else {
                setMessage({ failed: `Phone Number and Amount must be number` })
                setTimeout(() => {
                    setMessage({})
                }, 7000);
            }


        } else {
            setMessage({ failed: `Sorry, you can't withdraw more then ${user.balance}tk` })
            setTimeout(() => {
                setMessage({})
            }, 7000);
        }


    };

    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Request for Withdraw</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card" onSubmit={withdrawFormHandler}>
                    <div className='mobile-recharge'>
                        <div className='select-input-common-style'>
                            <label>Select Payment Method</label>
                            <select name='porvider' id="porvider" onChange={handleInput}>
                                <option value="Bkash">bKash</option>
                                <option value="Rocket">Rocket</option>
                                <option value="Nagad">Nagad</option>
                            </select>
                        </div>
                        <div className='select-input-common-style'>
                            <label>Select Amount</label>
                            <select name='amount' id="amount" onChange={handleInput}>
                                <option value="100">100 TK</option>
                                <option value="200">200 TK</option>
                                <option value="300">300 TK</option>
                                <option value="400">400 TK</option>
                                <option value="500">500 TK</option>
                                <option value="1000">1000 TK</option>
                            </select>
                        </div>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="phoneNumber_valid" value={inputInfo.phoneNumber ? inputInfo.phoneNumber : ""} placeholder=" " onChange={handleInput} />
                        <span class="input__label">Your Mobile-Bank Number</span>
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
                    <h4>Withdraw History</h4>
                    <IoIosArrowUp className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Withdraw Method</th>
                                    <th>Withdraw Number	</th>
                                    <th>Withdraw Ammount</th>
                                    <th>Request Status</th>
                                    <th>Transfer Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.withdrawInfo && user.withdrawInfo.map((items, index) => {
                                        return <tr key={items.requestID}>
                                            <td>{index + 1}</td>
                                            <td>{items.porvider}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.apporoval ? "Approved" : "Pending"}</td>
                                            <td>{items.date}</td>
                                            <td className='delete_btn' title='Delete'><RiDeleteBinFill /></td>
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

export default Withdraw;