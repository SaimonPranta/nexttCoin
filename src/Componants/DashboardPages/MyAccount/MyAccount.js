import React, { useState } from 'react';
import './MyAccount.css';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useContext } from 'react';
import { userContext } from '../../../App';
import { useEffect } from 'react';
import SucessModal from '../../ResposnseModal/SucessModal';
import { NavLink } from 'react-router-dom';
import sucess from '../../../Functions/ResponseModal/sucesss';
import failed from '../../../Functions/ResponseModal/failed';


const MyAccount = () => {
    const [user, setUser] = useContext(userContext)
    const [count, setCount] = useState({
        approveInvestment: 0,
        pendingInvestment: 0,
        approveWithdraw: 0,
        pendingWithdraw: 0
    })
    const cooki = document.cookie.replaceAll("token", "").replaceAll("=", "").replaceAll(";", "");
    let isSubmit = false

    useEffect(() => {
        if (user?._id) {

            let approveInvestment = 0
            let pendingInvestment = 0
            let approveWithdraw = 0
            let pendingWithdraw = 0

            user.investment.map(req => {
                const currentCount = { ...count }
                if (req.apporoval) {
                    approveInvestment = approveInvestment + req.amount
                    currentCount['approveInvestment'] = approveInvestment
                    setCount(currentCount)
                }
                if (!req.apporoval) {
                    pendingInvestment = pendingInvestment + req.amount
                    currentCount['pendingInvestment'] = approveInvestment
                    setCount(currentCount)
                }
            })

            user.withdrawInfo.map(req => {
                const currentCount = { ...count }
                if (req.apporoval) {
                    approveWithdraw = approveWithdraw + req.amount
                    currentCount['approveWithdraw'] = approveWithdraw
                    setCount(currentCount)
                }
                if (!req.apporoval) {
                    pendingWithdraw = pendingWithdraw + req.amount
                    currentCount['pendingWithdraw'] = pendingWithdraw
                    setCount(currentCount)
                }
            })


        }
    }, [])

    const handleActivation = () => {
        if (!isSubmit && user._id) {
            isSubmit = true
            fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/activation?id=${user._id}`, {
                method: "POST",
                body: JSON.stringify({}),
                headers: {
                    'content-type': 'application/json; charset=UTF-8',
                    authorization: `Bearer ${cooki}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    isSubmit = false
                    if (data.data) {
                        setUser(data.data)
                        sucess("Congratulations, Your Account are Active Now !")
                    }
                    if (data.failed) {
                        isSubmit = false
                        failed(data.failed)
                    }
                })
        }
    }


    return (
        <section className='my-account text-white'>
            <div>
                <h3 className='main-title'>My Account</h3>
            </div>
            {
                !user.isActive && user.balance < 50 && <div className='activation-secton'>
                    <p>Your account aren't Active, to active your account you need to invest minimum 50 TK ! <NavLink to="/dashboard/investment">Invest Now</NavLink></p>
                </div>
            }
            {
                !user.isActive && user.balance >= 50 && <div className='activation-secton'>
                    <p>Your account aren't Active, to active your account click acive now ! <a onClick={handleActivation}>Active Now</a></p>
                </div>
            }

            <div className='balance-card'>
                <div>
                    <h4><FaRegMoneyBillAlt /> Balance</h4>
                    <p>Total Balance <span>: {user?.balance ? user.balance : 0} TK</span></p>
                    <p>Total Income <span>: {user?.totalIncome ? user.totalIncome : 0} TK</span></p>
                    <p>Shoping Balance <span>: {user?.shoppingBalance ? user.shoppingBalance : 0} TK</span></p>

                </div>
                <div>
                    <h4><FaRegMoneyBillAlt /> Investments</h4>
                    <p>Pending Investment <span>: {count?.pendingInvestment} TK</span></p>
                    <p>Approved Investment <span>: {count?.approveInvestment} TK</span></p>
                    <p>Total Investment <span>: {count?.pendingInvestment + count?.approveInvestment} TK</span></p>
                </div>
                <div>
                    <h4><FaRegMoneyBillAlt /> Withdraws</h4>
                    <p>Pending Withdraw <span>: {count?.approveWithdraw} TK</span></p>
                    <p>Approved Withdraw <span>: {count?.pendingWithdraw} TK</span></p>
                    <p>Total Withdraw <span>: {count.approveWithdraw + count.pendingWithdraw} TK</span></p>
                </div>
            </div>
            <SucessModal />

        </section>
    );
};

export default MyAccount;