import React, { useState } from 'react';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUserTable from './ManageUserTable';
import Loader from '../../../Components/Loader/Loader';
import CommonBanner from '../../../Components/CommonBanner/CommonBanner';

const ManageUser = () => {


    const [AxiosSecure] = useAxiosSecure()

    const { isLoading, data = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await AxiosSecure('/users')
            return res.data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }



    //    //console.log(data);

    return (
        <div className="w-full">
            <CommonBanner>All Users</CommonBanner>

            <div className="overflow-x-auto ">
                <table className="table hover md:px-40 px-8">
                    {/* Table head */}
                    <thead className='bg-blue-200'>
                        <tr className='md:text-lg font-bold'>
                            <th>Ser</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Active Role</th>
                            <th className='text-center'>Change Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((Sdata, index) => <ManageUserTable key={index} Sdata={Sdata} index={index} refetch={refetch}></ManageUserTable>)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};


export default ManageUser;