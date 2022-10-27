import React from 'react';
import './FullScreenLoader.css';

const FullSCreenLoader = () => {
    return (
        <div className="full-screen-loader " id='full-screen-loader'>
            <div className="loader">
                <div className='loading-text'>
                    <h5 >Loading<span>...</span></h5>
                </div>
            </div>

        </div>
    );
};

export default FullSCreenLoader;