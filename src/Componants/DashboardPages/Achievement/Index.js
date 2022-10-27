import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import Achievement from './Achievement';

const Index = () => {
    return (
        <DashboardLayout props={<Achievement />} />
    );
};

export default Index;