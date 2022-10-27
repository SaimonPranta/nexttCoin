import React from 'react';
import MyAccount from './MyAccount';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';

const Index = () => {
    return (
        <DashboardLayout props={<MyAccount />} />
    );
};

export default Index;