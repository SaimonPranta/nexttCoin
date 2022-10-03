import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { adminContex } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';
import SearchBox from '../../SearchBox/SearchBox';
import { BsThreeDotsVertical } from 'react-icons/bs';


const AdminAllUser = () => {
    const [allUser, setAllUser] = useContext(adminContex)
    const [activeUser, setActiveUser] = useState(0)
    const [condition, setCondition] = useState("all")
    const [filterUser, setFilterUser] = useState([])

    const [pendingInvestment, setPendingInvestment] = useState(0)
    const [pendingMobileRequest, setPendingMobileRequest] = useState(0)
    const [pendingWithdrawRequest, setPendingWithdrawRequest] = useState(0)

    const [approvedInvestment, setApprovedInvestment] = useState(0)
    const [approvedMobileRequest, setApprovedMobileRequest] = useState(0)
    const [approvedWithdrawRequest, setApprovedWithdrawRequest] = useState(0)



    useEffect(() => {
        if (allUser && allUser.length > 0) {
            let activeUser = 0;
            let pendingInvestment = 0
            let pendingMobileRequest = 0
            let pendingWithdrawRequest = 0

            let approvedInvestmentRequest = 0
            let approvedMobileRequest = 0
            let approvedWithdrawRequest = 0


            allUser.map(user => {
                if (user.isActive) {
                    activeUser = activeUser + 1
                    setActiveUser(activeUser)
                }
            })
            allUser.map(user => {

                user.investment.map(req => {
                    if (!req.apporoval) {
                        pendingInvestment = pendingInvestment + 1
                        setPendingInvestment(pendingInvestment)
                    }
                })
            })

            allUser.map(user => {

                user.mobileRechareInfo.map(req => {
                    if (!req.apporoval) {
                        pendingMobileRequest = pendingMobileRequest + 1
                        setPendingMobileRequest(pendingMobileRequest)
                    }
                })
            })
            allUser.map(user => {

                user.withdrawInfo.map(req => {
                    if (!req.apporoval) {
                        pendingWithdrawRequest = pendingWithdrawRequest + 1
                        setPendingWithdrawRequest(pendingWithdrawRequest)
                    }
                })
            })


            allUser.map(user => {

                user.investment.map(req => {
                    if (req.apporoval) {
                        approvedInvestmentRequest = approvedInvestmentRequest + 1
                        setApprovedInvestment(approvedInvestmentRequest)
                    }
                })
            })

            allUser.map(user => {

                user.mobileRechareInfo.map(req => {
                    if (req.apporoval) {
                        approvedMobileRequest = approvedMobileRequest + 1
                        setApprovedMobileRequest(approvedMobileRequest)
                    }
                })
            })
            allUser.map(user => {

                user.withdrawInfo.map(req => {
                    if (req.apporoval) {
                        approvedWithdrawRequest = approvedWithdrawRequest + 1
                        setApprovedWithdrawRequest(approvedWithdrawRequest)
                    }
                })
            })


        }
    }, [allUser])

    useEffect(() => {
        if (allUser && allUser.length > 0) {
            if (condition === "active") {
                const allActiveUser = allUser.filter(user => user.isActive)
                setFilterUser(allActiveUser)
            } else if (condition === "unactive") {
                const allUnActiveUser = allUser.filter(user => !user.isActive)
                setFilterUser(allUnActiveUser)
            } else {
                setFilterUser([...allUser])
            }
        }
    }, [allUser, condition])

    const handleUserChange = (e) => {
        setCondition(e.target.value)
    }
    

    const handleProfileControl = (e) => {
        // e.target.parentNode.childNodes[0].style.display= "flex"
        e.target.parentNode.childNodes[0].classList.toggle("active_porfile_modal");
    }

    return (
        <section className='text-white generaion-main'>
            <div>
                <h3 className='main-title'>All User </h3>
            </div>
            <div className='common-form-styles'>
                <div class=" genaration ">
                    <div>
                        <h4>All User Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Total User :</p>
                        <p className='ps-3'>{allUser?.length} person</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Active User :</p>
                        <p className='ps-3'>{activeUser} Person</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Unactive User :</p>
                        <p className='ps-3'>{allUser.length - activeUser} Person</p>
                    </div>
                </div>
                <div class=" genaration ">
                    <div>
                        <h4>Total Pending Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Request :</p>
                        <p className='ps-3'>{pendingInvestment + pendingMobileRequest + pendingWithdrawRequest}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Investment :</p>
                        <p className='ps-3'>{pendingInvestment}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Mobile Recharge Request :</p>
                        <p className='ps-3'>{pendingMobileRequest}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Withdraw Request :</p>
                        <p className='ps-3'>{pendingWithdrawRequest}</p>
                    </div>
                </div>
                <div class=" genaration ">
                    <div>
                        <h4>Total Approved Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Request :</p>
                        <p className='ps-3'>{approvedInvestment + approvedMobileRequest + approvedWithdrawRequest}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Investment Request :</p>
                        <p className='ps-3'>{approvedInvestment}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Mobile Recharge Request :</p>
                        <p className='ps-3'>{approvedMobileRequest}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Withdraw Request :</p>
                        <p className='ps-3'>{approvedWithdrawRequest}</p>
                    </div>
                </div>
            </div>

            <div className='common-searc-container text-white pt-4 pb-0 mb-0'>
                <form className='d-flex pb-0 mb-0'>
                    <label className='taitel'>Search Users</label>
                    <SearchBox placeholder="Search by Phone Number..." />
                </form>
            </div>




            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <div className='select-input-common-style sub-generation'>
                        <h4 className='me-2'>Select User</h4>
                        <select name='porvider' id="porvider" onChange={handleUserChange}>
                            <option value="all"><h4>All User</h4></option>
                            <option value="active">Active User</option>
                            <option value="unactive">Unactive User</option>
                        </select>
                    </div>
                    <IoIosArrowUp className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Name</th>
                                    <th>Phone Number	</th>
                                    <th>Balance Ammount</th>
                                    <th>Account Status</th>
                                    <th>Joining Date</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody id='porfile_modal_control'>
                                {
                                    filterUser && filterUser.length > 0 && filterUser.map((user, index) => {
                                        return <tr key={user._id}>
                                            <td>{index + 1}</td>
                                            <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.balance}</td>
                                            <td>{user.isActive ? "Active" : "Unactive"}</td>
                                            <td>{user.joinDate}</td>
                                            <td className='icons three_dots'>
                                                <div className='porfile_control_modal' >
                                                    <h6>View Porfile</h6>
                                                    <h6>Edit Profile</h6>
                                                </div>
                                                <BsThreeDotsVertical onClick={handleProfileControl} />
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AdminAllUser;