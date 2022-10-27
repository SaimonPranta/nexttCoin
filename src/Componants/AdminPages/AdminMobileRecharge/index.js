import React from 'react';
import AdminMobileRecharge from './AdminMobileRecharge';
import AdminDashboardLayout from '../../AdminDashboardLayout/AdminDashboardLayout';

const Index = () => {
    return (
        <AdminDashboardLayout Props={<AdminMobileRecharge />} />
    );
};

export default Index;