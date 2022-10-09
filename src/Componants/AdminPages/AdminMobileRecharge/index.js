import React from 'react';
import Dashboardheader from '../../../Dashboardheader/Dashboardheader';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import AdminMobileRecharge from './AdminMobileRecharge';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <AdminMobileRecharge/>
                </div>
            </div>
        </main>
    );
};

export default Index;