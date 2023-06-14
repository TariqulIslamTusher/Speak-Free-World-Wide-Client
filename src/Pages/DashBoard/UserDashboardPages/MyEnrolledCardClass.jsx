import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const MyEnrolledCardClass = ({ Sdata ,refetch}) => {

    const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, description, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata


    return (
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure><img src={classImage} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold border-b-2 border-yellow-700 pb-3">{className}</h2>
                <p className='text-xl font-bold'>Instructor: {instructorName}</p>
                <div className='leading-0'>
                    <p className='text-lg'><span className='font-bold'>Available Seat:</span> {availableSeat}</p>
                    <p className='text-lg'><span className='font-bold'>Attended Students:</span> {attendedStudent}</p>
                    <p className='text-lg'><span className='font-bold'>Price:</span> {price}</p>
                    <p className='text-lg font-bold'>Ratings: {classRatings}</p>
                    {description && <>
                        <p className='text-lg font-bold'>Descriptions:</p>
                        <span> {description}</span>
                    </>}
                </div>

                <div className="flex justify-end items-center">


                    <Rating
                        className='text-2xl text-yellow-500 md:ml-auto'
                        placeholderRating={parseInt(classRatings)}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        fullSymbol={<FaStar></FaStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                    ></Rating>


                </div>
            </div>
        </div>
    );
};

export default MyEnrolledCardClass;