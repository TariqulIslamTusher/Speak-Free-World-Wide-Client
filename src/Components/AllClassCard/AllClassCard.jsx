import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import HomeClassCard from './HomeClassCard';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../Loader/Loader';

const AllClassCard = () => {
    const [AxiosSecure] = useAxiosSecure()

    const {data, isLoading} = useQuery({
        queryKey: ['classView'],
        queryFn: async() =>{
            const res = await AxiosSecure('/classView')
            return res.data
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }
    // //console.log('sorting data is', data.slice(0,6), isLoading)

    return (
        <div className='py-5'>
            <SectionTitle heading='Our popular classes' subHeading='Popular Classes basis on viewer number'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data && data.slice(0,6).map(Sdata => <HomeClassCard key={Sdata._id} Sdata={Sdata}></HomeClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClassCard;