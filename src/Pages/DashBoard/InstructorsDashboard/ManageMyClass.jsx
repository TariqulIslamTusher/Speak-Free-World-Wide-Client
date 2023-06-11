import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCross, FaRegTimesCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageMyClass = ({ singleData, index, refetch }) => {

    const [openModal, setOpenModal] = useState(false)
    const [openUpdateModal, setUpdateModal] = useState(false)



    const { _id, classImage, className, availableSeat, attendedStudent, feedBack, classStatus, price, description } = singleData

    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const onSubmit = (data) => {
        data.classStatus = 'pending'
        data.availableSeat = parseInt(data.availableSeat)
        data.price = parseInt(data.price)
        console.log(data);
        fetch(`http://localhost:3000/class/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setUpdateModal(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data Updated',
                    text: 'Data sent To Admin for Review Again',
                    showConfirmButton: false,
                    timer: 2000
                })
                // toast.success('Data Updated , Data sent To Admin for Review Again')
                console.log(data)
                reset()
                refetch()
            })
    };

    // for see feedback

    const handleFeedBack = (AdminFeeds) => {
        setOpenModal(true)
        console.log(AdminFeeds);
    }



    // =======Handling of Delete methodes================
    const handleDelete = (id) => {

        fetch(`http://localhost:3000/class/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log(data)
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                // toast.success('item deleted')
            })
    }




    return (
        <>
            <tr className={`hover ${classStatus === 'deny' ? 'bg-red-100' : classStatus === 'approved' ?
                'bg-green-100' : 'bg-yellow-100'}`}>
                <td className='text-center'>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={classImage} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{className}</td>
                <td className='text-center'>{availableSeat}</td>
                <td className='text-center'>{attendedStudent}</td>
                <td className='text-center'>{classStatus}</td>
                <th className='flex flex-col justify-between items-center gap-2'>



                    <button onClick={() => setUpdateModal(true)} className="btn btn-success btn-outline w-full btn-sm ">Update Info</button>



                    <button disabled={feedBack ? false : true} onClick={() => handleFeedBack(feedBack)} className="btn btn-ghost btn-outline w-full btn-sm ">{feedBack ? "See FeedBack" : "No FeedBack"}</button>


                    <button onClick={() => handleDelete(_id)} className="btn btn-error btn-outline w-full btn-sm ">Delete</button>
                </th>



            </tr>
            {/* Put this part before </body> tag */}

            {/* The button to open modal */}
            {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my_modal_6" className="modal-toggle" /> */}

            <div className={`${openModal ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75`}>
                <div className="bg-white w-1/2 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Admin's Feedback</h2>
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </button>
                    </div>
                    <div>{feedBack}</div>
                </div>
            </div>






            <div className={`${openUpdateModal ? 'fixed' : 'hidden'} overflow-auto z-50 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50`}>
                <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg relative">
                    <FaRegTimesCircle onClick={() => setUpdateModal(false)} className='absolute -right-3 -top-3 btn btn-circle text-red-500 '>X</FaRegTimesCircle>
                    <div className="text-center text-xl md:text-4xl font-extrabold">Update Your Data</div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Class Name:</label>
                            <input defaultValue={className} className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("className", { required: true })} />
                            {errors.className && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Photo URL</label>
                            <input defaultValue={classImage} className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("classImage", { required: true })} />
                            {errors.classImage && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 font-bold mb-2" >Available Seat:</label>
                                <input defaultValue={availableSeat} className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("availableSeat", { required: true })} />
                                {errors.availableSeat && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 font-bold mb-2" >Price:</label>
                                <input defaultValue={price} className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("price", { required: true })} />
                                {errors.price && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Description:</label>
                            <textarea defaultValue={description} className='border border-slate-500 w-full px-3 py-2 rounded-md'  {...register("description")} />
                        </div>

                        <button className='Cbutton w-full' type="submit">Submit</button>
                    </form>

                </div>
            </div>


        </>

    );
};

export default ManageMyClass;