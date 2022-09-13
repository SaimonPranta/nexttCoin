import React from 'react';
import './MobileRecharge.css';
import { IoIosArrowUp } from 'react-icons/io';
import { table_collaps } from '../../../Functions/table_collaps';

const MobileRecharge = () => {
    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Request for Mobile Recharge</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card">
                    <div className='mobile-recharge'>
                        <div className='select-input-common-style'>
                            <label>Select Your SIM Provider</label>
                            <select name='provider' id="porvider">
                                <option value="Robi"> Robi </option>
                                <option value="Grameenphone">Grameenphone</option>
                                <option value="banglalink"> banglalink</option>
                                <option value="Airtel"> Airtel</option>
                                <option value="Teletalk"> Teletalk</option>
                            </select>
                        </div>

                        <div className='select-input-common-style'>
                            <label>Select Your SIM Type</label>
                            <select name='provider' id="porvider">
                                <option value="Prepaid"> Prepaid SIM </option>
                                <option value="Postpaid">Postpaid SIM</option>
                            </select>
                        </div>
                        <div className='select-input-common-style'>
                            <label>Select Amount</label>
                            <select name='provider' id="porvider">
                                <option value="20">20 TK </option>
                                <option value="30">30 TK </option>
                                <option value="50">50 TK </option>
                                <option value="100">100 TK </option>
                            </select>
                        </div>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="number" placeholder=" " />
                        <span class="input__label">Phone Number</span>
                    </label>
                    <input type="submit" value="Submit" />

                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Mobile Recharge History</h4>
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

        </section>
    );
};

export default MobileRecharge;