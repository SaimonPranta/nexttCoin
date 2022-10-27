import React from 'react';
import AdminInvestment from './AdminInvestment';
import AdminDashboardLayout from '../../AdminDashboardLayout/AdminDashboardLayout';

const Index = () => {
    return (
        <AdminDashboardLayout Props={<AdminInvestment />} />
    );
};

export default Index;