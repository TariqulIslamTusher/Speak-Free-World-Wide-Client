import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-3/5 mx-auto py-7 md:mt-8'>
            <p className='text-yellow-700 py-3 font-mono'>---{subHeading}---</p>
            <h2 className='md:text-5xl uppercase py-3 border-y-2 border-yellow-600'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;