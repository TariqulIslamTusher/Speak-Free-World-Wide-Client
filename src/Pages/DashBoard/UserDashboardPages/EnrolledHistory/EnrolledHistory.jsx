import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import EnrolledHistoryRow from './EnrolledHistoryRow';
import Loader from '../../../../Components/Loader/Loader';
import CommonBanner from '../../../../Components/CommonBanner/CommonBanner';
import useAxiosSecure from '../../../../CustomHook/AxiosHook/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../../Components/AuthProvider/Authprovider';
import NoDataFound from '../../../../Components/NoDataFound/NoDataFound';


const EnrolledHistory = () => {
    // const [data, setInstructorData] = useState([])
    const [AxiosSecure] = useAxiosSecure()
    const { user, loader } = useContext(AuthContext)


    const { isLoading, data = [] } = useQuery({
        queryKey: ['enrolled', user.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await AxiosSecure(`/enrolled?email`)
            return res.data
        }
    })

    

    if (isLoading) {
        return <Loader></Loader>
    }

    // const handleDelete =()=>{
    //     AxiosSecure.delete('/enrolled')
    //     .then(res=>{
    //         //console.log(res.data);
    //     })
    // }


    //console.log(data);

    return (
        <div>
            <CommonBanner>ENROLLED HISTORY</CommonBanner>
            <div className='w-10/12 mb-auto mx-auto'>
                {
                    data && data.length > 0 ?
                        <>
                            <table className="table">
                                {/* Table head */}
                                <thead>
                                    <tr className='text-xl font-bold'>
                                        <th>Ser</th>
                                        <th>Image</th>
                                        <th>Class Name</th>
                                        <th>Instructor Name</th>
                                        <th>Purchase Date</th>
                                        <th>Price Paid</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data.map((Sdata, index) => <EnrolledHistoryRow key={index} Sdata={Sdata} index={index}></EnrolledHistoryRow>)
                                    }

                                </tbody>

                            </table>
                            {/* <div className="text-center py-4">
                                <button onClick={handleDelete} className='Cbutton text-center md:text-right'>Clear Purchase History</button>
                            </div> */}

                        </>

                        :

                        <NoDataFound>No Enrolled History</NoDataFound>
                }
            </div>
        </div>
    );
};

export default EnrolledHistory;