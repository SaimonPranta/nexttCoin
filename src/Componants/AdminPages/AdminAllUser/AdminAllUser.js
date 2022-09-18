import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { table_collaps } from '../../../Functions/table_collaps';
import SearchBox from '../../SearchBox/SearchBox';


const AdminAllUser = () => {
    

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
                        <p className='ps-3'>200 person</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Active User :</p>
                        <p className='ps-3'>190 Person</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Unactive User :</p>
                        <p className='ps-3'>120 Person</p>
                    </div>
                </div>
                <div class=" genaration ">
                    <div>
                        <h4>Total Pending Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Investment :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Request :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Balance Request :</p>
                        <p className='ps-3'>5</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Mobile Recharge Request :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Pending Withdraw Request :</p>
                        <p className='ps-3'>200</p>
                    </div>
                </div>
                <div class=" genaration ">
                    <div>
                        <h4>Total Approved Summary</h4>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Investment :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Request :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Balance Request :</p>
                        <p className='ps-3'>5</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Mobile Recharge Request :</p>
                        <p className='ps-3'>20</p>
                    </div>
                    <div className='d-flex'>
                        <p>Total Approved Withdraw Request :</p>
                        <p className='ps-3'>200</p>
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

export default AdminAllUser;