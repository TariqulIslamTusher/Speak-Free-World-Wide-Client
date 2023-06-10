import React, { useRef, useState } from 'react';
import Loader from '../../../../../Components/Loader/Loader';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const PendingClass = ({ Sdata, refetch }) => {
  const [disable, setDisable] = useState(false)

  if (!Sdata) {
    return <Loader></Loader>
  }

  const { className, classPhoto, _id, classStatus } = Sdata



  const handleClassStatus = (id, status) => {

    Swal.fire({
      title: `Are you sure to ${status} the class?`,
      text: `Your class will move to the ${status} list`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // patch the update the class status
        fetch(`http://localhost:3000/class/${id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({ classStatus: status })
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire(
              'Updated!',
              `Class moved to the ${status} list`,
              'success',
              refetch()
            )
            refetch()
            console.log(data);
          })

      }
    })
  }


  const textareaRef = useRef(null);
  const handleFeedBack = (id) => {
    let textareaValue = textareaRef.current.value;

    if (textareaValue.value === '') {
      toast.error("Feedback can't be empty")
    } else {
      fetch(`http://localhost:3000/class/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ feedBack: textareaValue })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          textareaRef.current.value = ''
          toast.success('Feedback sent to Instructor')
        })

    }


  }

  return (
    <div className={`card card-compact w-full bg-base-100 shadow-xl ${classStatus === 'pending' ? 'border-2 border-yellow-500' : ''}`}>
      <figure><img src={classPhoto} alt="classPhoto" /></figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{classStatus}</p>

        <div className="flex flex-col md:flex-row w-full justify-end gap-3">


          <button disabled={disable} onClick={() => handleClassStatus(_id, 'approved')} className="btn btn-sm  btn-outline btn-success">Approve</button>
          <button onClick={() => handleClassStatus(_id, 'deny')} className="btn btn-sm  btn-outline btn-error">Deny</button>


          {/* The button to open modal and feedback */}

          <label htmlFor="my_modal_6" disabled={disable} className="btn btn-sm btn-outline btn-ghost">Feedback</label>
        </div>


        {/* Put this part before </body> tag */}
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
      </div>
    </div>
  );
};

export default PendingClass;