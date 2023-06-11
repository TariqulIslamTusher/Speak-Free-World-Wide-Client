import React from 'react';
import Loader from '../../../../../Components/Loader/Loader';

const ApproveClasses = ({ Sdata, refetch }) => {

  if (!Sdata) {
    return <Loader></Loader>
  }
  refetch()
  const { className, classImage, _id, classStatus, classRatings, instructorName } = Sdata

  return (
    <div className={`card card-compact w-full bg-base-100 shadow-xl ${classStatus === 'approved' ? 'border-2 border-green-500' : ''}`}>
      <figure ><img className='object-fit w-full object-center' src={classImage} alt="classImage" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classStatus}</p>
        <p>{instructorName}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{classRatings}</button>
        </div>
      </div>
    </div>
  );
};

export default ApproveClasses;