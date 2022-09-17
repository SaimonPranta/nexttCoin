import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
// import BalanceTransfer from './BalanceTransfer';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container'>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    {/* <BalanceTransfer /> */}
                </div>
            </div>
        </main>
    );
};

export default Index;