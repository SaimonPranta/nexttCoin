import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { adminContex } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';

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