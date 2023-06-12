import React, { useContext } from 'react';
import CommonBanner from '../../../Components/CommonBanner/CommonBanner';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import NoDataFound from '../../../Components/NoDataFound/NoDataFound';
import { Link } from 'react-router-dom';
import MySelectedClassCard from './mySelectedClassCard';

const MySelectedClass = () => {
    const [AxiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data, refetch} = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await AxiosSecure(`/booking?email=${user.email}`)
            return res.data
        }
    })

    console.log(data);


    return (
        <div className='w-full'>
            <CommonBanner>Your Booked Class</CommonBanner>
            <div className="px-8 py-5">
                {
                    data? <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {
                            data.map(Sdata => <MySelectedClassCard key={Sdata._id} Sdata={Sdata} refetch={refetch}></MySelectedClassCard>)
                        }
                    </div> 
                    :

                    <NoDataFound>
                        <div>
                            <p>You haven't added any class yet</p>
                            <Link to='/classes' className='Cbutton'>Add Classes</Link>
                        </div>
                    </NoDataFound>
                }
            </div>
        </div>
    );
};

export default MySelectedClass;