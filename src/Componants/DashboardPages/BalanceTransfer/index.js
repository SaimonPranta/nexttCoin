import React from 'react';
import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import BalanceTransfer from './BalanceTransfer';
const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container'>
                <DashboardNavication />
                <div className='dashboard-body'>
                    <BalanceTransfer />
                </div>
            </div>
        </main>
    );
};

export default Index;