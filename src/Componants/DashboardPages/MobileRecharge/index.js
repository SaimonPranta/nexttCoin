import React from 'react';
import DashboardLayout from '../../DashboardLayout/DashboardLayout';
import MobileRecharge from './MobileRecharge.js';


const Index = () => {
    return (
        <DashboardLayout props={<MobileRecharge />} />
    );
};

export default Index;