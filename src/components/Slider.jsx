import React from 'react';
import img1 from '../assets/Banner/dorian-mongel-BSOv5_J0eSg-unsplash.jpg'
import img2 from '../assets/Banner/eugene-kuznetsov-U1JDjSfAQ_s-unsplash.jpg'
import img3 from '../assets/Banner/gus-ruballo-h5QNclJUiA8-unsplash.jpg'
import img4 from '../assets/Banner/jose-rago-LNlJ0WZHiEs-unsplash.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div>
                <div className="text-center md:w-1/2 w-full mx-auto mb-10 mt-16">
  
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold animate__animated pulse">Buy Your Happiness.</h1>
                    <p className="mb-5">We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
                </div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <img src={img1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="" /> </SwiperSlide>
      </Swiper>
            </div>
    );
};

export default Slider;