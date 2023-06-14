import React, { useEffect, useState } from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import ClassCard from '../../Components/ClassCard';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import Loader from '../../Components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';

const Classes = () => {
    const {user}= useContext(AuthContext)
    const [AxiosSecure] = useAxiosSecure()

    const { isLoading, data = [] , refetch} = useQuery({
        queryKey: ['onlyclass', user?.email],
        queryFn: async () => {
            const res = await AxiosSecure('/onlyclass?classStatus=approved')
            return res.data
        }
    })



        
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(data);
    return (
        <div className='bg-slate-300'>
            <CommonBanner>All Our Classes</CommonBanner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 container md:px-10 mx-auto'>
                {
                    data?.map(Sdata => <ClassCard key={Sdata._id} refetch={refetch} Sdata={Sdata}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;