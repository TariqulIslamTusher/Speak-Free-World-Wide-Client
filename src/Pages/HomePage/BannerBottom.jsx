import React from 'react';
import CountUp from 'react-countup';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const BannerBottom = () => {
    return (
        <div className='container flex flex-col md:flex-row mx-auto px-16 bg-slate-300 border-0 border-b-8 border-yellow-600 rounded-3xl shadow-4xl justify-center divide-y-4 md:divide-y-0 md:divide-x-2 text-center'>
            <div className='flex flex-col justify-between w-full mx-auto p-3'>
                <CountUp
                    start={0}
                    end={85}
                    duration={5}
                >{({ countUpRef }) => (
                    <span className='font-bold text-3xl' ref={countUpRef} />
                )}
                </CountUp>
                <p className='text-xl font-bold'>Language</p>
            </div>
            <div className='flex flex-col-reverse justify-between w-full mx-auto p-3'>
                <h2 className='font-bold text-xl'>Ratings:
                    <CountUp
                        start={0}
                        end={4.5}
                        duration={5}
                    >{({ countUpRef }) => (
                        <span className='font-bold' ref={countUpRef} />
                    )}
                    </CountUp>

                </h2>
                <Rating
                    className='text-2xl text-yellow-500 '
                    placeholderRating={4.5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                ></Rating>
            </div>
            <div className='flex flex-col justify-between w-full mx-auto p-3'>
                <h2 className='font-bold text-3xl'>2.3 k</h2>
                <p className='text-xl font-bold'>Learners</p>
            </div>
        </div>
    );
};

export default BannerBottom;