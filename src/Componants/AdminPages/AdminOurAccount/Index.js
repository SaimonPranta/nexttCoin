import React from 'react';
import AdminOurAccount from './AdminOurAccount';
import AdminDashboardLayout from '../../AdminDashboardLayout/AdminDashboardLayout';

const Index = () => {
    return (
        <AdminDashboardLayout Props={<AdminOurAccount />} />
    );
};

export default Index;