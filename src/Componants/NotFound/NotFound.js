import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            {/* about */}
            {/* <div className="about">
                <NavLink className="bg_links social portfolio"  to="" >
                    <span className="icon" />
                </NavLink>
                <NavLink className="bg_links social dribbble" to="" >
                    <span className="icon" />
                </NavLink>
                <NavLink className="bg_links social linkedin" to="" >
                    <span className="icon" />
                </NavLink>
                <a className="bg_links logo" />
            </div> */}
            {/* end about */}
            <section className="wrapper">
                <div className="container">
                    <div id="scene" className="scene" data-hover-only="false">
                        <div className="circle" data-depth="1.2" />
                        <div className="one" data-depth="0.9">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <div className="two" data-depth="0.60">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <div className="three" data-depth="0.40">
                            <div className="content">
                                <span className="piece" />
                                <span className="piece" />
                                <span className="piece" />
                            </div>
                        </div>
                        <p className="p404" data-depth="0.50">404</p>
                        <p className="p404" data-depth="0.10">404</p>
                    </div>
                    <div className="text">
                        <article>
                            <p>Oop! Page Not Found. <br />Go back to the Homepage!</p>
                            <NavLink to="/">Home</NavLink>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;