import React, { useContext, useEffect, useState } from 'react';
// import './MobileRecharge.css';
import { IoIosArrowUp } from 'react-icons/io';
import { adminContex } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';
import checkIcon from '../../../Assets/icons/icons8-done-26.png';
import deleteIcon from '../../../Assets/icons/icons8-delete-32 (1).png';
import processingHandle from '../../../Functions/processingHandle';




const AdminMobileRecharge = () => {
    const [allUser, setAllUser] = useContext(adminContex)
    const [condition, setCondition] = useState("pending")
    const [filterUser, setFilterUser] = useState([])
    let itemsCount = 0;
    const cooki = document.cookie.split("=")[1];


    const [count, setCount] = useState({
        approvedMobileRecharge: 0,
        pendingMobileRecharge: 0,
        approvedMobileRechargeReq: 0,
        pendingMobileRechargeReq: 0,

    })

    useEffect(() => {
        if (allUser && allUser.length > 0) {
            allUser.map((user) => {
                let approvedMobileRecharge = 0
                let pendingMobileRecharge = 0
                let approvedMobileRechargeReq = 0
                let pendingMobileRechargeReq = 0


                const currentCount = { ...count }
                user.mobileRechareInfo.map(item => {
                    console.log(item)
                    if (item) {
                        if (item.apporoval) {
                            approvedMobileRecharge = approvedMobileRecharge + item.amount
                            approvedMobileRechargeReq = approvedMobileRechargeReq + 1
                            currentCount["approvedMobileRecharge"] = approvedMobileRecharge
                            currentCount["approvedMobileRechargeReq"] = approvedMobileRechargeReq
                            setCount(currentCount)
                        }
                        if (!item.apporoval) {
                            pendingMobileRecharge = pendingMobileRecharge + item.amount
                            pendingMobileRechargeReq = pendingMobileRechargeReq + 1
                            currentCount["pendingMobileRecharge"] = pendingMobileRecharge
                            currentCount["pendingMobileRechargeReq"] = pendingMobileRechargeReq
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
                    user.mobileRechareInfo.map(item => {
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
                    user.mobileRechareInfo.map(item => {
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
    const mobileRechargeApproval = (e, id, requestID, amount) => {
        if (id && requestID && amount && !condition.processing) {
            processingHandle(condition, setCondition)

            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/mobile_recharge_approval`, {
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
                    console.log(data)
                    if (data.sucess) {
                        e.target.parentNode.parentNode.style.display = "none"
                    }
                    if (data.failed) {
                        setTimeout(() => {
                        }, 7000);
                    }
                })
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
                <h3 className='main-title'>Mobile Recharge Request</h3>
            </div>
            <div class=" genaration ">
                <div>
                    <h4>Total Mobile Recharge Request Summary</h4>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Mobile Recharge Request :</p>
                    <p className='ps-3'>{count.pendingMobileRechargeReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Mobile Recharge Request :</p>
                    <p className='ps-3'>{count.approvedMobileRechargeReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total  Mobile Recharge Request :</p>
                    <p className='ps-3'>{count.approvedMobileRechargeReq + count.pendingMobileRechargeReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Mobile Recharge:</p>
                    <p className='ps-3'>{count.pendingMobileRecharge} tk</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Mobile Recharge :</p>
                    <p className='ps-3'>{count.approvedMobileRecharge} tk</p>
                </div>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Mobile Recharge Request History</h4>
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

                                        return user.mobileRechareInfo.map((items) => {
                                            itemsCount = itemsCount + 1
                                            return <tr key={items.requestID}>
                                                <td>{itemsCount}</td>
                                                <td>{items.simProvider}</td>
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
                                            <td>{items.simProvider}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.apporoval ? "Approved" : "Pending"}</td>
                                            <td>{items.date}</td>
                                            {
                                                !items?.apporoval && <td className='collSpan_icons collspan_check_icon'>
                                                    <img src={checkIcon} alt="_image" onClick={(e) => mobileRechargeApproval(e,  items.userID, items.requestID, items.amount)} />
                                                </td>
                                            }
                                            {
                                                !items?.apporoval && <td className='collSpan_icons collspan_check_icon'>
                                                    <img src={deleteIcon} alt="_image" onClick={ e => mobileRechargeDecline(e, items.userID, items.requestID)} />
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

export default AdminMobileRecharge;