import React from 'react';

const TableRow = () => {
    return (
        <>
            <tr>
                <td>01</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="" alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                </td>
                <td>Email</td>
                <td>total class</td>
                <th>
                    <button className="btn btn-neutral btn-outline btn-xs">See Classes</button>
                </th>
            </tr>
        </>
    );
};

export default TableRow;