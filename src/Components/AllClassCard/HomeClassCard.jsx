import React from 'react';
import { Link } from 'react-router-dom';

const HomeClassCard = ({Sdata}) => {
  const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={classImage} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classView}</p>
        <p>{classStatus}</p>
        <div className="card-actions justify-end">
          <Link to='/classes'><button className="btn btn-outline btn-ghost">Show All</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeClassCard;