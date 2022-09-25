import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { adminContex } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';

const AdminWithdraw = () => {
    const [allUser, setAllUser] = useContext(adminContex)
    const [condition, setCondition] = useState("pending")
    const [filterUser, setFilterUser] = useState([])
    let itemsCount = 0;
    
    const [count, setCount] = useState({
        approveWithdraw: 0,
        pendingWithdraw: 0,
        approveWithdrawReq: 0,
        pendingWithdrawReq: 0,


    })

    useEffect(() => {
        if (allUser && allUser.length > 0) {
            allUser.map((user) => {
                let approveWithdraw = 0
                let pendingWithdraw = 0
                let approveWithdrawReq = 0
                let pendingWithdrawReq = 0



                const currentCount = { ...count }
                user.withdrawInfo.map(item => {
                    if (item) {
                        if (item.apporoval) {
                            approveWithdraw = approveWithdraw + item.amount
                            approveWithdrawReq = approveWithdrawReq + 1
                            currentCount["approveWithdraw"] = approveWithdraw
                            currentCount["approveWithdrawReq"] = approveWithdrawReq
                            setCount(currentCount)
                        }
                        if (!item.apporoval) {
                            pendingWithdraw = pendingWithdraw + item.amount
                            pendingWithdrawReq = pendingWithdrawReq + 1
                            currentCount["pendingWithdraw"] = pendingWithdraw
                            currentCount["pendingWithdrawReq"] = pendingWithdrawReq
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
                    user.withdrawInfo.map(item => {
                        if (item.apporoval) {
                            array.push(item)
                            setFilterUser(array)
                        }
                    })
                })
            } else if (condition === "pending") {
                const array = []
                allUser.map(user => {
                    user.withdrawInfo.map(item => {
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



    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Mobile Recharge Request</h3>
            </div>
            <div class=" genaration ">
                <div>
                    <h4>Total Withdraw Request Summary</h4>
                </div>
                <div className='d-flex'>
                    <p>Total Pending Withdraw Request :</p>
                    <p className='ps-3'>{count.pendingWithdrawReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Withdraw Request :</p>
                    <p className='ps-3'>{count.approveWithdrawReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Withdraw Request :</p>
                    <p className='ps-3'>{count.approveWithdrawReq + count.pendingWithdrawReq}</p>
                </div>
                <div className='d-flex'>
                    <p>Total Pending  Withdraw:</p>
                    <p className='ps-3'>{count.pendingWithdraw} tk</p>
                </div>
                <div className='d-flex'>
                    <p>Total Approved Withdraw :</p>
                    <p className='ps-3'>{count.approveWithdraw} tk</p>
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser && allUser.length > 0 && condition === "all" && allUser.map((user, index) => {

                                        return user.withdrawInfo.map((items) => {
                                            itemsCount = itemsCount + 1
                                            return <tr key={items.requestID}>
                                                <td>{itemsCount}</td>
                                                <td>{items.porvider}</td>
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
                                            <td>{items.porvider}</td>
                                            <td>{items.number}</td>
                                            <td>{items.amount} Tk</td>
                                            <td>{items.apporoval ? "Approved" : "Pending"}</td>
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

export default AdminWithdraw;