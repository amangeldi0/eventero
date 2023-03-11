import React from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Description } from '@/pages/EventPage/ui/Description';
import { swiperEventGalleryBreakPoints } from '@/shared/constants/swiper/swiperLayout';

import bakr from '../../shared/assets/bakr.png';
import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <div className={cls.eventPageContainer}>
            <Poster />
            <Swiper
                className={cls.swiper}
                freeMode
                spaceBetween={5}
                modules={[FreeMode]}
                breakpoints={swiperEventGalleryBreakPoints}
            >
                <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                <SwiperSlide><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
            </Swiper>
            <div className={cls.InfoContainer}>
                <Description />
            </div>
        </div>
    </div>
);
