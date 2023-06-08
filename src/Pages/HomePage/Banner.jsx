import React from 'react';
import BannerBottom from './BannerBottom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Banner = () => {
    return (
        <div className='relative py-7'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
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
                </SwiperSlide>
                {/* swiper 2 */}
                <SwiperSlide>
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
                            <img src="https://6968579.fs1.hubspotusercontent-na1.net/hubfs/6968579/Memrise%20July%202020/Images/v3-girl-hero-image.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
            <div className='absolute -bottom-16 left-0 right-0'>
                <BannerBottom></BannerBottom>
            </div>
        </div>
    );
};

export default Banner;