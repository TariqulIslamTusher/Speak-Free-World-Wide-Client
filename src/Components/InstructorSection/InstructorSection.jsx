import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import InstructorCard from './InstructorCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import useAxiosSecure from '../../CustomHook/AxiosHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';

const InstructorSection = () => {



    const [AxiosSecure] = useAxiosSecure()

    const { isLoading, data = [] } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await AxiosSecure('/instructor')
            return res.data
        }
    })
    // console.log(data.slice(0,6), isLoading)

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <>
            <div className='md:hidden'>
                <SectionTitle heading='Our Top Instructores' subHeading='Familiar basis on student attendence'></SectionTitle>

                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}

                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <div className='grid grid-cols-1'>
                        {
                            data?.slice(0,6).map(Sdata => <SwiperSlide><InstructorCard key={Sdata._id} Sdata={Sdata}></InstructorCard></SwiperSlide>)
                        }
                    </div>

                </Swiper>



            </div>

            <div className='hidden md:block'>
                <SectionTitle heading='Our Top Instructores' subHeading='Familiar basis on student attendence'></SectionTitle>

                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}

                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <div className='grid grid-cols-1'>
                        {
                            data?.slice(0,6).map(Sdata => <SwiperSlide><InstructorCard key={Sdata._id} Sdata={Sdata}></InstructorCard></SwiperSlide>)
                        }
                    </div>

                </Swiper>



            </div>
        </>
    );
};

export default InstructorSection;