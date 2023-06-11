import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Components/AuthProvider/Authprovider';
import Banner from './Banner';
import InstructorSection from '../../Components/InstructorSection/InstructorSection';
import AllClassCard from '../../Components/AllClassCard/AllClassCard';
import ParaluxExperience from '../../Components/ParaluxExperience/ParaluxExperience';


const Home = () => {

    return (
        <div className='bg-yellow-100'>
            <Banner></Banner>
            <div className='py-10 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZIeOIeILJXvoz8hdLugevQhMUhhUi3Aa-g&usqp=CAU")] bg-fixed bg-cover'>
                <ParaluxExperience></ParaluxExperience>
            </div>
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