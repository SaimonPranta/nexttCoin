import React from 'react';
import './SearchBox.css';

const SearchBox = ({placeholder, setSearchInput, searchInput}) => {

    const searchBarStyle = () => {
        const active_search_box = document.getElementById("active-search-box");
        if (active_search_box) {
            active_search_box.classList.toggle("active-search-box");
        }
    }


    return (
        <div className='common-search-bar-wraper  ' id='active-search-box'>
            <div className='searc-icon-wraper' onClick={searchBarStyle}>
                <div className='sub-src-container' onClick={searchBarStyle}>
                    <input className='searc-icon' type="text" onClick={searchBarStyle} />
                    <span className='search-icon-handler' onClick={searchBarStyle} />
                </div>
            </div>

            <div className='search-box-wraper ' >
                <div class="rows">
                    <span>
                        <input class="gate" id="class" type="text" placeholder={placeholder ? placeholder : "type here.."} value={searchInput} onChange={ (e) => setSearchInput(e.target.value)} />
                        <label for="class"> Search</label>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;