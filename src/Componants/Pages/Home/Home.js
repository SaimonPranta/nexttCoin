import React from 'react';
import BackgroundThems from '../../BackgroundThems/BackgroundThems';
import Header from '../../Header/Header';
import Global from './Global/Global';
import InvestmentPlan from './InvestmentPlan/InvestmentPlan';
import OurTopLeader from './OurTopLeader/OurTopLeader';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <div>
            <BackgroundThems />
            <Header/>
            <Slider/>
            <WelcomeSection/>
            <InvestmentPlan/>
            <OurTopLeader/>
            <Global/>
            <Services />
            
        </div>
    );
};

export default Home;