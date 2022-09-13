import React from 'react';
import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import MyAccount from './MyAccount';

const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                    <DashboardNavication />
                <div className='dashboard-body'>
                    <MyAccount />
                </div>
            </div>
        </main>
    );
};

export default Index;