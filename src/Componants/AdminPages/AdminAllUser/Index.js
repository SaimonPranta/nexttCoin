import React from 'react';
import AdminDashboardNavication from '../../AdminDashboardNavication/AdminDashboardNavication';
import Header from '../../Header/Header';
import AdminAllUser from './AdminAllUser';
// import '../../DashboardPages/DashboardBodyStyles/DashboardBodyStyles.css';


const Index = () => {
    return (
        <main className='dashboard'>
            <Header />
            <div className='dashboard-container '>
                <AdminDashboardNavication />
                <div className='dashboard-body'>
                    <AdminAllUser/>
                </div>
            </div>
        </main>
    );
};

export default Index;