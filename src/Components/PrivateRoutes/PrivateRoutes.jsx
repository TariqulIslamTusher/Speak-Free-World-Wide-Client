import React, { useContext } from 'react';
import Authprovider from '../AuthProvider/Authprovider';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loader} = useContext(Authprovider)
    const location = useLocation()

    if(loader){
        return <div>Loading....</div>
    }

    if(!user){
        return <Navigate to='/login' replace state={location}></Navigate>
    }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;