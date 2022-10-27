import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import { table_collaps } from '../../../Functions/table_collaps';
import deleteIcon from '../../../Assets/icons/icons8-delete-32 (1).png';
import { ToastContainer } from 'react-toastify';
import sucess from '../../../Functions/ResponseModal/sucesss';
import failed from '../../../Functions/ResponseModal/failed';
import SmallSizeLoader from '../../Loader/SmallSizeLoader';
import TableNoData from '../../TableNoData/TableNoData';




const Withdraw = () => {
    const [user, setUser] = useContext(userContext)
    const [inputInfo, setInputInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [count, setCount] = useState({
        pendingMobileRecharge: 0,
        pendingWithdraw: 0
    })
    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
    let pending = false

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

    const withdrawFormHandler = (e) => {
        e.preventDefault();

        if (!user.domeUser) {
            const currentInput = { ...inputInfo }
            setInputInfo({})

            const providerValue = document.getElementById("porvider").value;
            const amountValue = document.getElementById("amount").value;

            const floorValue = Math.floor(amountValue)
            const chargeValue = floorValue * (5 / 100)
            const floorBalance = Math.floor(user.balance)


            if (Math.floor(chargeValue + floorValue + count.pendingMobileRecharge + count.pendingWithdraw) <= floorBalance) {
                if (!currentInput.porvider) {
                    currentInput["porvider"] = providerValue;
                }
                if (!currentInput.amount) {
                    currentInput["charge"] = chargeValue
                    const floorValue = Math.floor(amountValue)
                    currentInput["amount"] = floorValue;
                }

                if (Math.floor(currentInput.amount) && Math.floor(currentInput.phoneNumber)) {
                    if (currentInput.porvider && currentInput.amount && currentInput.phoneNumber) {
                        const floorValue = Math.floor(currentInput.amount)
                        const floorBalance = Math.floor(user.balance)

                        if (floorValue <= floorBalance) {
                            setIsLoading(true)
                            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/withdraw`, {
                                method: "POST",
                                body: JSON.stringify(currentInput),
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
                                    }
                                    if (data.sucess) {
                                        sucess(data.sucess)
                                    }
                                    if (data.failed) {
                                        setInputInfo(currentInput)
                                        failed(data.failed)
                                    }
                                })
                        } else {
                            setInputInfo(currentInput)
                            failed(`Sorry, you can't withdraw more then ${user.balance}tk !`)
                        }
                    } else {
                        setInputInfo(currentInput)
                        failed("Please fill the form and try angain !")
                    }

                } else {
                    setInputInfo(currentInput)
                    failed(`Phone Number and Amount must be number !`)
                }


            } else {
                setInputInfo(currentInput)
                failed(`Sorry, you can't withdraw more then ${user.balance}tk !`)
            }
        } else {
            failed("You Can't Make Any Request as Dome User !")
        }

    };
    const withdrawRequestDecline = (e, id, requestID) => {
        if (!user.domeUser) {
            if (!pending && id && requestID) {
                pending = true

                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/withdraw_request_decline`, {
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
                        pending = false
                        if (data.sucess) {
                            e.target.parentNode.parentNode.style.display = "none"
                            sucess("Sucessfully Deleted Withdraw Item ! ")
                        } else {
                            failed("Failed to Delet Withdraw Item ! ")
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
                <h3 className='main-title'>Request for Withdraw</h3>
            </div>
            <div className='common-form-styles'>
                <form autoComplete="off" className="card" onSubmit={withdrawFormHandler}>
                    <div className='common-form-select-container'>
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
                    <label className="input">
                        <input className="input__field" type="text" name="phoneNumber_valid" value={inputInfo.phoneNumber ? inputInfo.phoneNumber : ""} placeholder=" " onChange={handleInput} />
                        <span className="input__label">Your Mobile-Bank Number</span>
                    </label>
                    {
                        !isLoading ? <input type="submit" value="Submit" /> :
                            <SmallSizeLoader />
                    }
                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Withdraw History</h4>
                    <FaAngleDoubleDown className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    {
                        user?.withdrawInfo && user.withdrawInfo.length > 0 ? <>
                            <div className='scroll-text'><p>scroll it</p></div>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Withdraw Method</th>
                                            <th>Withdraw Number	</th>
                                            <th>Withdraw Ammount</th>
                                            <th>Transfer Date</th>
                                            <th>Option</th>
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
                                                    <td className='table-date'>{items.date}</td>
                                                    {
                                                        !items?.apporoval && <td className='delete_icon'>
                                                            <img src={deleteIcon} alt="_image" title='Delete' onClick={(e) => withdrawRequestDecline(e, user._id, items.requestID)} />
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
                                <TableNoData text="You Have No Withdraw History Yet !" />
                            </>
                    }
                </div>

            </div>
            <ToastContainer />
        </section>
    );
};

export default Withdraw;