import React from 'react';
import { toast } from 'react-toastify';

const ManageUserTable = ({Sdata, index, refetch}) => {
    const {_id, userPhoto, userName, userEmail, role} = Sdata
 
    
    const handleInstructor = (id) =>{
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'PATCH',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({role: 'instructor'})
        }) 
        .then(res => res.json())
        .then(data => {
            toast.success('User roled as Instructor')
            console.log(data);
            refetch()
        })


    }
    
    const handleAdmin = (id) =>{
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'PATCH',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({role: 'admin'})
        }) 
        .then(res => res.json())
        .then(data => {
            toast.success('User roled as Admin')
            console.log(data);
            refetch()
        })
    }

    return (
        <>
            <tr className='hover'>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={userPhoto} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {userName}
                </td>
                <td>{userEmail}</td>
                <td>{role}</td>
                <th className='flex flex-col justify-between items-center gap-2'>
                    <button disabled={role==='instructor'||'admin'? true : false} onClick={() => handleInstructor(_id)} className="btn btn-neutral btn-outline w-full btn-sm">Make Instructor</button>
                    <button disabled={role==='admin'? true : false}  onClick={() => handleAdmin(_id)} className="btn btn-neutral btn-outline w-full btn-sm">Make Admin</button>
                </th>
            </tr>
        </>
    );
};

export default ManageUserTable;