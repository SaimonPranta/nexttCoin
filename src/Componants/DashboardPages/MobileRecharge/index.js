import React from 'react';
import Dashboardheader from '../../../Dashboardheader/Dashboardheader';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import MobileRecharge from './MobileRecharge.js';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <MobileRecharge />
                </div>
            </div>
        </main>
    );
};

export default Index;