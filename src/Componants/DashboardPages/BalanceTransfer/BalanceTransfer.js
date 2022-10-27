import React, { useContext, useEffect, useState } from 'react';
import './BalanceTransfer.css';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { table_collaps } from '../../../Functions/table_collaps';
import { userContext } from '../../../App';
import inputHandler from '../../../Functions/inputHandler';
import { ToastContainer } from 'react-toastify';
import sucess from '../../../Functions/ResponseModal/sucesss';
import failed from '../../../Functions/ResponseModal/failed';


const BalanceTransfer = () => {
    const [condition, setConditon] = useState({
        loadUser: false
    })
    const [user, setUser] = useContext(userContext);

    const [balanceInfo, setBalanceInfo] = useState({});
    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
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
        inputHandler(e, balanceInfo, setBalanceInfo)
    };

    const balanceTransferHandle = (e) => {
        e.preventDefault();
        
        if (!user.domeUser) {
            const requestInput = { ...balanceInfo }
            if (balanceInfo.phoneNumber && balanceInfo.amount) {
                if (Math.floor(balanceInfo.phoneNumber) && Math.floor(balanceInfo.amount)) {
                    if (user.balance >= balanceInfo.amount) {
                        if (balanceInfo.amount >= 20) {
                            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/balance_transfer`, {
                                method: "POST",
                                body: JSON.stringify({
                                    ...balanceInfo,
                                    id: user._id
                                }),
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
                                        sucess(data.sucess)
                                    }
                                    if (data.failed) {
                                        failed(data.failed)
                                        setBalanceInfo(requestInput)
                                    }
                                })
                            setBalanceInfo({})
                        } else {
                            failed("Sorry, you can not tranfer lass then 20tk !")

                        }
                    } else {
                        failed("Sorry, you have not sufficient Balance.")
                    }

                } else {
                    failed("Phone Number & Amount must be number !")
                }
            } else {
                failed(" Please fill the form & try again !")
            }
        } else {
            failed("You Can't Make Any Request as Dome User !")
        }

    };



    return (
        <section className='balance-transfer text-white'>
            <div>
                <h3 className='main-title'>Balance Transfer</h3>
            </div>
            <div className='common-form-styles'>
                <form autoComplete="off" className="card" onSubmit={balanceTransferHandle} >
                    <label className="input">
                        <input className="input__field" type="text" name='phoneNumber_valid' value={balanceInfo.phoneNumber ? balanceInfo.phoneNumber : ""} onChange={handleUpdateInput} id="select-user" placeholder=" " />
                        <span className="input__label">User Phone Number</span>
                    </label>
                    <label className="input">
                        <input className="input__field" type="text" name="amount" value={balanceInfo.amount ? balanceInfo.amount : ""} onChange={handleUpdateInput} placeholder=" " />
                        <span className="input__label"> Amount </span>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Balance Transfer History</h4>
                    <FaAngleDoubleDown className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
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
                                            <td className='table-name'>{items.name}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td className='table-date'>{items.date}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default BalanceTransfer;