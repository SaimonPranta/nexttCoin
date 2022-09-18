import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
import AdminOurAccount from './AdminOurAccount';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    <AdminOurAccount/>
                </div>
            </div>
        </main>
    );
};

export default Index;