import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { toast } from 'react-toastify';
import CommonBanner from '../../../Components/CommonBanner/CommonBanner';

const AddNewClass = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext)

    const onSubmit = (data) => {

        data.instructorImage = user.photoURL
        data.classStatus = 'pending'
        data.classView = 10
        data.attendedStudent = 10
        data.availableSeat = parseInt(data.availableSeat)
        data.price = parseFloat(data.price)
        data.classRatings = parseInt(data.classRatings)
        //console.log(data);

        fetch('https://speak-free-server.vercel.app/class', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('New Class Added')
                //console.log(data)
                reset()
            })

    };

    return (
        <div className='w-full'>
            <CommonBanner>Add New Class</CommonBanner>
            <div className='bg-white shadow-md px-8 md:px-40 py-8 mx-auto rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >Class Name:</label>
                        <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("className", { required: true })} />
                        {errors.className && <span className='text-red-600'>This field is required</span>}
                    </div>
                    {/* instructor name and emails */}
                    <div className='flex flex-col md:flex-row md:gap-5'>
                        <div className="mb-4  w-full">
                            <label className="block text-gray-700 font-bold mb-2" >Instructor Name (Read Only)</label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" value={user.displayName} {...register("instructorName")} />
                        </div>

                        <div className="mb-4  w-full">
                            <label className="block text-gray-700 font-bold mb-2" >Instructor Email (Read Only)</label>
                            <input value={user.email} className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" {...register("instructorEmail")} />

                        </div>

                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >Class Photo URL</label>
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
            </div>
        </div>
    );
};

export default AddNewClass;
