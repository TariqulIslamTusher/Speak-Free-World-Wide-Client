import React from 'react';

const InstructorCard = ({Sdata}) => {
    const {className,classPhoto,classViewNumber,seatAvailability,studentAttendees, _id, instructor}= Sdata

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={classPhoto} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{className}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;