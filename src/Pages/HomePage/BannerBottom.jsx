import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const BannerBottom = () => {
    return (
        <div className='container mx-auto px-16 bg-slate-300 border-0 border-b-8 border-yellow-600 rounded-3xl shadow-4xl flex justify-center divide-x-2 text-center'>
            <div className='flex flex-col justify-between w-full mx-auto p-3'>
                <h2>23</h2>
                <p>Language</p>
            </div>
            <div className='flex flex-col justify-between w-full mx-auto p-3'>
                <h2>Ratings: 4.5</h2>
                <Rating
                    className='text-2xl text-yellow-500'
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                ></Rating>
            </div>
            <div className='flex flex-col justify-between w-full mx-auto p-3'>
                <h2>2.3 k</h2>
                <p>Learners</p>
            </div>
        </div>
    );
};

export default BannerBottom;