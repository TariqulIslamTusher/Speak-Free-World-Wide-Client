import React from 'react';

const InstructorCard = ({ Sdata }) => {
    const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata

    return (
        <div className="card w-11/12 md:w-full group mx-auto px-5 bg-base-100 shadow-xl hover:border hover:border-yellow-500 transition-all duration-500">
            <figure className="px-10 pt-10">
                <img src={instructorImage} className="rounded-full group-hover:scale-105 transition-all duration-300 shadow-lg w-full object-cover object-center" />
            </figure>
            <div className="md:card-body m-3 items-center text-center">
                <div className='bg-slate-100 mx-auto text-center p-4 w-full rounded-xl'>
                    <h2 className="card-title lg:text-2xl ">{instructorName}</h2>
                    <div className='text-left font-bold'>
                        <p className='flex items-center'>Email: {instructorEmail}</p>
                        <p className='flex items-center'>Total Student Appear: {attendedStudent}</p>
                        <p className='flex items-center'>Total Class: {parseInt(classRatings)}</p>
                        <p className='flex items-center'>Avaiable Seat: {availableSeat}</p>
                    </div>
                </div>
                <div>
                    <button className="Cbutton">Details</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;