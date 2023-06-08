import React from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {
    return (
        <div>
            <CommonBanner>All Our Classes</CommonBanner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto'>
                <ClassCard></ClassCard>
            </div>
        </div>
    );
};

export default Classes;