import React from 'react';
import CommonBanner from '../../../Components/CommonBanner/CommonBanner';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import MyEnrolledCardClass from './myEnrolledCardClass';
import Loader from '../../../Components/Loader/Loader';

const MyEnrolledClass = () => {
    const { user, loader } = useContext(AuthContext)
    const [AxiosSecure] = useAxiosSecure()


    // collect data from enrolled database
    const { data, isLoading , refetch} = useQuery({
        queryKey: ['enrolled', user.email],
        queryFn: async () => {
            const res = await AxiosSecure(`/enrolled?email=${user.email}`)
            return res.data;
        }

    })
    if(loader){
        return <Loader></Loader>
    }
    if(isLoading){
        return <Loader></Loader>
    }

    //console.log(data);

    return (
        <div>
            <CommonBanner>My Enrolled Classes</CommonBanner>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5'>
                {
                data && data.length>0 ? 
                 data.map(Sdata => <MyEnrolledCardClass refetch={refetch} Sdata={Sdata} key={Sdata._id}></MyEnrolledCardClass>)
                :
                
                <div className='flex justify-center items-center'>
                    <NoDataFound>NO Enrolled Classes</NoDataFound>
                </div>
                
                }
            </div>
        </div>
    );
};

export default MyEnrolledClass;