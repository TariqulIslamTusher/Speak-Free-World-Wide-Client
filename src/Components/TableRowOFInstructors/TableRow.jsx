import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import { Link } from 'react-router-dom';

const TableRow = ({ Sdata, index }) => {
    const [classData, setTotalClass] = useState(0)

    const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata

    useEffect(() => {
        fetch(`http://localhost:3000/onlyclass?instructorName=${instructorName}`)
            .then(res => res.json())
            .then(data => {
                setTotalClass(data)
            })
    }, [Sdata])

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={instructorImage} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {instructorName}
                </td>
                <td>{instructorEmail}</td>
                <td className='text-center'>{classData.length}</td>
                <th>
                    {/* TODOS : SEE ONLY THIS CLASSES */}
                    <Link>
                        <button onClick={() => console.log(_id)} className="btn btn-neutral btn-outline btn-xs">See Classes</button>
                    </Link>
                </th>
            </tr>
        </>
    );
};

export default TableRow;