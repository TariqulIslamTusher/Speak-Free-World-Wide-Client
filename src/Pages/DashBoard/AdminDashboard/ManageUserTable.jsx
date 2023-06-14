import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ManageUserTable = ({ Sdata, index, refetch }) => {
    const { _id, userPhoto, userName, userEmail, role } = Sdata
    const [loader, setLoader] = useState(false)
    const [adminLoader, setAdminLoader] = useState(false)
    // making instructor func
    const handleInstructor = (id) => {
        setLoader(true)
        Swal.fire({
            title: 'Are you sure to set user as Instructor?',
            text: "You won't be able to revert this later!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#059305',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm it!'
        }).then((result) => {
            setLoader(false)
            if (result.isConfirmed) {
                // patch the user role to update it
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'PATCH',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`,
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ role: 'instructor' })
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Updated!',
                            'User Role Set as Instructor',
                            'success'
                        )
                        console.log(data);
                        refetch()
                    })

            }
        })

    }

    // making admin func
    const handleAdmin = (id) => {
        setAdminLoader(true)
        Swal.fire({
            title: 'Are you sure to set user as Admin?',
            text: "You won't be able to revert this later!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#059305',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm it!'
        }).then((result) => {
            setAdminLoader(false)
            if (result.isConfirmed) {
                // patch the user role to update it
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'PATCH',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access-token')}`,
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ role: 'admin' })
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Updated!',
                            'User Role Set as Admin',
                            'success'
                        )
                        console.log(data);
                        refetch()
                    })
            }
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
                    {/* instructor button */}
                    {
                        loader ? <div className='btn btn-neutral btn-outline btn-sm mx-auto w-5/12 '><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div>
                            :
                            <button disabled={role === 'instructor' || role === 'admin' ? true : false} onClick={() => handleInstructor(_id)} className="btn btn-neutral btn-outline w-full btn-sm">Make Instructor</button>

                    }


                    {/* Admin button */}
                    {
                        adminLoader ? <div className='btn btn-neutral btn-outline btn-sm mx-auto w-5/12 '><FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></div>
                            :
                            <button disabled={role === 'admin' ? true : false} onClick={() => handleAdmin(_id)} className="btn btn-neutral btn-outline w-full btn-sm">Make Admin</button>
                    }


                </th>
            </tr>
        </>
    );
};

export default ManageUserTable;