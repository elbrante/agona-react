import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import {Banner1} from "../Banners/Banner1/Banner1";
import {Banner2} from "../Banners/Banner2/Banner2";
import {Banner3} from "../Banners/Banner3/Banner3";
import cl from './Slider.module.sass'

import "swiper/css";






export const Slider = () => {

    return (
        <Swiper
            slidesPerView={1}
            modules={[Navigation]}
            className={cl.swiper}>
            <SwiperSlide><Banner1/></SwiperSlide>
            <SwiperSlide><Banner2/></SwiperSlide>
            <SwiperSlide><Banner3/></SwiperSlide>
        </Swiper>

    );
};
