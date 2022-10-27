import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import Profile from './Profile';


const Index = () => {
    return (
        <DashboardLayout props={<Profile />} />
    );
};

export default Index;