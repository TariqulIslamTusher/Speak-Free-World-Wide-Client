import React from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import { FaHome } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { Link } from 'react-router-dom';
import { AllClassData } from '../../api/AuthJS/auth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../../Components/Loader/Loader';

const DashBoardHome = () => {


    const { role, user,loader } = useContext(AuthContext)
    const [AxiosSecure] = useAxiosSecure()

    const [alldata, setalldata] = useState([])

    if(loader){
        return <Loader></Loader>
    }

   
  
    
    // const instructor = userData.filter(sData => sData.role === 'instructor')
    // const userdata = userData.filter(sData => sData.role === 'user')

    useEffect(() => {
        AxiosSecure('/onlyclass')
            .then(res => {
                setalldata(res.data)
                //console.log(res.data);
            })
    }, [])


    // //console.log(res.data);

    const approved = alldata.filter(sData => sData.classStatus === 'approved')
    const pending = alldata.filter(sData => sData.classStatus === 'pending')
    const deny = alldata.filter(sData => sData.classStatus === 'deny')


    if (role === 'admin') {
        return (
            <div>
                <CommonBanner> <div className="flex items-center  gap-3"><FaHome className='text-white'></FaHome>  DASHBOARD</div> </CommonBanner>



                <div className='w-full'>
                    <h2 className="md:text-4xl text-cyan-700 font-bold w-11/12 mx-auto pt-5">USER STATES</h2>
                    <div className='w-11/12 py-5 mx-auto flex gap-4 '>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-green-500">
                            <h3>TOTAL ADMIN: 01 </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-yellow-500">
                            <h3>INSTRUCTORS: 05 </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-red-300">
                            <h3>STUDENTS: 11</h3>
                        </div>

                    </div>
                    <h2 className="md:text-4xl text-cyan-700 font-bold w-11/12 mx-auto pt-5">CLASS STATES</h2>
                    <div className='w-11/12 py-5 mx-auto flex gap-4 '>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-green-500">
                            <h3>Total Approved Class: {approved.length} </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-yellow-500">
                            <h3>Total Pending Class: {pending.length} </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-red-300">
                            <h3>Total Denied Class: {deny.length} </h3>
                        </div>

                    </div>

                </div>


            </div>
        );
    }



    if (role === 'instructor') {
        return (
            <div>
                <CommonBanner> <div className="flex items-center  gap-3"><FaHome className='text-white'></FaHome>  DASHBOARD</div> </CommonBanner>



                <div className='w-full'>
                    {/* <h2 className="md:text-4xl text-cyan-700 font-bold w-11/12 mx-auto pt-5">TORAL</h2> */}
                    <div className='w-11/12 py-5 mx-auto flex gap-4 '>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-green-500">
                            <h3>TOTAL ADDED CLASS  </h3>
                        </div>

                    </div>
                    <h2 className="md:text-4xl text-cyan-700 font-bold w-11/12 mx-auto pt-5">CLASS STATES</h2>
                    <div className='w-11/12 py-5 mx-auto flex gap-4 '>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-green-500">
                            <h3>Total Approved Class:  </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-yellow-500">
                            <h3>Total Pending Class:  </h3>
                        </div>
                        <div className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-red-300">
                            <h3>Total Denied Class:  </h3>
                        </div>

                    </div>

                </div>


            </div>
        );
    }


    if (role === 'user') {
        return (
            <div>
                <CommonBanner> <div className="flex items-center  gap-3"><FaHome className='text-white'></FaHome>  DASHBOARD</div> </CommonBanner>



                <div className='w-full'>
                    <h2 className="md:text-4xl text-cyan-700 font-bold w-11/12 mx-auto pt-5">USER ROUTINGS</h2>
                    <div className='w-11/12 py-5 mx-auto flex gap-4 '>

                        <Link className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-green-500" to='/dashboard/mySelectedClass'>
                            <div>
                                <h3>TOTAL BOOKED  </h3>
                            </div></Link>
                        <Link className="px-5 py-5 w-full rounded-xl shadow-2xl md:text-3xl text-white font-bold  bg-yellow-500" to='/dashboard/myEnrolledClass'>
                            <div >
                                <h3>TOTAL ENROLLED:  </h3>
                            </div>
                        </Link>

                    </div>


                </div>


            </div>
        );
    }
};

export default DashBoardHome;