import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import PaymentMethod from '../Home/PaymentMethod/PaymentMethod';
import Map from './Map/Map';
// AIzaSyBIAVp8wd0oQWDEvNJGGzKdg9VBVmlpJ0w

const ContactUs = () => {
    return (
        <main>
            <Header/>
            <Map/>
            <PaymentMethod/>
            <Footer/>
        </main>
    );
};

export default ContactUs;