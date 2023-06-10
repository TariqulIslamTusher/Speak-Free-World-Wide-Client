import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ApproveClasses from './ApprovAndPendingClass/ApproveClasses';
import PendingClass from './ApprovAndPendingClass/PendingClass';
import useAxiosSecure from '../../../../CustomHook/AxiosHook/useAxiosSecure';
import Loader from '../../../../Components/Loader/Loader';
import CommonBanner from '../../../../Components/CommonBanner/CommonBanner';
import DeniedClass from './ApprovAndPendingClass/DeniedClass';

const DashBoardCardClass = () => {
    const [AxiosSecure] = useAxiosSecure()


    const { isLoading, data = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await AxiosSecure('/class')
            return res.data

        }
    })
    // TODOS: fetch the data from the sever by query data and make the approved name change with approved and active with pending
    const ApprovedData = data.filter(ApData => ApData.classStatus === 'approved')
    const PendingData = data.filter(ApData => ApData.classStatus === 'pending')
    const DeniedData = data.filter(ApData => ApData.classStatus === 'deny')

    console.log(DeniedData)

    if (isLoading) {
        return <Loader></Loader>
    }



    return (
        <div className='flex flex-col gap-6 py-6 w-9/12 mx-auto'>
            <CommonBanner>All Classes With Status</CommonBanner>
            
            {
                ApprovedData.length > 0 ? <>

                    <h2 className="font-bold text-2xl text-yellow-800 underline my-6 ">Approved</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto'>
                        {
                            ApprovedData.map(Sdata => <ApproveClasses Sdata={Sdata} refetch={refetch} key={Sdata._id} ></ApproveClasses>)
                        }
                    </div>
                </> : ''
            }
            {
                PendingData.length > 0 ? <>

                    <h2 className="font-bold text-2xl text-yellow-800 underline my-6 ">Pending</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto'>
                        {
                            PendingData.map(Sdata => <PendingClass Sdata={Sdata} refetch={refetch} key={Sdata._id} ></PendingClass>)
                        }
                    </div>
                </> : ''
            }

            {
                DeniedData.length > 0 ? <>
                    <h2 className="font-bold text-2xl text-yellow-800 underline my-6 ">Denied</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto'>
                        {
                            DeniedData.map(Sdata => <DeniedClass Sdata={Sdata} refetch={refetch} key={Sdata._id} ></DeniedClass>)
                        }
                    </div>
                </> : ''
            }
        </div>
    );
};


export default DashBoardCardClass;