import React from 'react';
import Dashboardheader from '../../../Dashboardheader/Dashboardheader';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import EditUser from './EditUser';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <EditUser />
                </div>
            </div>
        </main>
    );
};

export default Index;