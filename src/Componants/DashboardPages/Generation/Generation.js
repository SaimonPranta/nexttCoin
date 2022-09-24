import React from 'react';
import './Generation.css';
import '../../DashboardPages/DashboardBodyStyles/spam-code.css';
import { IoIosArrowUp } from 'react-icons/io';
import { table_collaps } from '../../../Functions/table_collaps';
import SearchBox from '../../SearchBox/SearchBox';
import { userContext } from '../../../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Generation = () => {
    const [user, setUser] = useContext(userContext)
    const [allUser, setAllUser] = useState([])
    const [filterUser, setFilterUser] = useState([])
    const [condition, setCondition] = useState("all")
    const [gen, setGen] = useState("All")

    let totalUser = user?._id && user.generation_1.length + user.generation_2.length + user.generation_3.length + user.generation_4.length + user.generation_5.length + user.generation_6.length + user.generation_7.length + user.generation_8.length + user.generation_9.length + user.generation_10.length

    useEffect(() => {
        const cooki = document.cookie.split("=")[1];
        if (cooki) {
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/generation_all`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setAllUser(data.data);
                    }
                })
        }
    }, [])

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


    const perGeneration = (gen) => {
        if (gen) {
            if (gen === 1 ) {
                setGen("1st")
            } else if(gen === 2){
                setGen("2nd")
            }else if(gen === 3){
                setGen("3rd")
            }else{
                setGen(`${gen}th`)
            }
            const cooki = document.cookie.split("=")[1];
            if (cooki) {
                fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/per_generation?gen=${gen}`, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        authorization: `Bearer ${cooki}`
                    }
                }).then(res => res.json())
                    .then(data => {
                        if (data.data) {
                            setAllUser(data.data);
                        }
                    })
            }
        }
    }



    return (
        <section className='text-white generaion-main'>
            <div>
                <h3 className='main-title'>Your Generation User </h3>
            </div>
            <div className='common-form-styles'>
                <div class=" genaration ">
                    <div>
                        <h4>Generation Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Your Phone/Referral Number :</p>
                        <p className='ps-3'>{user?.phoneNumber && user.phoneNumber}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Your Upline Referral Number :</p>
                        <p className='ps-3'>{user?.referNumber && user.referNumber}</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Active Generation Members :</p>
                        <p className='ps-3'>{totalUser} Person</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Inactive Generation Members :</p>
                        <p className='ps-3'>20 Person</p>
                    </div>
                </div>
            </div>
            <div className='genaration-list'>
                <div className='d-block'>
                    <h4>Generation List</h4>
                </div>
                <div className='generation-list-container row'>
                    <div className='col-6'>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>1st Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_1.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(1)}>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>2nd Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_2.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(2)}>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>3rd Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_3.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(3)}>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>4th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_4.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(4)}>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>5th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_5.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(5)}>View List</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>6th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_6.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(6)}>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>7th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_7.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(7)}>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>8th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_8.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(8)}>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>9th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_9.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(9)}>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>10th Generation</p>
                                <p className='ps-3'>{user?._id && user.generation_10.length} Person</p>
                            </div>
                            <button onClick={() => perGeneration(10)}>View List</button>
                        </div>
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
                <h4 className='me-2'>{gen && gen} Generation Users History</h4>
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
                                    <th>Phone Number</th>
                                    <th>Is Acive</th>
                                    <th>Number Of User</th>
                                    <th>Transfer Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterUser?.length > 0 && filterUser.map((user, index) => {

                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.firstName} {user.lastName}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.isActive ? "Yes" : "No"}</td>
                                            <td>{
                                                user.generation_1.length + user.generation_2.length + user.generation_3.length + user.generation_4.length + user.generation_5.length + user.generation_6.length + user.generation_7.length + user.generation_8.length + user.generation_9.length + user.generation_10.length
                                            }</td>
                                            <td>{user.joinDate}</td>
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

export default Generation;