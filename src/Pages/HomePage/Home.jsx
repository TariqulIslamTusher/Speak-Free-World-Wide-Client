import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import Banner from './Banner';
import InstructorSection from '../../Components/InstructorSection/InstructorSection';
import AllClassCard from '../../Components/AllClassCard/AllClassCard';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-yellow-100'>
            <Banner></Banner>
            <div className="bg-gradient-to-b from-yellow-100 to-slate-300">
                <div className='container mx-auto'>
                    <InstructorSection></InstructorSection>
                    <AllClassCard></AllClassCard>
                </div>
            </div>

        </div>
    );
};

export default Home;