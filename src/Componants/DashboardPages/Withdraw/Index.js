import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import Withdraw from './Withdraw';

const Index = () => {
    return (
        <DashboardLayout props={<Withdraw />} />
    );
};

export default Index;