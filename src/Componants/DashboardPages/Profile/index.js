import React from 'react';
import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import Profile from './Profile';

const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body'>
                    <Profile />
                </div>
            </div>
        </main>
    );
};

export default Index;