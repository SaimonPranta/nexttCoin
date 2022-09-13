import React from 'react';
import './Generation.css';
import '../../DashboardPages/DashboardBodyStyles/spam-code.css';
import { IoIosArrowUp } from 'react-icons/io';
import { table_collaps } from '../../../Functions/table_collaps';
import SearchBox from '../../SearchBox/SearchBox';


const Generation = () => {
    

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
                        <p className='ps-3'>01881476432</p>
                    </div>
                    <div className='d-flex'>
                        <p>Your Upline Referral Number :</p>
                        <p className='ps-3'>01881476432</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Active Generation Members :</p>
                        <p className='ps-3'>120 Person</p>
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
                                <p className='ps-3'>210 Person</p>
                            </div>
                            <button>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>2nd Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>3rd Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>4th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button className='bubbly-button'>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>5th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>6th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>7th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>8th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>9th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>

                        <div className='d-flex gen-list-item'>
                            <div className='d-flex'>
                                <p>10th Generation</p>
                                <p className='ps-3'>20 Person</p>
                            </div>
                            <button>View List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='common-searc-container text-white pt-4 pb-0 mb-0'>
                <form className='d-flex pb-0 mb-0'>
                    <label className='taitel'>Search Users</label>
                    <SearchBox placeholder="Search by Phone Number..."/>
                </form>
            </div>




            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <div className='select-input-common-style sub-generation'>
                        <h4 className='me-2'>Select User</h4>
                        <select name='porvider' id="porvider">
                            <option value="all"><h4>All User</h4></option>
                            <option value="active">Active User</option>
                            <option value="inactive">Inactive User</option>
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
                                    <th>Receiver Number	</th>
                                    <th>Transfer Ammount</th>
                                    <th>Transfer Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Saimon Pranta</td>
                                    <td>01881476432</td>
                                    <td>100 tk</td>
                                    <td>10 janu 2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Generation;