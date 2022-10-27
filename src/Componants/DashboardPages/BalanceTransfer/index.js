import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import BalanceTransfer from './BalanceTransfer';

const Index = () => {
    return (
        <DashboardLayout props={<BalanceTransfer />} />
    );
};

export default Index;