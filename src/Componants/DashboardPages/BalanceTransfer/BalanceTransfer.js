import React, { useContext, useEffect, useState } from 'react';
import './BalanceTransfer.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { table_collaps } from '../../../Functions/table_collaps';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';



const BalanceTransfer = () => {
    const [condition, setConditon] = useState({
        loadUser: false
    })
    const [user, setUser] = useContext(userContext);

    const [balanceInfo, setBalanceInfo] = useState({});
    const [message, setMessage] = useState({});
    const cooki = document.cookie.split("=")[1];
    let count = 0

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                const currentCondition = {
                    loadUser: true
                }
                setConditon(currentCondition)
            }, 2000);
        }
    }, []);

    const handleUpdateInput = (e) => {
        // const currentInput = { ...balanceInfo }
        // const inputFildName = e.target.name;
        // const inputFildValue = e.target.value;
        // if (inputFildName === "amount") {
        //     const floorValue = Math.floor(inputFildValue)
        //     currentInput[inputFildName] = floorValue
        //     setBalanceInfo(currentInput)
        // } else if (inputFildName === "selectUser") {
        //     currentInput[inputFildName] = inputFildValue
        //     setBalanceInfo(currentInput)
        // }

        // setBalanceInfo(currentInput);
        // if (user.balance <= currentInput.amount) {
        //     setMessage({ failed: "The provided ammount are higher than your balance." });
        // } else {
        //     setMessage({});
        // }
        inputHandler(e, balanceInfo, setBalanceInfo)
    };


    const balanceTransferHandle = (e) => {
        e.preventDefault();
        const requestInput = { ...balanceInfo }
        if (balanceInfo.phoneNumber && balanceInfo.amount) {
            if (Math.floor(balanceInfo.phoneNumber) && Math.floor(balanceInfo.amount)) {
                if (user.balance >= balanceInfo.amount) {
                    if (balanceInfo.amount >= 20) {
                        setMessage({})
                        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/balance_transfer`, {
                            method: "POST",
                            body: JSON.stringify(balanceInfo),
                            headers: {
                                'content-type': 'application/json; charset=UTF-8',
                                authorization: `Bearer ${cooki}`
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.data) {
                                    setBalanceInfo({})
                                    const updatedUser = { ...data.data }
                                    setUser(updatedUser);
                                }
                                if (data.sucess) {
                                    setBalanceInfo({})
                                    setMessage({ sucess: data.sucess });
                                    setTimeout(() => {
                                        setMessage({})
                                    }, 7000);
                                }
                                if (data.failed) {
                                    setBalanceInfo(requestInput)
                                    setMessage({ failed: data.failed });
                                    setTimeout(() => {
                                        setMessage({})
                                    }, 7000);
                                }
                            })
                        setBalanceInfo({})
                    } else {
                        setMessage({ failed: "Sorry, you can not tranfer lass then 20tk." })
                    }
                } else {
                    setMessage({ failed: "Sorry, you have not sufficient Balance." })
                }

            } else {
                setMessage({ failed: "Phone Number & Amount must be number." })
            }
        } else {
            setMessage({ failed: "Please fill the form & try again" })
        }
    };



    return (
        <section className='balance-transfer text-white'>
            <div>
                <h3 className='main-title'>Balance Transfer</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card" onSubmit={balanceTransferHandle} >
                    <label class="input">
                        <input class="input__field" type="text" name='phoneNumber_valid' value={balanceInfo.phoneNumber ? balanceInfo.phoneNumber : ""} onChange={handleUpdateInput} id="select-user" placeholder=" " />
                        <span class="input__label">User Phone Number</span>
                    </label>
                    <label class="input">
                        <input class="input__field" type="text" name="amount" value={balanceInfo.amount ? balanceInfo.amount : ""} onChange={handleUpdateInput} placeholder=" " />
                        <span class="input__label"> Amount </span>
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
                    <h4>Balance Transfer History</h4>
                    <FaAngleDoubleDown  className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>Transfer Number	</th>
                                    <th>Transfer Ammount</th>
                                    <th>Transfer Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.balanceTransperInfo && user.balanceTransperInfo.map((items, index) => {
                                        return <tr key={items.requestID}>
                                            <td>{index + 1}</td>
                                            <td>{items.name}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.date}</td>
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

export default BalanceTransfer;