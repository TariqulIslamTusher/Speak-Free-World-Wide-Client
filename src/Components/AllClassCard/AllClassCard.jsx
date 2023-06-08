import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import HomeClassCard from './HomeClassCard';

const AllClassCard = () => {
    return (
        <div>
            <SectionTitle heading='Our popular classes' subHeading='Popular Classes basis on viewer number'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <HomeClassCard></HomeClassCard>
            </div>
        </div>
    );
};

export default AllClassCard;