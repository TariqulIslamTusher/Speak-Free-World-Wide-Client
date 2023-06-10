import React, { useContext } from 'react';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';

const MyClasses = () => {
    const {user} = useContext(AuthContext)
    const [AxiosSecure] = useAxiosSecure()

    const { isLoading, data=[] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await AxiosSecure(`/class?email=${user.email}`)
            return res.data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }

    // console.log(data)
    return (
        <div>
            {data.length}
        </div>
    );
};

export default MyClasses;