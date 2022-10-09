import React from 'react';
import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Generation from './Generation.js';
import Dashboardheader from '../../../Dashboardheader/Dashboardheader';


const Index = () => {
    return (
        <main className='dashboard'>
            <Dashboardheader />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body' id='dashboard_body'>
                    <Generation />
                </div>
            </div>
        </main>
    );
};

export default Index;