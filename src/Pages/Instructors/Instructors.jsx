import React, { useEffect, useState } from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import TableRow from '../../Components/TableRowOFInstructors/TableRow';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader/Loader';

const Instructors = () => {
    // const [data, setInstructorData] = useState([])

    const [AxiosSecure] = useAxiosSecure()

    const {isLoading, data = [] } = useQuery({
        queryKey: [],
        queryFn: async ()=>{
            const res = await AxiosSecure('/onlyclass')
            return res.data
        }
    })

    if(isLoading){
        return <Loader></Loader>
    }


    // //console.log(data);

    return (
        <div>
            <CommonBanner>#Instructors</CommonBanner>
            <div  className='w-10/12 mb-auto mx-auto'>
                <table className="table">
                    {/* Table head */}
                    <thead>
                        <tr className='text-xl font-bold'>
                            <th>Ser</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number of Classes</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                 
                    <tbody>
                        {
                            data.map((Sdata,index) => <TableRow key={index} Sdata={Sdata} index={index}></TableRow>)
                        }            
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Instructors;