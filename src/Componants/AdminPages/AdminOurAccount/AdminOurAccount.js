import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { adminContex } from '../../../App';


const OurAccount = () => {
    const [allUser] = useContext(adminContex)
    const [totalBalance, setTotalBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalShopingBalance, setTotalShopingBalance] = useState(0)
    const [count, setCount] = useState({
        approveInvestment: 0,
        pendingInvestment: 0,
        approveWithdraw: 0,
        pendingWithdraw: 0

    })



    useEffect(() => {
        if (allUser && allUser.length > 0) {
            let totalBalance = 0
            let totalIncome = 0
            let totalShopingBalance = 0



            allUser.map((user) => {
                totalBalance = totalBalance + user.balance
                totalIncome = totalIncome + user.totalIncome
                totalShopingBalance = totalShopingBalance + user.shoppingBalance

                setTotalBalance(totalBalance)
                setTotalIncome(totalIncome)
                setTotalShopingBalance(totalShopingBalance)

            })

            allUser.map((user) => {
                let approveInvestment = 0
                let pendingInvestment = 0
                let approveWithdraw = 0
                let pendingWithdraw = 0


                const currentCount = {...count}
                user.investment.map( item => {
                    if (item) {
                        if (item.apporoval) {
                            approveInvestment = approveInvestment + item.amount
                            currentCount["approveInvestment"] = approveInvestment
                            setCount(currentCount)
                        }
                        if (!item.apporoval) {
                            pendingInvestment = pendingInvestment + item.amount
                            currentCount["pendingInvestment"] = pendingInvestment
                            setCount(currentCount)
                        }
                    }
                })
                user.withdrawInfo.map( item => {
                    if (item) {
                        if (item.apporoval) {
                            approveWithdraw = approveWithdraw + item.amount
                            currentCount["approveWithdraw"] = approveWithdraw
                            setCount(currentCount)
                        }
                        if (!item.apporoval) {
                            pendingWithdraw = pendingWithdraw + item.amount
                            currentCount["pendingWithdraw"] = pendingWithdraw
                            setCount(currentCount)
                        }
                    }
                })

            })

        }

    }, [allUser])


    return (
        <section className='my-account text-white'>
            <div>
                <h3 className='main-title'>Our Account</h3>
            </div>
            <div className='balance-card'>
                <div>
                    <h4><FaRegMoneyBillAlt /> Balance</h4>
                    <p>Shoping Balance <span>: {totalShopingBalance} TK</span></p>
                    <p>Total Income <span>: {totalIncome} TK</span></p>
                    <p>Total Balance <span>: {totalBalance} TK</span></p>
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
        </section>
    );
};

export default OurAccount;