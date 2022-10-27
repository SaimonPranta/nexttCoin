import React, { useEffect } from 'react';
import { useState } from 'react';
import './OurTopLeader.css';
import myimg from '../../../../Assets/porofile/user_avatar.jpg';

const OurTopLeader = () => {
    const [allUser, setAllUser] = useState([])



    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/public_users`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(res => res.json())
            .then(data => {
                if (data.data.length > 0) {
                    setAllUser(data.data);
                }
            })
    }, []);


    return (
        <section className='leader-section'>
            <div className='container py-5 mt-3'>
                <div>
                    <h4>TRANDING PEOPLE</h4>
                    <h3>Our Top 10 Leaders</h3>
                </div>
                <div className='common-table-style'>
                    <div className='active-common-table-container common-table-container' id='table-container'>
                        <div className='scroll-text'><p>scroll it</p></div>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Position</th>
                                        <th>Total Member</th>
                                        <th>Total Income</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allUser.length > 0 && allUser.map((user, index) => {
                                            if (index < 10) {
                                                return <tr key={user._id}>
                                                    <td className='table-porfile-pic'>
                                                        <img src={user?.profilePicture ? `${process.env.REACT_APP_SERVER_HOST_URL}/${user.profilePicture}` : myimg} alt="" />
                                                        <p>
                                                            {user.firstName} {user.lastName}
                                                        </p>
                                                    </td>
                                                    {/* <td>{user.firstName} {user.firstName} {user.lastName} </td> */}
                                                    <td>{`01******${user.phoneNumber.substring(8)}`} </td>
                                                    <td>Not Yet</td>
                                                    <td> {user.generation_1.length + user.generation_2.length + user.generation_3.length + user.generation_4.length + user.generation_5.length + user.generation_6.length + user.generation_7.length + user.generation_8.length + user.generation_9.length + user.generation_10.length} </td>
                                                    <td>{user.totalIncome} Tk</td>
                                                </tr>
                                            }
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurTopLeader;