import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Components/AuthProvider/Authprovider';
import { useContext } from 'react';



const EnrolledHistoryRow = ({ Sdata, index }) => {
    const [classData, setTotalClass] = useState(0)
    const {user} =useContext(AuthContext)


    const { _id, className, classImage,  price, date, instructorName} = Sdata


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={classImage} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {className}
                </td>
                <td>{instructorName}</td>
                <td >{date}</td>
                <td className='text-center'>{price}</td>
                
            </tr>
        </>
    );
};

export default EnrolledHistoryRow;