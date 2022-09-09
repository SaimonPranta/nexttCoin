import React from 'react';
import BackgroundThems from '../../BackgroundThems/BackgroundThems';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Features from './Features/Features';
import InvestGroth from './InvestGroth/InvestGroth';
import Story from './Story/Story';

const AboutUs = () => {
    return (
        <main>
            <BackgroundThems />
            <Header/>
            <Story/>
            <InvestGroth/>
            <Features/>
            <Footer/>
        </main>
    );
};

export default AboutUs;