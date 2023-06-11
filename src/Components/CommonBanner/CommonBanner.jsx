import React from 'react';

const CommonBanner = ({children}) => {
    return (
        <div className='bg-yellow-200 custom-text md:p-5 text-center md:text-5xl uppercase'>
            {children}
        </div>
    );
};

export default CommonBanner;