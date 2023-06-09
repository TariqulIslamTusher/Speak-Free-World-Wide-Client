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
            const res = await fetch('http://localhost:3000/class')
            return res.json()
        }
    })
    console.log(data, isLoading)

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <SectionTitle heading='Our Top Instructores' subHeading='Familiar basis on student attendence'></SectionTitle>

            <Swiper
                autoplay={{
                    delay: 1500,
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
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        data.map(Sdata => <SwiperSlide><InstructorCard Sdata={Sdata}></InstructorCard></SwiperSlide>)
                    }
                </div>

            </Swiper>



        </div>
    );
};

export default InstructorSection;