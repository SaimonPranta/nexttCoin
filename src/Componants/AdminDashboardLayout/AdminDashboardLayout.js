import React from 'react';
import Dashboardheader from '../../Dashboardheader/Dashboardheader';
import AdminDashboardNavication from '../AdminDashboardNavication/AdminDashboardNavication';

const AdminDashboardLayout = ({Props}) => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    {Props}
                </div>
            </div>
        </main>
    );
};

export default AdminDashboardLayout;