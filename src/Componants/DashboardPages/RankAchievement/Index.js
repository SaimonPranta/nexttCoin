import React from 'react';
import DashboardNavication from '../../DashboardNavication/DashboardNavication';
import Header from '../../Header/Header';
import RankAchievement from './RankAchievement.js';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <DashboardNavication />
                <div className='dashboard-body'>
                    <RankAchievement />
                </div>
            </div>
        </main>
    );
};

export default Index;