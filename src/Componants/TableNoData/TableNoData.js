import React from 'react';

const TableNoData = ({text = "You Have No Items Yet In This Section !"}) => {
    return (
        <div className='table-no-data'>
            <p>{text}</p>
        </div>
    );
};

export default TableNoData;