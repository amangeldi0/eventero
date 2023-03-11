import React from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Description } from '@/pages/EventPage/ui/Description';

import bakr from '../../shared/assets/bakr.png';
import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <div className={cls.eventPageContainer}>
            <Poster />
            <div className={cls.swiperContainer}>
                <Swiper
                    modules={[A11y]}
                    slidesPerView="auto"
                    spaceBetween={5}
                >
                    <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                    <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                    <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                    {/* <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide> */}
                    {/* <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide> */}
                </Swiper>
            </div>
            <div className={cls.InfoContainer}>
                <Description />
            </div>
        </div>
    </div>
);
