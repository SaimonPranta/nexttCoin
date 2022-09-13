import React from 'react';
import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import Generation from './Generation.js';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body'>
                    <Generation />
                </div>
            </div>
        </main>
    );
};

export default Index;