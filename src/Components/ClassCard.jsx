import React from 'react';

const ClassCard = ({Sdata}) => {

  if(!Sdata){
    return <div className='min-h-screen text-5xl text-black'>Loading......</div>
  }

  const {className,classPhoto,classViewNumber,seatAvailability,studentAttendees, _id, instructor} =Sdata

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={classPhoto} alt="classPhoto" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;