import React from 'react';
import Footer from '../../Footer/Footer';
import PaymentMethod from '../Home/PaymentMethod/PaymentMethod';
import Map from './Map/Map';

const ContactUs = () => {
    return (
        <main>
            <Map/>
            <PaymentMethod/>
            <Footer/>
        </main>
    );
};

export default ContactUs;