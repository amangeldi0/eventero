import React from 'react';
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Contacts } from '@/pages/EventPage/ui/Contacts';
import { Description } from '@/pages/EventPage/ui/Description';

import bakr from '../../shared/assets/bakr.png';
import { Poster } from './ui/Poster';

import cls from './EventPage.module.scss';

export const EventPage = () => (
    <div className={cls.eventPage}>
        <Poster />
        <div className={cls.swiperContainer}>
            <Swiper
                modules={[A11y, Pagination]}
                slidesPerView="auto"
                spaceBetween={5}
                pagination={{ clickable: true }}
                className={cls.gallerySwiper}
            >
                <SwiperSlide className={cls.gallerySwiperSlide}><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                <SwiperSlide className={cls.gallerySwiperSlide}><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
                <SwiperSlide className={cls.gallerySwiperSlide}><img className={cls.galleryImage} src={bakr} alt="" /></SwiperSlide>
            </Swiper>
        </div>
        <div className={cls.InfoContainer}>
            <Contacts />
            <Description />
        </div>
    </div>
);
