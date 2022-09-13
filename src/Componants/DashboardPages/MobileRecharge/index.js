import React from 'react';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import MobileRecharge from './MobileRecharge.js';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body'>
                    <MobileRecharge />
                </div>
            </div>
        </main>
    );
};

export default Index;