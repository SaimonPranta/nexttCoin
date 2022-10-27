import React from 'react';
import './Story.css';
import abou_top_img from '../../../../Assets/About_img/abt_img.jpg';

const Story = () => {
    return (
        <section className='story'>
            <div className='container-lg'>
                <div className='sub-story row p-5 my-5'>
                    <div className='col-sm-6 col-12'>
                        <img src={abou_top_img} alt="_image" />
                    </div>
                    <div className='col-sm-6 col-12 mt-sm-0 mt-5 d-flex flex-column justify-content-between'>
                        <div className='story-text'>
                            <h4>OUR STORY</h4>
                            <h6>One of the best investing marketing
                                tools is High yield investment program.</h6>
                        </div>
                        <div>
                            <p>
                                The journey of NexttCoin was not an easy and smooth, but effort was more strong. Alhamdulilah, form 15th October 2022 we start our journey with a few dreamer person. Since the organization start to now we are trying to provide a best earning way. We are always flexible about client. We never promise to porvide automatic income because we belive in hard work.
                            </p>
                            {/* <p>
                                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, we clear consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor out incididunt ut labore et dolore magna aliqua. Amet facilisis magna etiam tempor orci.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;