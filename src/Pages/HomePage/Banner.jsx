import React from 'react';
import BannerBottom from './BannerBottom';
import a from '../../assets/1.png'
import e from '../../assets/2.png'
import m from '../../assets/m.png'
import d from '../../assets/4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <div className='relative py-7'>
                <div className='flex flex-col-reverse md:flex-row gap-5 items-center justify-between md:py-10 container mx-auto'>
                    <div className='w-10/12 mx-auto md:w-7/12'>
                        <h1 className='md:text-5xl font-mono leading-5 font-extrabold'>Learn a language for real life</h1>
                        <img className='mb-2' src="https://f.hubspotusercontent20.net/hubfs/6968579/Memrise%20July%202020/Images/blue-flash.svg" alt="" />
                        <li className='font-bold font-serif'>Teach by our expert Instructor</li>
                        <li className='font-bold font-mono'>Phrases useful in everyday life.</li>
                        <li className='font-bold font-mono'>Taught with video clips of real locals.</li>
                        <div className="mt-4">
                           <Link to='/classes'> <button className='Cbutton w-6/12'>Get Started</button></Link>
                        </div>

                    </div>
                    <Swiper
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        spaceBetween={50}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper w-10/12 mx-auto md:w-5/12"
                    >

                            <SwiperSlide>
                                <img src="https://mangolanguages.com/wp-content/uploads/2023/01/PL-Hero-FocusGraphic.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={a} alt="" />
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <img src={e} alt="" />
                            </SwiperSlide> */}
                            <SwiperSlide>
                                <img src={m} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={d} alt="" />
                            </SwiperSlide>
                       
                    </Swiper>   
                </div>
                {/* swiper 2 */}


                <div className='md:absolute -bottom-12 left-0 right-0 mt-5 md:mt-0'>
                    <BannerBottom></BannerBottom>
                </div>
            </div>
        </div >
    );
};

export default Banner;