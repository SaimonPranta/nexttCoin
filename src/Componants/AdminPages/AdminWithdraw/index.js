import React from 'react';
import AdminWithdraw from './AdminWithdraw';
import AdminDashboardLayout from '../../AdminDashboardLayout/AdminDashboardLayout';

const Index = () => {
    return (
        <AdminDashboardLayout Props={<AdminWithdraw />} />
    );
};

export default Index;