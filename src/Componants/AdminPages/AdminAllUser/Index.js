import React from 'react';
import AdminAllUser from './AdminAllUser';
import AdminDashboardLayout from '../../AdminDashboardLayout/AdminDashboardLayout';

const Index = () => {
    return (
        <AdminDashboardLayout Props={<AdminAllUser />} />
    );
};

export default Index;