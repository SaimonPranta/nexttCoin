import React from 'react';
import BackgroundThems from '../../BackgroundThems/BackgroundThems';
import Header from '../../Header/Header';
import InvestmentPlan from './InvestmentPlan/InvestmentPlan';
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
        </div>
    );
};

export default Home;