import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import Loader from '../../Components/Loader/Loader';


const IsAdmin = ({children}) => {

    const {role, loader} = useContext(AuthContext)

    const location = useLocation()

    if(loader){
        return <Loader></Loader>
    }

    if(role !== 'admin'){
        return <Navigate to='/login' replace state={location}></Navigate>
    }

    return children
        
};

export default IsAdmin;