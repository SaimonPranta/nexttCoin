import React from 'react';
import '../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import Dashboardheader from '../../Dashboardheader/Dashboardheader';
import DashboardNavication from '../DashboardNavication/DashboardNavication';

const DashboardLayout = ({ props }) => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    {props}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;