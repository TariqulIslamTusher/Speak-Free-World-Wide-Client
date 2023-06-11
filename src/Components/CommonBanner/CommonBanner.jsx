import React from 'react';

const CommonBanner = ({children}) => {
    return (
        <div className="bg-slate-600">
            <div className='w-full custom-text md:p-5 text-center md:text-5xl uppercase'>
            {children}
        </div>
        </div>
    );
};

export default CommonBanner;