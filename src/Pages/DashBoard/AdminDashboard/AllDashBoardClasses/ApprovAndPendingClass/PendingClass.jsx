import React, { useRef, useState } from 'react';
import Loader from '../../../../../Components/Loader/Loader';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaExpandArrowsAlt } from 'react-icons/fa';

const PendingClass = ({ Sdata, refetch }) => {
  const [disable, setDisable] = useState(false)
  const [loader, setLoader] = useState(false)
  const [denyLoader, setDenyLoader] = useState(false)


  if (!Sdata) {
    return <Loader></Loader>
  }
  const { className, classImage, _id,availableSeat,  classStatus, classRatings, instructorName , instructorEmail, attendedStudent} = Sdata




  const handleApprovedClassStatus = (id) => {
    setLoader(true)
    // patch the update the class status
    fetch(`https://speak-free-server.vercel.app/class/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ classStatus: 'approved' })
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        setLoader(false)
        refetch()
        Swal.fire(
          'Updated!',
          'Class moved to the approved list',
          'success',
        )
        setDisable(true)
        refetch()
      })
  }


  // feedback functions
  const textareaRef = useRef(null);
  const handleFeedBack = (id) => {

    setDenyLoader(true)
    let textareaValue = textareaRef.current.value;

    if (textareaValue.length === 0) {
      return toast.error("Feedback can't be empty")
    }

    fetch(`https://speak-free-server.vercel.app/class/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({ feedBack: textareaValue })
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)

        textareaRef.current.value = ''
        toast.success('Feedback sent to Instructor')

        // denied functionssssssss

        fetch(`https://speak-free-server.vercel.app/class/${id}`, {
          method: 'PATCH',
          headers: {
            authorization: `Bearer ${localStorage.getItem('access-token')}`,
            'content-type': 'application/json'
          },
          body: JSON.stringify({ classStatus: 'deny' })
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire(
              'Class Denied!',
              'Class moved to the denied list',
              'success',
            )
            setDisable(true)
            refetch()
            setDenyLoader(false)
            refetch()
            //console.log(data);
            refetch()
          })


      })
  }




  return (
    <div className={`card card-compact w-full bg-base-100 shadow-xl ${classStatus === 'pending' ? 'border-2 border-yellow-500' : ''}`}>
      <figure><img className='object-fit w-full object-center' src={classImage} alt="classImage" /></figure>
      <div className='bg-slate-100 mx-auto text-center p-4 w-full rounded-xl'>
        <h2 className="card-title lg:text-2xl ">{instructorName}</h2>
        <div className='text-left font-bold'>
          <p className='flex items-center'>Email: {instructorEmail}</p>
          <p className='flex items-center'>Total Student Appear: {attendedStudent}</p>
          <p className='flex items-center'>Total Class: {parseInt(classRatings)}</p>
          <p className='flex items-center'>Avaiable Seat: {availableSeat}</p>
        </div>



        <div className="flex flex-col md:flex-row w-full justify-end gap-3">
          {
            loader ? <div className='btn btn-sm  btn-outline btn-success'><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div> :
              <button disabled={disable} onClick={() => handleApprovedClassStatus(_id)} className="btn btn-sm  btn-outline btn-success">Approve</button>
          }

          {
            denyLoader ? <div className='btn btn-sm  btn-outline btn-error'><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div>

              :

              < label htmlFor="my_modal_6" disabled={disable} className="btn btn-sm  btn-outline btn-error">Deny</label>
          }
        </div>

      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Send Feedback and keep the class in Pending.</h3>
          <p className='my-2'>You can deny the class to move it in denied list, you can give feedback there too</p>

          <textarea required ref={textareaRef} cols={50} className='w-full p-6 border border-black col-50 rounded-lg'></textarea>

          <div className="modal-action">
            <label htmlFor="my_modal_6" onClick={() => handleFeedBack(_id)} className="btn  btn-outline btn-ghost">Feedback</label>
            <label htmlFor="my_modal_6" className="btn btn-error">Close!</label>
          </div>
        </div>
      </div>
    </div >
  );


}



export default PendingClass;