import React, { useEffect, useState } from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import ClassCard from '../../Components/ClassCard';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import Loader from '../../Components/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const [AxiosSecure] = useAxiosSecure()

    const {isLoading, data = [] } = useQuery({
        queryKey: [],
        queryFn: async ()=>{
            const res = await AxiosSecure('/class')
            return res.data
        }
    })
    console.log(data, isLoading)  

    if(isLoading){
        return <Loader></Loader>
    }

    // useEffect(()=>{
    //     AxiosSecure.get('/class')
    //     .then(res => {
    //         console.log(res.data)
    //         setClassData(res.data)
    //     })
    //     .catch(err => console.log(err))
    // },[])


    return (
        <div>
            <CommonBanner>All Our Classes</CommonBanner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto'>
               {
                data.map(Sdata =>  <ClassCard Sdata={Sdata}></ClassCard>)
               }
            </div>
        </div>
    );
};

export default Classes;