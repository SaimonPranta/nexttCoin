import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import Generation from './Generation';

const Index = () => {
    return (
        <DashboardLayout props={<Generation />} />
    );
};

export default Index;