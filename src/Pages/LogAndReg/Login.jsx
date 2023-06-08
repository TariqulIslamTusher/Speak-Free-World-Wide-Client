import React, { useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaExpandArrowsAlt, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { LoginWithEmail, setUser, loader, setLoader, handleGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setLoader(true)
        const email = data.Email
        const password = data.Password
        console.log(email, password)

        //Login with email function by context api
        LoginWithEmail(email, password)
            .then(res => {
                toast.success('Login Success')
                const emailUser = res.user
                navigate(location.state?.pathname || '/', { replace: true })
            })
            .catch(err => {
                setLoader(false)
                toast.error(err.message)
            })


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

            })
    }



    return (
        <div className='bg-slate-200 py-6'>
            {/* <ToastContainer></ToastContainer> */}
            {/*  Animation for login Page */}
            <div className='flex flex-col md:flex-row gap-4 items-center container mx-auto'>
                <div className='w-1/2 hidden md:block'>
                    <Player
                        src='https://assets8.lottiefiles.com/packages/lf20_W7sz3YEElT.json'
                        className="player"
                        loop
                        style={{ height: '500px' }}
                        autoplay>

                    </Player>
                </div>

                {/* React Hook form  */}
                <div className="bg-white shadow-md h-full px-8 pt-6 pb-8 w-full md:w-1/2 rounded-lg">
                    <div className='text-center'>
                        <h2 className="md:text-5xl custom-text">Login Now</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.Email && <p className='text-red-500'>Email field cant not be empty</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className='border border-slate-500 w-full px-3 py-2 rounded-md' type="password" placeholder="Password" {...register("Password", { required: true, minLength: 6 })} />
                            {errors.Password?.type === 'minLength' && <p className='text-red-500'>Password must be minimun 6 in length</p>}
                            {errors.Password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
                        </div>
                        <div className='text-center'>
                            {loader ? <div className='Cbutton mx-auto w-8/12 '><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div> : <input className='Cbutton mx-auto w-8/12 ' type="submit" value='Log in' />}

                        </div>
                    </form>
                    <div className="text-center my-3">
                        <button className='btn btn-neutral w-8/12 ' onClick={googleLogin}>
                            <FaGoogle></FaGoogle> Google
                        </button>
                    </div>
                    <h3 className='text-center mt-3 '>Don't Have an Account? <Link to='/register' className='underline text-blue-800 font-semibold'>Register Now</Link></h3>
                </div>
            </div>
        </div>

    );
};

export default Login;
