import React from 'react';



const Banner = () => {
    return (
        <div className='flex items-center justify-between md:py-10 container mx-auto'>
            <div className='md:w-7/12'>
                <h1 className='md:text-5xl font-mono leading-5 font-extrabold'>Learn a language for real life</h1>
                <img className='mb-2' src="https://f.hubspotusercontent20.net/hubfs/6968579/Memrise%20July%202020/Images/blue-flash.svg" alt="" />
                <li className='font-bold font-serif'>Teach by our expert Instructor</li>
                <li className='font-bold font-mono'>Phrases useful in everyday life.</li>
                <li className='font-bold font-mono'>Taught with video clips of real locals.</li>
                <div className="mt-4">
                    <button className='Cbutton w-6/12'>Get Started</button>
                </div>

            </div>

            <div className='md:w-5/12'>
                <img src="https://mangolanguages.com/wp-content/uploads/2023/01/PL-Hero-FocusGraphic.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;