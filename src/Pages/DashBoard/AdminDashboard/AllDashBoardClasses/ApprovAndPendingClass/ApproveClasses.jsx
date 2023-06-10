import React from 'react';

const ApproveClasses = ({Sdata, refetch}) => {

  if(!Sdata){
    return <div className='min-h-screen text-5xl text-black'>Loading......</div>
  }

  const {className,classPhoto, _id, classStatus, classRatings} =Sdata

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={classPhoto} alt="classPhoto" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classStatus}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{classRatings}</button>
        </div>
      </div>
    </div>
  );
};

export default ApproveClasses;