import React from 'react';
import './PaymentMethod.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bkash from '../../../../Assets/Mobile_bank_logo/bkash-removebg-preview.png';
import nagad from '../../../../Assets/Mobile_bank_logo/download__3_-removebg-preview.png';
import dachbangla from '../../../../Assets/Mobile_bank_logo/Dutch-Bangla-Bank-logo-JAN-17-2201171056-2203070612-removebg-preview (5).png';
import roket from '../../../../Assets/Mobile_bank_logo/roket-removebg-preview.png';
import tap from '../../../../Assets/Mobile_bank_logo/tap-removebg-preview.png';
import upay from '../../../../Assets/Mobile_bank_logo/Untitled_2527_x_2527_px_3-removebg-preview.png';





const PaymentMethod = () => {


    return (
        <section className='payment py-5'>
            <div className='container'>
                <div>
                    <h4 >PAYMENT METHODS</h4>
                    <h3 className='pb-3'>Accepted Payment Method</h3>
                </div>
                <div>
                    <OwlCarousel className="owl-theme"
                     loop margin={10}
                     items={4}
                     loop={true}
                     mouseDrag={true}
                     touchDrag={true}
                     pullDrag={true}
                     dots={false}
                     autoplay={true}
                     autoplayTimeout="2000"
                     autoplayHoverPause={true}
                     nav={true}
                    //  responsive={}
                    >
                        <div className="item">
                            <img src={bkash} />
                        </div>
                        <div className="item">
                            <img src={nagad} />
                        </div>
                        <div className="item">
                            <img src={upay} />
                        </div>
                        <div className="item">
                            <img src={tap} />
                        </div>
                        <div className="item">
                            <img src={roket} />
                        </div>
                        <div className="item">
                            <img src={dachbangla} />
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethod;