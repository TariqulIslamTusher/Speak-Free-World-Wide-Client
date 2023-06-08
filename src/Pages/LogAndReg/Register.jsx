import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { useForm } from 'react-hook-form';
import { FaExpandArrowsAlt, FaGoogle } from 'react-icons/fa';



const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { createAcctWithEmail, setUser, loader, setLoader, handleGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const onSubmit = (data) => {
        setLoader(true)
        const name = data.name
        const email = data.email
        const password = data.password
        const confirmPass = data.confirmPass
        const photoURL = data.url

        if (password !== confirmPass) {
            return console.log('pass does not matched');
        }
        // console.log(name, email, password, confirmPass, photoURL, data);

        // creating user with email
        createAcctWithEmail(email, password)
            .then(res => {
                const loggedUser = res.user;
                // calling the photo and url updating function
                updatePhotoAndUrl(loggedUser)
                    .then(() => {

                    })
                    .catch((error) => {
                        console.log(error);
                    });
                setUser(loggedUser);
                navigate(location?.state?.pathname || '/', { replace: true })
            })
            .catch(err => {
                console.log(err);
            })



        // Photo and url updating function
        const updatePhotoAndUrl = (user) => {
            return updateProfile(user, { displayName: name, photoURL: photoURL })
        }
    }

    
    // handleGoogle function
    const googleLogin = () => {
        handleGoogle()
            .then((res) => {
                const loggedUser = res.user
                setUser(loggedUser);
                navigate(location?.state?.pathname || '/', { replace: true })
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <div className='bg-slate-200 py-6'>
            <div className='flex flex-col md:flex-row gap-4 items-center container mx-auto'>
                <div className='w-1/2 hidden md:block'>
                    <Player
                        src='https://assets4.lottiefiles.com/packages/lf20_UW8DlCRljO.json'
                        className="player"
                        loop
                        style={{ height: '500px' }}
                        autoplay>

                    </Player>
                </div>


                {/* registration form part by react hook form */}

                <div className="bg-white shadow-md h-full px-8 pt-6 pb-8 w-full md:w-1/2 rounded-lg">
                    <div className='text-center'>
                        <h2 className="md:text-5xl custom-text">Register Now</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Name
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" placeholder="name" {...register("name", { required: true })} />
                            {errors.name && <p className='text-red-500'>Name is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.Email && <p className='text-red-500'>Email field cant not be empty</p>}
                            {errors.Email?.type === 'pattern' && <p className='text-red-500'>Email must be a valide one</p>}
                        </div>
                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="password" placeholder="Password" {...register("password", { required: true, minLength: 6 })} />
                            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must have at least 6 caracters</p>}
                        </div>
                        {/* confirmed password */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Confirm Password
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="password" placeholder="Confirm Password" {...register("confirmPass", {
                                required: true, minLength: 6,
                                validate: value =>
                                    value === watch('password') || "The passwords do not match"
                            })} />
                            {errors.confirmPass && <p className='text-red-500'>{errors.confirmPass.message}</p>}
                        </div>

                        {/* photoURL  */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Photo URL
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="text" placeholder="Photo URL" {...register("url", { required: true })} />
                            {errors.url && <p className='text-red-500'>PhotURL is required.</p>}
                        </div>

                        <div className='text-center '>
                            {
                                loader ? <div className='Cbutton mx-auto w-5/12 '><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div> : <input className='Cbutton mx-auto w-8/12 ' type="submit" value='Register' />
                            }

                        </div>

                    </form>
                    <div className="text-center my-3">
                        <button className='btn btn-neutral w-8/12 ' onClick={googleLogin}>
                            <FaGoogle></FaGoogle> Google
                        </button>
                    </div>
                    <h3 className='text-center mt-3 '>Already Have an Account? <Link to='/Login' className='underline text-blue-800 font-semibold'>Login Here</Link></h3>
                </div>
            </div>
        </div>

    )
}


export default Register;