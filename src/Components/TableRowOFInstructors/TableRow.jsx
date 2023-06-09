import React from 'react';

const TableRow = ({Sdata, index}) => {

    const {name, email, photo}= Sdata.instructor

    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>{email}</td>
                <td>total class</td>
                <th>
                    <button onClick={()=>console.log(Sdata._id)} className="btn btn-neutral btn-outline btn-xs">See Classes</button>
                </th>
            </tr>
        </>
    );
};

export default TableRow;