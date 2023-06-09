import React from 'react';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ManageUserTable from './ManageUserTable';
import Loader from '../../../Components/Loader/Loader';

const ManageUser = () => {
   // const [data, setInstructorData] = useState([])

   const [AxiosSecure] = useAxiosSecure()

   const {isLoading, data = [] , refetch} = useQuery({
       queryKey: [],
       queryFn: async ()=>{
           const res = await AxiosSecure('/users')
           return res.data
       }
   })

   if(isLoading){
       return <Loader></Loader>
   }




   return (
       <div>
           <div className="overflow-x-auto container mx-auto">
               <table className="table ">
                   {/* Table head */}
                   <thead className='bg-slate-300'>
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