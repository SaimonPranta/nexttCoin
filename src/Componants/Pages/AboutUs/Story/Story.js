import React from 'react';
import './Story.css';
import abou_top_img from '../../../../Assets/About_img/abt_img.jpg';

const Story = () => {
    return (
        <section className='story'>
            <div className='container'>
                <div className='sub-story row p-5 my-5'>
                    <div className='col-6'>
                        <img src={abou_top_img} alt="_image" />
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-between'>
                        <div className='story-text'>
                            <h4>OUR STORY</h4>
                            <h6>One of the best investing marketing
                                tools is High yield investment program.</h6>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, we clear consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor out incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;