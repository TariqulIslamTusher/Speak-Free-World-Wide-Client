import React, { useRef, useState } from 'react';
import Loader from '../../../../../Components/Loader/Loader';
import { toast } from 'react-toastify';

const DeniedClass = ({ Sdata, refetch }) => {
    const [disable, setDisable] = useState(false)
    if (!Sdata) {
        return <Loader></Loader>
    }
    const { className, classImage, _id, availableSeat, classStatus, classRatings, instructorName, instructorEmail, attendedStudent } = Sdata

    // feedback functions
    const textareaRef = useRef(null);


    // handle feed back fuct
    const handleFeedBack = (id) => {
        let textareaValue = textareaRef.current.value;

        fetch(`http://localhost:3000/class/${id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ feedBack: textareaValue })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                textareaRef.current.value = ''
                refetch()
                toast.success('Feedback sent to Instructor')
                setDisable(true)
            })
    }


    return (
        <>
            <div className={`card card-compact  w-full bg-red-50 shadow-xl ${classStatus === 'deny' ? 'border-2 border-red-500' : ''}`}>
                <figure><img className='object-fit w-full object-center' src={classImage} alt="classImage" /></figure>
                <div className='bg-slate-100 mx-auto text-center p-4 w-full rounded-xl'>
                    <h2 className="card-title lg:text-2xl ">{instructorName}</h2>
                    <div className='text-left font-bold'>
                        <p className='flex items-center'>Email: {instructorEmail}</p>
                        <p className='flex items-center'>Total Student Appear: {attendedStudent}</p>
                        <p className='flex items-center'>Total Class: {parseInt(classRatings)}</p>
                        <p className='flex items-center'>Avaiable Seat: {availableSeat}</p>
                    </div>
                </div>
                <div className="card-actions justify-end p-4">

                    {/* The button to open modal and feedback */}

                    <label htmlFor="my_modal_6" disabled={disable} className="btn btn-sm btn-outline btn-ghost">{disable ? 'Feedback given' : 'FeedBack'}</label>
                </div>

            </div>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Send Feedback and keep the class in Pending.</h3>
                    <p className='my-2'>You can deny the class to move it in denied list, you can give feedback there too</p>

                    <textarea required ref={textareaRef} cols={50} className='w-full p-6 border border-black col-50 rounded-lg'></textarea>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" onClick={() => handleFeedBack(_id)} className='btn btn-accent'>Send</label>
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeniedClass;