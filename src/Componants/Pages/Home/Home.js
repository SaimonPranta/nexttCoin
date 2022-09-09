import React from 'react';
import BackgroundThems from '../../BackgroundThems/BackgroundThems';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Global from './Global/Global';
import InvestmentPlan from './InvestmentPlan/InvestmentPlan';
import OurTopLeader from './OurTopLeader/OurTopLeader';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
    return (
        <main>
            <BackgroundThems />
            <Header/>
            <Slider/>
            <WelcomeSection/>
            <InvestmentPlan/>
            <OurTopLeader/>
            <Global/>
            <Services />
            <PaymentMethod />
            <Footer/>
        </main>
    );
};

export default Home;