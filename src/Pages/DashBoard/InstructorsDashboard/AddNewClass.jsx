import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.classStatus = 'pending'
        data.classView = '10'
        data.feedBack = ''
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Class Name:</label>
                <input type="text" {...register("className", { required: true })} />
                {errors.className && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Class Image:</label>
                <input type="text" {...register("classImage", { required: true })} />
                {errors.classImage && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Instructor Name:</label>
                <input type="text" {...register("instructorName", { required: true })} />
                {errors.instructorName && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Instructor Email:</label>
                <input type="email" {...register("instructorEmail", { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.instructorEmail && <span>Please enter a valid email address</span>}
            </div>

            <div>
                <label>Instructor Image:</label>
                <input type="text" {...register("instructorImage", { required: true })} />
                {errors.instructorImage && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Available Seat:</label>
                <input type="number" {...register("availableSeat", { required: true })} />
                {errors.availableSeat && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Price:</label>
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Attended Student:</label>
                <input type="number" {...register("attendedStudent", { required: true })} />
                {errors.attendedStudent && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Class Ratings:</label>
                <input type="number" {...register("classRatings", { required: true })} />
                {errors.classRatings && <span className='text-red-600'>This field is required</span>}
            </div>

            <div>
                <label>Description:</label>
                <textarea {...register("description")} />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default AddNewClass;
