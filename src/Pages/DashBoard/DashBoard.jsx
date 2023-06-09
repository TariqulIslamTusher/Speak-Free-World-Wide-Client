import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { FaBarcode, FaBars } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';


const DashBoard = () => {
    const { user } = useContext(AuthContext)

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
                                <h2 className='text-lg font-bold text-red-700'>World Wide </h2>
                            </div>
                        </div>
                    </label>

                </div>
                {/* Page content here */}
                <div>
                    this is container area
                </div>


            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-6 w-64 h-full bg-yellow-200 text-xl font-semibold">
                    {/* Sidebar content here */}
                    <div className='bg-white shadow-xl rounded-3xl mb-6'>
                        <div className='w-32 mx-auto my-3'>
                            <img className='rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        <h2 className='border-0 rounded-xl text-center border-b-4 border-cyan-800 pb-2 transition-all duration-200 text-2xl font-semibold'>{user?.displayName}</h2>
                    </div>

                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to='/'>
                        <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Home Page</li>
                    </NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to='/mySelectedClass'>
                        <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>My Selected Class</li>
                    </NavLink>

                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to='/myEnrolledClass'>
                        <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>My Enrolled Class</li>
                    </NavLink>



                </ul>

            </div>
        </div>
    );
};

export default DashBoard;