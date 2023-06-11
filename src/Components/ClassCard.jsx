import React from 'react';

const ClassCard = ({Sdata}) => {

  if(!Sdata){
    return <div className='min-h-screen text-5xl text-black'>Loading......</div>
  }

  const {className,classImage, _id, classStatus} =Sdata

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={classImage} alt="classImage" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classStatus}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;