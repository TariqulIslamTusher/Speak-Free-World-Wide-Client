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
    const { data, isLoading } = useQuery({
        queryKey: ['enrolled', user.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await AxiosSecure(`/enrolled?email=${user.email}`)
            return res.data;
        }

    })

    if(isLoading){
        return <Loader></Loader>
    }


    return (
        <div>
            <CommonBanner>My Enrolled Classes</CommonBanner>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 py-5'>
                {
                data && data.length>0 ? 
                 data.map(Sdata => <MyEnrolledCardClass Sdata={Sdata} key={Sdata._id}></MyEnrolledCardClass>)
                :
                
                <NoDataFound>NO Enrolled Classes</NoDataFound>
                }
            </div>
        </div>
    );
};

export default MyEnrolledClass;