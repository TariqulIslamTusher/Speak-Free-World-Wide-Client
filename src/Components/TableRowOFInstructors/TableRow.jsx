import React from 'react';

const TableRow = ({ Sdata, index }) => {

    const { _id, className, classImage, instructorName, instructorImage, availableSeat, price, instructorEmail, classStatus, classView, attendedStudent, booked, classRatings, feedBack } = Sdata

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
                    {instructorImage}
                </td>
                <td>{instructorEmail}</td>
                <td>total class</td>
                <th>
                    <button onClick={() => console.log(_id)} className="btn btn-neutral btn-outline btn-xs">See Classes</button>
                </th>
            </tr>
        </>
    );
};

export default TableRow;