import React from 'react';

export const FilterImage = ({data = ''}) => {
    return (
        <div>
            <img src={data} alt="" />
        </div>
    );
};
