import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegTimesCircle } from 'react-icons/fa';

const ManageMyClass = ({ singleData, index }) => {
    const { _id, classImage, className, availableSeat, attendedStudent, feedBack, classStatus } = singleData

    console.log(_id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    

    const onSubmit = (data) => {

        data.classStatus = 'pending'
        data.availableSeat = parseInt(data.availableSeat)
        data.price = parseInt(data.price)
        console.log(data);
        console.log(_id);
        // fetch(`http://localhost:3000/class/${_id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         toast.success('New Class Added')
        //         console.log(data)
        //         reset()
        //     })
        // reset()
    };

    // for see feedback
    // console.log(feedBack, index);
    // const handleUpdateData = (id) => {
    //     fetch(`http://localhost:3000/class/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

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

                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn btn-neutral btn-outline w-full btn-sm">Update Info</label>

                
                    <button onClick={()=> handleFeedBack(_id)} className="btn btn-accent btn-outline w-full btn-sm ">See FeedBack</button>
                </th>



            </tr>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle " />
            <div className="modal ">
                <div className="modal-box relative">
                    <h3 className="font-bold text-center text-green-700 text-xl">Update Info</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Class Name:</label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("className", { required: true })} />
                            {errors.className && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" >Photo URL</label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("classImage", { required: true })} />
                            {errors.classImage && <span className='text-red-600'>This field is required</span>}
                        </div>

                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 font-bold mb-2" >Available Seat:</label>
                                <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("availableSeat", { required: true })} />
                                {errors.availableSeat && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-gray-700 font-bold mb-2" >Price:</label>
                                <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("price", { required: true })} />
                                {errors.price && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Description:</label>
                            <textarea className='border border-slate-500 w-full px-3 py-2 rounded-md'  {...register("description")} />
                        </div>

                        <button className='Cbutton w-full' type="submit">Submit</button>
                    </form>
                    <div className="modal-action absolute right-3 -top-3">
                        <label htmlFor="my_modal_6" className='btn bg-transparent btn-sm'><FaRegTimesCircle className='text-4xl text-red-500'></FaRegTimesCircle></label>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ManageMyClass;