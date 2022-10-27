import React, { useContext } from 'react';
import { userContext } from '../../../App';
import BackgroundThems from '../../BackgroundThems/BackgroundThems';
import DemoUser from '../../DemoUser/DemoUser';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Global from './Global/Global';
import HowItWork from './HowItWork/HowItWork';
import InvestmentPlan from './InvestmentPlan/InvestmentPlan';
import OurTopLeader from './OurTopLeader/OurTopLeader';
import PaymentMethod from './PaymentMethod/PaymentMethod';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
    const [user] = useContext(userContext)

    return (
        <main>
            <BackgroundThems />
            <Header />
            {
                !user?._id && <DemoUser />
            }
            <Slider />
            <WelcomeSection />
            <HowItWork />
            <InvestmentPlan />
            <OurTopLeader />
            <Global />
            <Services />
            <PaymentMethod />
            <Footer />
        </main>
    );
};

export default Home;