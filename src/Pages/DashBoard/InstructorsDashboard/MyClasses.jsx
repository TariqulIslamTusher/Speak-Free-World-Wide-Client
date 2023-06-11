import React, { useContext } from 'react';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import Loader from '../../../Components/Loader/Loader';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import ManageMyClass from './ManageMyClass';
import CommonBanner from '../../../Components/CommonBanner/CommonBanner';

const MyClasses = () => {
    const { user } = useContext(AuthContext)
    const [AxiosSecure] = useAxiosSecure()

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const res = await AxiosSecure(`/class?email=${user.email}`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    // console.log(data)
    return (
        <div className='w-full mb-auto mx-auto'>
            <CommonBanner>My Added Classes</CommonBanner>
            {data.length > 0 ? <>
                <table className="table hover px-8">
                    <thead className='bg-slate-200'>
                        <tr>
                            <th className='text-center'>Ser</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th className='text-center'>Availabe Seat</th>
                            <th className='text-center'>Total Enrolled</th>
                            <th className='text-center'>Class Status</th>
                            <th className='text-center'>Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((singleData, index) => <ManageMyClass key={index} singleData={singleData} index={index} refetch={refetch}></ManageMyClass>)
                        }
                    </tbody>

                </table>

            </> 
            : 
            <>
                <div>
                    <NoDataFound></NoDataFound>
                </div>
            </>
            }
        </div>
    );
};

export default MyClasses;