import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const AxiosSecure = axios.create({
        baseURL: 'http://localhost:3000'
    })


    useEffect(() => {
        AxiosSecure.interceptors.request.use((req) => {
            return req
        })

        AxiosSecure.interceptors.response.use((res) => res, async (err) => {
            if (err.res && (err.res.status === 401 || err.res.status === 403)) {
                await logOut()
                navigate('/login')
            }
            return res
        })
    }, [logOut, navigate, AxiosSecure])
    
    return [AxiosSecure]
};

export default useAxiosSecure;