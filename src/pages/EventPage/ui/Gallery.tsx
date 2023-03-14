import React from 'react';
import { A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import bakr1 from '@/shared/assets/bakr1.jpg';
import bakr2 from '@/shared/assets/bakr2.jpg';
import bakr3 from '@/shared/assets/bakr3.jpg';
import { ImageContainer } from '@/shared/ui/ImageContainer/ImageContainer';

import cls from '@/pages/EventPage/EventPage.module.scss';

export const Gallery = () => (
    <Swiper
        modules={[A11y, Pagination]}
        slidesPerView="auto"
        spaceBetween={5}
        pagination={{ clickable: true }}
        className={cls.gallerySwiper}
    >
        <SwiperSlide className={cls.gallerySwiperSlide}><ImageContainer className={cls.galleryImage} img={bakr1} /></SwiperSlide>
        <SwiperSlide className={cls.gallerySwiperSlide}><ImageContainer className={cls.galleryImage} img={bakr2} /></SwiperSlide>
        <SwiperSlide className={cls.gallerySwiperSlide}><ImageContainer className={cls.galleryImage} img={bakr3} /></SwiperSlide>
    </Swiper>
);
