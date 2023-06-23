import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const HomeClassCard = ({ Sdata }) => {
  const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, description, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata
  return (
    <div className="card w-full px-2  bg-base-100 shadow-xl image-full hover:scale-105 transition-all duration-500">
      <figure><img src={classImage} /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold border-b-2 border-yellow-700 pb-3">{className}</h2>
        <p className='text-xl font-bold'>Instructor: {instructorName}</p>
        <div className='leading-0'>
          <p className='text-lg'><span className='font-bold'>Available Seat:</span> {availableSeat}</p>
          <p className='text-lg'><span className='font-bold'>Total View:</span> {classView}</p>
          <p className='text-lg'><span className='font-bold'>Price:</span> {price}</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className='flex items-center justify-between gap-3'>
            <Rating
              className='text-2xl text-yellow-500 md:ml-auto'
              placeholderRating={parseInt(classRatings)}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              fullSymbol={<FaStar></FaStar>}
              placeholderSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className='text-xl font-bold'>{classRatings}</span>
          </div>

          <div>
            <Link to='/classes'><button className="Cbutton">VIEW MORE</button></Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeClassCard;