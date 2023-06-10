import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { toast } from 'react-toastify';

const AddNewClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)

    const [AxiosSecure] = useAxiosSecure()

    

    const onSubmit = (data) => {
        data.instructorName = user.displayName
        data.instructorImage = user.photoURL
        data.instructorEmail = user.email
        data.classStatus = 'pending'
        data.classView = 10
        data.feedBack = ''
        data.attendedStudent = 10
        data.availableSeat = parseInt(data.availableSeat)
        data.price = parseInt(data.price)
        data.classRatings = parseInt(data.classRatings)
        console.log(data);
        
        fetch('http://localhost:3000/class', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('New Class Added')
                console.log(data)
            })

    };

    return (
        <div className='bg-white shadow-md px-8 pt-6 pb-8 w-10/12 mx-auto rounded-lg'>
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
                    <div className="mb-4 md:w-4/12">
                        <label className="block text-gray-700 font-bold mb-2" >Available Seat:</label>
                        <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("availableSeat", { required: true })} />
                        {errors.availableSeat && <span className='text-red-600'>This field is required</span>}
                    </div>

                    <div className="mb-4 md:w-4/12">
                        <label className="block text-gray-700 font-bold mb-2" >Price:</label>
                        <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("price", { required: true })} />
                        {errors.price && <span className='text-red-600'>This field is required</span>}
                    </div>


                    <div className="mb-4 md:w-4/12">
                        <label className="block text-gray-700 font-bold mb-2" >Class Ratings:</label>
                        <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="number" {...register("classRatings", { required: true , max: 5})} />
                        {errors.classRatings?.type === 'required' && <span className='text-red-600'>This field is required</span>}
                        {errors.classRatings?.type === 'max' && <span className='text-red-600'>Ratings should be within 5</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Description:</label>
                    <textarea className='border border-slate-500 w-full px-3 py-2 rounded-md'  {...register("description")} />
                </div>

                <button className='Cbutton w-full' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewClass;
