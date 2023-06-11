import React from 'react';

const InstructorCard = ({ Sdata }) => {
    const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata

    return (
        <div className="card w-8/12 md:w-full mx-auto px-6 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={instructorImage} className="rounded-xl w-full object-cover object-center" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{attendedStudent}</h2>
                <p>{classRatings}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;