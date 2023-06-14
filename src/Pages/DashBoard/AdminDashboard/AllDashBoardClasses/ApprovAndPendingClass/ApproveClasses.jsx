import React from 'react';
import Loader from '../../../../../Components/Loader/Loader';

const ApproveClasses = ({ Sdata, refetch }) => {

  if (!Sdata) {
    return <Loader></Loader>
  }
  refetch()
  const { className, classImage, _id,availableSeat,  classStatus, classRatings, instructorName , instructorEmail, attendedStudent} = Sdata

  return (
    <div className={`card card-compact w-full bg-base-100 shadow-xl ${classStatus === 'approved' ? 'border-2 border-green-500' : ''}`}>
      <figure ><img className='object-fit w-full object-center' src={classImage} alt="classImage" /></figure>
      <div className="card-body items-center text-center">
                <div className='bg-slate-100 mx-auto text-center p-4 w-full rounded-xl'>
                    <h2 className="card-title lg:text-2xl ">{instructorName}</h2>
                    <div className='text-left font-bold'>
                        <p className='flex items-center'>Email: {instructorEmail}</p>
                        <p className='flex items-center'>Total Student Appear: {attendedStudent}</p>
                        <p className='flex items-center'>Total Class: {parseInt(classRatings)}</p>
                        <p className='flex items-center'>Avaiable Seat: {availableSeat}</p>
                    </div>
                </div>
                
            </div>
    </div>
  );
};

export default ApproveClasses;