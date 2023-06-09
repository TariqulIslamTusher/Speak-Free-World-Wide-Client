import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Player } from '@lottiefiles/react-lottie-player';
import { toast } from 'react-toastify';



const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        signOutUser()
        toast.info("User Logged Out")
    }

    return (
        <div className="navbar justify-between bg-slate-700">
            <div className='container mx-auto'>
                <div className="flex flex-1 items-center gap-2">
                    <Link to='/'>
                        <Player
                            src='https://assets10.lottiefiles.com/packages/lf20_fksm3n4x.json'
                            className="player w-16"
                            loop
                            autoplay>
                        </Player>
                    </Link>


                    <div>
                        <h2 className='text-lg sm:text-xl md:text-3xl font-bold font-mono text-white'>Speak <span className='text-yellow-500'>Free</span></h2>
                        <h2 className='text-lg font-bold text-red-400 '>World Wide </h2>
                    </div>
                </div>

                <div className="flex">
                    <div className="dropdown dropdown-end hidden lg:block text-white">
                        <ul tabIndex={0} className="flex gap-5 items-center font-bold ">

                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Home</li>
                            </NavLink>

                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/instructor'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Instructors</li>
                            </NavLink>

                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/classes'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Classes</li>
                            </NavLink>

                            {
                                user && <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""} to='/dashboard'>
                                    <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Dashboard </li>
                                </NavLink>
                            }


                            <li className='pb-2 transition-all duration-200'>
                                {user ?
                                    <button className='Cbutton' onClick={handleLogOut}>LogOut</button> :
                                    <Link to='/login'><button className='Cbutton'>Login</button></Link>}
                            </li>
                        </ul>

                    </div>


                    <div className="dropdown dropdown-end sm:ml-5">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 md:w-16 rounded-full" data-tooltip-id="my-tooltip"
                                data-tooltip-content={user ? user?.displayName : 'Add User'}>
                                {/* tooltips with id */}
                                <Tooltip className='z-30 hidden md:block' id="my-tooltip" ></Tooltip>

                                <img src={user ? user?.photoURL : 'https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761'} alt="" />
                            </div>
                        </label>


                        {/* Section for the mobile device */}

                        <ul tabIndex={0} className="menu lg:hidden dropdown-content divide-y mt-5 px-6 py-3 shadow bg-slate-300 z-50 rounded-box w-72 md:w-72 text-lg">

                            <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'><h2 className='text-xl font-semibold'>{user?.displayName}</h2></li>

                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Home</li>
                            </NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/instructor'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Instructors</li>
                            </NavLink>

                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""} to='/classes'>
                                <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Classes</li>
                            </NavLink>

                            {
                                user && <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""} to='/dashboard'>
                                    <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Dashboard </li>
                                </NavLink>
                            }



                            {user ? <button className='Cbutton' onClick={handleLogOut}>LogOut</button> : <Link to='/login'><button className='Cbutton'>Login</button></Link>}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;