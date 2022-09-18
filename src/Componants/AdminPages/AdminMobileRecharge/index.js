import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
import AdminMobileRecharge from './AdminMobileRecharge';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    <AdminMobileRecharge/>
                </div>
            </div>
        </main>
    );
};

export default Index;