import React from 'react';
import Dashboardheader from '../../../Dashboardheader/Dashboardheader';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import AdminInvestment from './AdminInvestment';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <AdminInvestment/>
                </div>
            </div>
        </main>
    );
};

export default Index;