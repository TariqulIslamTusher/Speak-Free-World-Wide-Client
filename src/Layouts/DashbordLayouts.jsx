import React, { useContext, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../Components/AuthProvider/Authprovider';
import { FaBars, FaHome } from 'react-icons/fa';
import useAxiosSecure from '../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Components/Loader/Loader';
import { toast } from 'react-toastify';


const DashBoardLayouts = () => {
    const {user,  signOutUser, role } = useContext(AuthContext)
    const navigate = useNavigate()
    // const user =false
    const handleLogOut = () => {
        signOutUser()
        navigate('/')
        toast.info("User Logged Out")
    }
    console.log(user);
    if(!user){
        return <Loader></Loader>
    }
    // console.log(data, isLoading);


    if (role === 'admin') {
        return (
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-slate-50 justify-center ">
                    <div className='menu lg:hidden dropdown-content divide-y my-3 px-5 py-2 shadow-lg bg-base-100 rounded-box w-full md:w-72 text-lg'>
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex items-center justify-between">
                            <FaBars></FaBars>
                            <div className="flex flex-row-reverse items-center gap-2">
                                <Link to='/'>
                                    <Player
                                        src='https://assets10.lottiefiles.com/packages/lf20_fksm3n4x.json'
                                        className="player w-16"
                                        loop
                                        autoplay>
                                    </Player>
                                </Link>


                                <div>
                                    <h2 className='text-lg sm:text-xl md:text-3xl font-bold font-mono text-black'>Speak <span className='text-yellow-500'>Free</span></h2>
                                    <h2 className='text-lg font-bold text-red-400 md:ml-4'>World Wide </h2>
                                </div>
                            </div>
                        </label>
                    </div>


                    {/* Page content here */}
                    <div className="bg-slate-200 w-full min-h-[100vh]">
                        <Outlet></Outlet>
                    </div>

                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-64 h-full bg-yellow-200 text-xl font-semibold">
                        {/* Sidebar content here */}
                        <div className='bg-white shadow-xl rounded-2xl mb-6'>
                            <div className='w-32 mx-auto my-3'>
                                <img className='rounded-full mx-auto' src={user?.photoURL} alt="" />
                            </div>
                            <h2 className='border-0 rounded-2xl text-center border-b-4 border-cyan-800 pb-2 transition-all duration-200 text-2xl font-semibold'>{user?.displayName}</h2>
                        </div>

                        

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-black  px-5 py-2 rounded-xl border-cyan-800 text-xl font-bold transition-all duration-200'><span className='flex items-center gap-2'><FaHome></FaHome> Home Page</span></li>
                        </NavLink>


                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/dashboardClasses'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>All Classes</li>
                        </NavLink>

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/manageClass'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>Manage User</li>
                        </NavLink>

                        <button className='Cbutton mt-auto' onClick={handleLogOut}>LogOut</button>

                    </ul>

                </div>
            </div>
        );
    }

    if (role === "instructor") {
        return (
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-slate-50 justify-center ">
                    <div className='menu lg:hidden dropdown-content divide-y my-3 px-5 py-2 shadow-lg bg-base-100 rounded-box w-full md:w-72 text-lg'>
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex items-center justify-between">
                            <FaBars></FaBars>
                            <div className="flex flex-row-reverse items-center gap-2">
                                <Link to='/'>
                                    <Player
                                        src='https://assets10.lottiefiles.com/packages/lf20_fksm3n4x.json'
                                        className="player w-16"
                                        loop
                                        autoplay>
                                    </Player>
                                </Link>


                                <div>
                                    <h2 className='text-lg sm:text-xl md:text-3xl font-bold font-mono text-black'>Speak <span className='text-yellow-500'>Free</span></h2>
                                    <h2 className='text-lg font-bold text-red-400 md:ml-4'>World Wide </h2>
                                </div>
                            </div>
                        </label>

                    </div>
                    {/* Page content here */}
                    <div className="bg-slate-200 w-full min-h-[100vh]">
                        <Outlet></Outlet>
                    </div>

                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-64 h-full bg-yellow-200 text-xl font-semibold">
                        {/* Sidebar content here */}
                        <div className='bg-white shadow-xl rounded-xl mb-6'>
                            <div className='w-32 mx-auto my-3'>
                                <img className='rounded-full mx-auto' src={user?.photoURL} alt="" />
                            </div>
                            <h2 className='border-0 rounded-xl text-center border-b-4 border-cyan-800 pb-2 transition-all duration-200 text-2xl font-semibold'>{user?.displayName}</h2>
                        </div>

                        

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-black  px-5 py-2 rounded-xl border-cyan-800 text-xl font-bold transition-all duration-200'><span className='flex items-center gap-2'><FaHome></FaHome> Home Page</span></li>
                        </NavLink>


                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/myClasses'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>My Classes</li>
                        </NavLink>

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/addNewClass'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>Add New Class</li>
                        </NavLink>

                       
                            <button className='Cbutton mt-auto' onClick={handleLogOut}>LogOut</button>
                 

                    </ul>

                </div>
            </div>
        );
    }

    if (role === 'user') {
        return (
            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center bg-slate-50 justify-center ">
                    <div className='menu lg:hidden dropdown-content divide-y my-3 px-5 py-2 shadow-lg bg-base-100 rounded-box w-full md:w-72 text-lg'>
                        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden flex items-center justify-between">
                            <FaBars></FaBars>
                            <div className="flex flex-row-reverse items-center gap-2">
                                <Link to='/'>
                                    <Player
                                        src='https://assets10.lottiefiles.com/packages/lf20_fksm3n4x.json'
                                        className="player w-16"
                                        loop
                                        autoplay>
                                    </Player>
                                </Link>


                                <div>
                                    <h2 className='text-lg sm:text-xl md:text-3xl font-bold font-mono text-black'>Speak <span className='text-yellow-500'>Free</span></h2>
                                    <h2 className='text-lg font-bold text-red-400 md:ml-4'>World Wide </h2>
                                </div>
                            </div>
                        </label>

                    </div>
                    {/* Page content here */}
                    <div className="bg-slate-200 w-full min-h-[100vh]">
                        <Outlet></Outlet>
                    </div>

                </div>


                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-64 h-full bg-yellow-200 text-xl font-semibold">
                        {/* Sidebar content here */}
                        <div className='bg-white shadow-xl rounded-xl mb-6'>
                            <div className='w-32 mx-auto my-3'>
                                <img className='rounded-full mx-auto' src={user?.photoURL} alt="" />
                            </div>
                            <h2 className='border-0 rounded-xl text-center border-b-4 border-cyan-800 pb-2 transition-all duration-200 text-2xl font-semibold'>{user?.displayName}</h2>
                        </div>

                        

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-black  px-5 py-2 rounded-xl border-cyan-800 text-xl font-bold transition-all duration-200'><span className='flex items-center gap-2'><FaHome></FaHome> Home Page</span></li>
                        </NavLink>


                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/mySelectedClass'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>My Selected Class</li>
                        </NavLink>

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/myEnrolledClass'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>My Enrolled Class</li>
                        </NavLink>

                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "DSactive" : ""} to='/dashboard/enrolledHistory'>
                            <li className='hover:border-b-2 hover:bg-yellow-300 hover:shadow-xl text-emerald-900 px-5 py-2 rounded-xl border-cyan-800 text-lg transition-all duration-200'>Enrolled History</li>
                        </NavLink>

                        <button className='Cbutton mt-auto' onClick={handleLogOut}>LogOut</button>

                    </ul>

                </div>
            </div>
        );
    }
};

export default DashBoardLayouts;