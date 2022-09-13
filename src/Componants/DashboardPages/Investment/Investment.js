import React, { useEffect, useState } from 'react';
import './Investment.css';
import { IoIosArrowUp } from 'react-icons/io';
import { FiCopy } from "react-icons/fi";

import { table_collaps } from '../../../Functions/table_collaps';
import bkashLogo from '../../../Assets/Mobile_bank_logo/bkash-removebg-preview.png';
import nagadLogo from '../../../Assets/Mobile_bank_logo/download__3_-removebg-preview.png';
import rocketLogo from '../../../Assets/Mobile_bank_logo/roket-removebg-preview.png';

const Investment = () => {
    const copyText = (e) => {
        const copyBtn = e.target.parentNode.parentNode.childNodes[1];
        const copedNotice = e.target.parentNode.parentNode.childNodes[2];
        copyBtn.select()
        document.execCommand("copy");

        copedNotice.classList.add('active-notice');
        setTimeout(() => {
            copedNotice.classList.remove('active-notice');
        }, 2000);
    };


    return (
        <section className='text-white'>
            <div>
                <h3 className='main-title'>Investment</h3>
            </div>
            <div className='common-form-styles'>
                <form autocomplete="off" class="card">
                    <div className='payment-provider-section '>
                        <div>
                            <img src={bkashLogo} alt="logo"></img>
                            <input type='text' value='013000196901' />
                            <label >Personal</label>
                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={nagadLogo} alt="logo"></img>
                            <input type='text' value='013000196902' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                        <div>
                            <img src={rocketLogo} alt="logo"></img>
                            <input type='text' value='013000196903' />
                            <label >Personal</label>

                            <span className='copy-btn'><FiCopy onClick={copyText} title="copy" /></span>
                        </div>
                    </div>
                    <div className='select-input-common-style'>
                        <label>Select Payment Method</label>
                        <select name='provider' id="porvider">
                            <option value="Bkash"> bKash </option>
                            <option value="Rocket">Rocket</option>
                            <option value="Nagad"> Nagad</option></select>
                    </div>
                    <label class="input">
                        <input class="input__field" type="text" name="number" placeholder=" " />
                        <span class="input__label">Your Mobile-Bank Number</span>
                    </label>
                    <label class="input">
                        <input class="input__field" type="numbe" name="amount" placeholder=" " />
                        <span class="input__label"> Amount of TK </span>
                    </label>

                    <input type="submit" value="Submit" />

                </form>
            </div>
            <div className='common-table-style'>
                <div className='d-flex align-items-center'>
                    <h4>Investment History</h4>
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

export default Investment;