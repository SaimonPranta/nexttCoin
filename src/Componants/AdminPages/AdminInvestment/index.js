import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
import AdminInvestment from './AdminInvestment';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    <AdminInvestment/>
                </div>
            </div>
        </main>
    );
};

export default Index;