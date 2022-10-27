import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import Investment from './Investment';

const Index = () => {
    return (
        <DashboardLayout props={<Investment />} />
    );
};

export default Index;