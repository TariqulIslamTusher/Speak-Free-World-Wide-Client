import React, { useState } from 'react';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUserTable from './ManageUserTable';
import Loader from '../../../Components/Loader/Loader';

const ManageUser = () => {
  

   const [AxiosSecure] = useAxiosSecure()

   const {isLoading, data = [] , refetch} = useQuery({
       queryKey: ['users'],
       queryFn: async ()=>{
           const res = await AxiosSecure('/users')
           return res.data
       }
   })

   if(isLoading){
       return <Loader></Loader>
   }

   

//    console.log(data);

   return (
       <div className='w-11/12 mx-auto'>
           <div className="overflow-x-auto p-0 mx-auto">
               <table className="table hover">
                   {/* Table head */}
                   <thead className='bg-slate-200'>
                       <tr>
                           <th>Ser</th>
                           <th>Image</th>
                           <th>Name</th>
                           <th className='text-center'>Email</th>
                           <th>Active Role</th>
                           <th>Change Role</th>
                       </tr>
                   </thead>
                
                   <tbody>
                       {
                           data.map((Sdata,index) => <ManageUserTable key={index} Sdata={Sdata} index={index} refetch={refetch}></ManageUserTable>)
                       }            
                   </tbody>
                   
               </table>
           </div>
       </div>
   );
};


export default ManageUser;