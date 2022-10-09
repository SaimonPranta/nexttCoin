import React from 'react';
import { handleDashboardCollaps } from '../../Functions/handleDashbordCollaps';
import './NavigationCollapsIcon.css';

const NavigationCollapsIcon = () => {
    return (
        <div className='dashborard_nav_collaps_icon' onClick={handleDashboardCollaps} id="dashborard_nav_collaps_icon">
        </div>
    );
};

export default NavigationCollapsIcon;