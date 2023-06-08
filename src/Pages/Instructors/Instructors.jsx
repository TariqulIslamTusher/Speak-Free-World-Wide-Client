import React from 'react';
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import TableRow from '../../Components/TableRowOFInstructors/TableRow';

const Instructors = () => {
    return (
        <div>
            <CommonBanner>#Instructors</CommonBanner>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* Table head */}
                    <thead>
                        <tr>
                            <th>Ser</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number of Classes</th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                       <TableRow></TableRow>                       
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default Instructors;