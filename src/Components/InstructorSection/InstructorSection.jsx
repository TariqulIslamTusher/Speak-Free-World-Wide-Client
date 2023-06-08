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

const InstructorSection = () => {
    return (
        <div>
            <SectionTitle heading='Our Top Instructores' subHeading='Familiar basis on student attendence'></SectionTitle>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
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
                {/* TODO: Swiper to be implemented */}
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
            </Swiper>


            <div className='grid grid-cols-1 md:grid-cols-3'>
                <InstructorCard></InstructorCard>
            </div>
        </div>
    );
};

export default InstructorSection;