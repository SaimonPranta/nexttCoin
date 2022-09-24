import React from 'react';
import { useContext } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { userContext } from '../../../App';
import { table_collaps } from '../../../Functions/table_collaps';

const Withdraw = () => {
    const [user, setUser] = useContext(userContext)
    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Request for Withdraw</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card">
                    <div className='mobile-recharge'>
                        <div className='select-input-common-style'>
                            <label>Select Payment Method</label>
                            <select name='porvider' id="porvider">
                                <option value="Bkash">bKash</option>
                                <option value="Rocket">Rocket</option>
                                <option value="Nagad">Nagad</option>
                            </select>
                        </div>
                        <div className='select-input-common-style'>
                            <label>Select Amount</label>
                            <select name='amount' id="amount">
                                <option value="100">100 TK</option>
                                <option value="200">200 TK</option>
                                <option value="300">300 TK</option>
                                <option value="400">400 TK</option>
                                <option value="500">500 TK</option>
                                <option value="1000">1000 TK</option>
                            </select>
                        </div>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="number" placeholder=" " />
                        <span class="input__label">Your Mobile-Bank Number</span>
                    </label>
                    <input type="submit" value="Submit" />

                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Withdraw History</h4>
                    <IoIosArrowUp className='table-collaps-icon' id='collaps-icon' onClick={table_collaps} />
                </div>
                <div className='active-common-table-container common-table-container' id='table-container'>
                    <div className='scroll-text'><p>scroll it</p></div>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Withdraw Method</th>
                                    <th>Withdraw Number	</th>
                                    <th>Withdraw Ammount</th>
                                    <th>Request Status</th>
                                    <th>Transfer Date</th>
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

export default Withdraw;