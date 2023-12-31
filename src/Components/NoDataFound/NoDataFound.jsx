import React from 'react';

const NoDataFound = ({children}) => {
    return (
       <div>
         <div className="flex items-center justify-center h-full">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">No Data Found</h1>
                <p className="text-gray-600 text-lg my-2">{children ? children : 'Sorry, there is no data available.'}</p>
            </div>
        </div>
       </div>
    );
};

export default NoDataFound;