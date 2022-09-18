import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
import AdminWithdraw from './AdminWithdraw';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    <AdminWithdraw/>
                </div>
            </div>
        </main>
    );
};

export default Index;