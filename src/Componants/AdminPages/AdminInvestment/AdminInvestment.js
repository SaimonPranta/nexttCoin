import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { adminContex } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';
import processingHandle from '../../../Functions/processingHandle';
import checkIcon from '../../../Assets/icons/icons8-done-26.png';
import deleteIcon from '../../../Assets/icons/icons8-delete-32 (1).png';


const AdminInvestment = () => {
    const [allUser, setAllUser] = useContext(adminContex)
    const [condition, setCondition] = useState("pending")
    const [filterUser, setFilterUser] = useState([])

    const [count, setCount] = useState({
        approveInvestment: 0,
        pendingInvestment: 0,
        approveInvestmentReq: 0,
        pendingInvestmentReq: 0,

    })
    const cooki = document.cookie.split("=")[1];

    let itemsCount = 0

    useEffect(() => {
        if (allUser && allUser.length > 0) {
            allUser.map((user) => {
                let approveInvestment = 0
                let pendingInvestment = 0
                let approveInvestmentReq = 0
                let pendingInvestmentReq = 0


                const currentCount = { ...count }
                user.investment.map(item => {
                    if (item) {
                        if (item.apporoval) {
                            approveInvestment = approveInvestment + item.amount
                            approveInvestmentReq = approveInvestmentReq + 1
                            currentCount["approveInvestment"] = approveInvestment
                            currentCount["approveInvestmentReq"] = approveInvestmentReq
                            setCount(currentCount)
                        }
                        if (!item.apporoval) {
                            pendingInvestment = pendingInvestment + item.amount
                            pendingInvestmentReq = pendingInvestmentReq + 1
                            currentCount["pendingInvestment"] = pendingInvestment
                            currentCount["pendingInvestmentReq"] = pendingInvestmentReq
                            setCount(currentCount)
                        }
                    }
                })

            })
        }
    }, [allUser])

    useEffect(() => {
        if (allUser && allUser.length > 0) {
            if (condition === "approved") {
                const array = []
                allUser.map(user => {
                    user.investment.map(item => {
                        item["userID"] = user._id
                        if (item.apporoval) {
                            array.push(item)
                            setFilterUser(array)
                        }
                    })
                })
            } else if (condition === "pending") {
                const array = []
                allUser.map(user => {
                    user.investment.map(item => {
                        item["userID"] = user._id
                        if (!item.apporoval) {
                            array.push(item)
                            setFilterUser(array)
                        }
                    })
                })
            }
        }
    }, [allUser, condition])

    const handleUserChange = (e) => {
        setCondition(e.target.value)
    }
    const investmentApproval = (e, id, requestID, amount) => {


        if ( id && requestID && amount && !condition.processing) {
            processingHandle(condition, setCondition)

            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/investment_approval`, {
                method: "POST",
                body: JSON.stringify({
                    id,
                    requestID,
                    amount
                }),
                headers: {
                    'content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.sucess) {
                        // e.target.parentNode.parentNode.style.display = "none"
                    }
                })
        }
    };

    const investmentRequestDecline = (e, id, requestID) => {

        if (id && requestID) {
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
                    if (data.sucess) {
                        e.target.parentNode.parentNode.style.display = "none"
                    }

                })
        }
    };


    return (
        <section className='balance-transfer text-white'>
            <div>
                <h3 className='main-title'>Investment Request</h3>
            </div>
            <div class=" genaration ">
                <div>
                    <h4>Total Investment Summary</h4>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Investment Request :</p>
                    <p className='ps-3'>{count.approveInvestmentReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Investment Request :</p>
                    <p className='ps-3'>{count.pendingInvestmentReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Investment Request :</p>
                    <p className='ps-3'>{count.approveInvestmentReq + count.pendingInvestmentReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Investment Balance:</p>
                    <p className='ps-3'>{count.pendingInvestment} tk</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Investment Balance :</p>
                    <p className='ps-3'>{count.approveInvestment} tk</p>
                </div>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Investment Request History</h4>
                </div>

                <div className='select-input-common-style sub-generation'>
                    <h4 className='me-2'>Select User</h4>
                    <select name='porvider' id="porvider" onChange={handleUserChange}>
                        <option value="pending">Pending User</option>
                        <option value="approved">Approved User</option>
                        <option value="all"><h4>All User</h4></option>
                    </select>
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
                                    {
                                       condition === "pending" && <th colSpan="2">Option</th>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser && allUser.length > 0 && condition === "all" && allUser.map((user, index) => {

                                        return user.investment.map((items) => {
                                            itemsCount = itemsCount + 1
                                            return <tr key={items.requestID}>
                                                <td>{itemsCount}</td>
                                                <td>{items.provider}</td>
                                                <td>{items.number}</td>
                                                <td>{items.amount} Tk</td>
                                                <td>{items.apporoval ? "Approved" : "Pending"}</td>
                                                <td>{items.date}</td>
                                            </tr>
                                        })
                                    })
                                }
                                {
                                    filterUser && filterUser.length > 0 && condition !== "all" && filterUser.map(items => {
                                        itemsCount = itemsCount + 1
                                        return <tr key={items.requestID}>
                                            <td>{itemsCount}</td>
                                            <td>{items.provider}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.apporoval ? "Approved" : "Pending"}</td>
                                            <td>{items.date}</td>
                                            {
                                                !items?.apporoval && <td className='collSpan_icons collspan_check_icon'>
                                                    <img src={checkIcon} alt="_image" onClick={ (e) => investmentApproval(e, items.userID, items.requestID, items.amount)} />
                                                    </td>
                                            }
                                            {
                                                !items?.apporoval && <td className='collSpan_icons collspan_delete_icon'>
                                                    <img src={deleteIcon} alt="_image" onClick={(e) => investmentRequestDecline(e, items.userID, items.requestID)} />
                                                    </td>
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

export default AdminInvestment;