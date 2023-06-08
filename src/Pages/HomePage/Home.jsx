import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import Banner from './Banner';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=' bg-yellow-100'>
            <Banner></Banner>
        </div>
    );
};

export default Home;