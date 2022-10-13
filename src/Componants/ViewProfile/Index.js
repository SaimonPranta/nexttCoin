import React from 'react';
import Dashboardheader from '../../Dashboardheader/Dashboardheader';
import AdminDashboardNavication from '../AdminDashboardNavication/AdminDashboardNavication';
import ViewProfile from './ViewProfile';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <ViewProfile />
                </div>
            </div>
        </main>
    );
};

export default Index;