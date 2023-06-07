import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            This is home page you k nnow {user.name}
        </div>
    );
};

export default Home;