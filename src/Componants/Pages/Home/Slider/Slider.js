import React from 'react';
import './Slider.css';
import slider_img_1 from '../../../../Assets/Slider_img/shopping-sign-orange-cart-wooden-68498907.jpg';
import { AiOutlineArrowLeft } from "react-icons/ai";


const Slider = () => {
    return (
        <div className='slider mt-5  '>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div>
                            <div class="d-flex text-white container">
                                <div class="col-6 d-flex flex-column  justify-content-center ms-5 slider-items">
                                    <h2 className='pb-2'>OFTEN HAVE SMALL</h2>
                                    <h3 className='pb-4'>Invest Your Money For Future</h3>
                                    <div>
                                        <button> Start Now</button>
                                        <button> View Plans</button>
                                    </div>
                                </div>
                                <img src={slider_img_1} class="col-4" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <div class="d-flex text-white container">
                                <div class="col-6 d-flex flex-column  justify-content-center ms-5 slider-items">
                                    <h2 className='pb-2'>OFTEN HAVE SMALL</h2>
                                    <h3 className='pb-4'>Invest Your Money For Future</h3>
                                    <div>
                                        <button> Start Now</button>
                                        <button> View Plans</button>
                                    </div>
                                </div>
                                <img src={slider_img_1} class="col-4" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div>
                            <div class="d-flex text-white container">
                                <div class="col-6 d-flex flex-column  justify-content-center ms-5 slider-items">
                                    <h2 className='pb-2'>OFTEN HAVE SMALL</h2>
                                    <h3 className='pb-4'>Invest Your Money For Future</h3>
                                    <div>
                                        <button> Start Now</button>
                                        <button> View Plans</button>
                                    </div>
                                </div>
                                <img src={slider_img_1} class="col-4" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev slide-handler me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"><AiOutlineArrowLeft /></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next slide-handler ms-2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"><AiOutlineArrowLeft /></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>









            {/* <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex text-white">
                        <div class="col-6 d-flex flex-column  justify-content-evenly ms-5 slider-items">
                            <h2>OFTEN HAVE SMALL</h2>
                            <h3>Invest Your Money For Future</h3>
                            <div>
                                <button> Start Now</button>
                                <button> View Plans</button>
                            </div>
                        </div>
                        <img src={slider_img_1} class="col-4" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div> */}
        </div>
    );
};

export default Slider;