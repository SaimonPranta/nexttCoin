import React from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";


const OurAccount = () => {
    return (
        <section className='my-account text-white'>
            <div>
                <h3 className='main-title'>Our Account</h3>
            </div>
            <div className='balance-card'>
                <div>
                    <h4><FaRegMoneyBillAlt /> Balance</h4>
                    <p>Pending Balance <span>: 232 TK</span></p>
                    <p>Approved Balance <span>: 232 TK</span></p>
                    <p>Total Balance <span>: 232 TK</span></p>
                </div>
                <div>
                    <h4><FaRegMoneyBillAlt /> Deposits</h4>
                    <p>Pending Deposit <span>: 232 TK</span></p>
                    <p>Approved Deposit <span>: 232 TK</span></p>
                    <p>Total Deposit <span>: 232 TK</span></p>
                </div>
                <div>
                    <h4><FaRegMoneyBillAlt /> Incomes</h4>
                    <p>Pending Income <span>: 232 TK</span></p>
                    <p>Approved Income <span>: 232 TK</span></p>
                    <p>Total Income <span>: 232 TK</span></p>
                </div>
                <div>
                    <h4><FaRegMoneyBillAlt /> Withdraws</h4>
                    <p>Pending Withdraw <span>: 232 TK</span></p>
                    <p>Approved Withdraw <span>: 232 TK</span></p>
                    <p>Total Withdraw <span>: 232 TK</span></p>
                </div>

            </div>
        </section>
    );
};

export default OurAccount;