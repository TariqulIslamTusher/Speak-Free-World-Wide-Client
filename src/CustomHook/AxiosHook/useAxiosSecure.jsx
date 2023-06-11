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
        const token = `Bearer ${localStorage.getItem('access-token')}`
        // 1. interceptors request clients ------------> server
        AxiosSecure.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = token
            }
            return config;
        })
        // 1. interceptors response server ------------> client
        AxiosSecure.interceptors.response.use((res) => {
            return res
        }, async (err) => {
            if (err.res && (err.res.status === 401 || err.res.status === 403)) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(err)
        })
    }, [logOut, navigate, AxiosSecure])

    return [AxiosSecure]
};

export default useAxiosSecure;