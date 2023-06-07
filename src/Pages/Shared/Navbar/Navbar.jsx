import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import { Tooltip } from 'react-tooltip';



const Navbar = () => {
    const { user } = useContext(AuthContext)
    const handleLogOut = () => {
       
    }

    return (
        <div className="navbar justify-between bg-base-100">
            <div className="flex flex-1 items-center gap-2">
                <Link to='/'>
                    <img className='w-20' src='https://mangolanguages.com/wp-content/uploads/2022/06/PL-Featurette-04.jpg' alt="Web site logo" />
                </Link>


                <h2 className='text-lg sm:text-xl  md:text-3xl font-bold font-mono'>Speak <span className='text-red-700'>Free</span></h2>
            </div>


            <div className="flex">
                <div className="dropdown dropdown-end hidden lg:block">
                    <ul tabIndex={0} className="flex gap-5 items-center font-bold ">

                        <NavLink className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""} to='/'>
                             <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Home</li>
                        </NavLink>


                        <li className='pb-2 transition-all duration-200'>
                            {user ?
                                <button className='btn btn-primary w-full' onClick={handleLogOut}>LogOut</button> :
                                <Link to='/login'><button className='btn btn-primary w-full'>Login</button></Link>}
                        </li>
                    </ul>

                </div>


                <div className="dropdown dropdown-end sm:ml-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full" data-tooltip-id="my-tooltip"
                            data-tooltip-content={user ? user.displayName : 'Add User'}>
                            <Tooltip className='z-30' id="my-tooltip" ></Tooltip>
                            <img src={user ? 'https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761' : 'https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1684413586~exp=1684414186~hmac=099d827d099e8fcd0fd10f202d63209149e7afa823db4512bc04a76d8b9e8761'} alt="" />
                        </div>
                    </label>

                    <ul tabIndex={0} className="menu lg:hidden dropdown-content divide-y mt-3 px-6 py-2 shadow bg-base-100 rounded-box w-72 md:w-72 text-lg">
                        <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'><h2 className='text-xl font-semibold'>{user?.displayName}</h2></li>
                        <NavLink className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "active" : ""} to='/'>
                            <li className='hover:border-b-2 border-cyan-800 pb-2 transition-all duration-200'>Home</li>
                        </NavLink>
                        
                        <li className='pb-2 transition-all duration-200'>
                            {user ? <button className='btn btn-primary w-full' onClick={handleLogOut}>LogOut</button> : <Link to='/login'><button className='btn btn-primary w-full'>Login</button></Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;