import React from 'react';

const PendingClass = ({Sdata, refetch}) => {

  if(!Sdata){
    return <div className='min-h-screen text-5xl text-black'>Loading......</div>
  }

  const {className,classPhoto, _id, classStatus} =Sdata

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src={classPhoto} alt="classPhoto" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classStatus}</p>
        <div className="flex flex-col md:flex-row w-full justify-end gap-3">
          <button className="btn btn-sm  btn-outline btn-success">Approve</button>
          <button className="btn btn-sm  btn-outline btn-error">Deny</button>
          <button className="btn btn-sm btn-outline btn-ghost">Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default PendingClass;