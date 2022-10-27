import React from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import ViewProfile from './ViewProfile';


const Index = () => {
    return (
        <DashboardLayout props={<ViewProfile />} />
    );
};

export default Index;